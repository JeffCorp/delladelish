'use client';

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  useToast
} from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const toast = useToast()

  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.700')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })

      if (result?.ok) {
        router.push('/admin/dashboard')
        toast({
          title: 'Login Successful',
          description: 'Welcome back to the admin dashboard',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      } else {
        toast({
          title: 'Login Failed',
          description: 'Invalid email or password',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred during login',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Box bg={bgColor} minH="100vh" py={12}>
      <Container maxW="lg">
        <Stack spacing={8}>
          <Stack align="center">
            <Heading
              fontSize="4xl"
              bgGradient="linear(to-r, orange.400, orange.600)"
              bgClip="text"
            >
              Admin Login
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Sign in to access the admin dashboard ✌️
            </Text>
          </Stack>

          <Box
            bg={cardBg}
            p={8}
            borderRadius="xl"
            boxShadow="lg"
            border="1px"
            borderColor={useColorModeValue('gray.200', 'gray.700')}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={6}>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@example.com"
                    size="lg"
                  // leftElement={
                  //   <Icon as={FaUser} color="gray.500" w={4} h={4} ml={3} />
                  // }
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    size="lg"
                  // leftElement={
                  //   <Icon as={FaLock} color="gray.500" w={4} h={4} ml={3} />
                  // }
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="orange"
                  size="lg"
                  fontSize="md"
                  isLoading={isLoading}
                  loadingText="Signing in..."
                >
                  Sign in
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
