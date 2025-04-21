'use client';

import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useDisclosure,
  useToast
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';

interface FoodItem {
  id: string
  name: string
  category: string
  prices: { [key: string]: number }
  description: string
}

export default function Food() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [foodItems, setFoodItems] = useState<FoodItem[]>([])
  const [editingItem, setEditingItem] = useState<FoodItem | null>(null)

  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const tableBg = useColorModeValue('white', 'gray.700')

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    } else if (status === 'authenticated') {
      fetchFoodItems()
    }
  }, [status, router])

  const fetchFoodItems = async () => {
    try {
      const response = await fetch('/api/admin/food')
      const data = await response.json()
      setFoodItems(data)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch food items',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  const handleEdit = (item: FoodItem) => {
    setEditingItem(item)
    onOpen()
  }

  const handleDelete = async (id: string) => {
    // Add delete logic here
  }

  return (
    <Box bg={bgColor} minH="100vh" py={12}>
      <Container maxW="container.xl">
        <Stack spacing={8}>
          <Flex justify="space-between" align="center">
            <Heading size="2xl">Manage Menu Items</Heading>
            <Button
              colorScheme="orange"
              leftIcon={<Icon as={FaPlus} />}
              onClick={() => {
                setEditingItem(null)
                onOpen()
              }}
            >
              Add New Item
            </Button>
          </Flex>

          <Box
            bg={tableBg}
            borderRadius="xl"
            shadow="sm"
            overflow="hidden"
          >
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Category</Th>
                  <Th>Price Range</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {foodItems.map((item) => (
                  <Tr key={item.id}>
                    <Td fontWeight="medium">{item.name}</Td>
                    <Td>{item.category}</Td>
                    <Td>
                      ₦{Math.min(...Object.values(item.prices)).toLocaleString()} -
                      ₦{Math.max(...Object.values(item.prices)).toLocaleString()}
                    </Td>
                    <Td>
                      <Flex gap={2}>
                        <Button
                          size="sm"
                          colorScheme="blue"
                          leftIcon={<Icon as={FaEdit} />}
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          colorScheme="red"
                          leftIcon={<Icon as={FaTrash} />}
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </Button>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Stack>
      </Container>

      {/* Add/Edit Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {editingItem ? 'Edit Menu Item' : 'Add New Menu Item'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Item name" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Category</FormLabel>
                <Select placeholder="Select category">
                  <option value="proteins">Proteins</option>
                  <option value="specials">delladelish's Specials</option>
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Description</FormLabel>
                <Input placeholder="Item description" />
              </FormControl>

              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <FormControl>
                  <FormLabel>1.5L Price</FormLabel>
                  <Input type="number" placeholder="Price" />
                </FormControl>
                <FormControl>
                  <FormLabel>2.5L Price</FormLabel>
                  <Input type="number" placeholder="Price" />
                </FormControl>
                <FormControl>
                  <FormLabel>5L Price</FormLabel>
                  <Input type="number" placeholder="Price" />
                </FormControl>
              </Grid>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="orange">
              {editingItem ? 'Save Changes' : 'Add Item'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
