'use client'

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

export default function UploadFood() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const toast = useToast()
  const uploadMutation = useMutation({
    mutationFn: (foodData: { name: string; price: number }) =>
      axios.post('/api?action=upload-food', foodData),
    onSuccess: () => {
      toast({
        title: 'Food Item Uploaded',
        description: 'The new food item has been added to the menu.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setName('')
      setPrice('')
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'There was an error uploading the food item. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    },
  }
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    uploadMutation.mutate({ name, price: parseFloat(price) })
  }

  return (
    <Box minH="100vh" py={12}>
      <Container maxW="container.sm">
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="2xl" textAlign="center">
            Upload Food Item
          </Heading>
          <Box bg="white" rounded="lg" p={8} shadow="base">
            <form onSubmit={handleSubmit}>
              <VStack spacing={6}>
                <FormControl isRequired>
                  <FormLabel htmlFor="name">Food Name</FormLabel>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="price">Price (in Naira)</FormLabel>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </FormControl>
                <Button type="submit" colorScheme="blue" size="lg" width="full">
                  Upload Food Item
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
