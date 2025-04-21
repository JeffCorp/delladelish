'use client'

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
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { FaClock, FaMotorcycle, FaShoppingCart } from 'react-icons/fa'

interface OrderSummaryProps {
  selectedItem: string;
  quantity: number;
  deliveryTime: string;
  price: number;
}

const OrderSummary = ({ selectedItem, quantity, deliveryTime, price }: OrderSummaryProps) => {
  const bgColor = useColorModeValue('white', 'gray.700')

  return (
    <Box bg={bgColor} p={6} borderRadius="xl" shadow="sm">
      <Stack spacing={4}>
        <Heading size="md">Order Summary</Heading>
        <Grid templateColumns="1fr auto" gap={4}>
          <Text color="gray.600">Item</Text>
          <Text fontWeight="semibold">{selectedItem || 'Not selected'}</Text>

          <Text color="gray.600">Quantity</Text>
          <Text fontWeight="semibold">{quantity} liter(s)</Text>

          <Text color="gray.600">Delivery Time</Text>
          <Text fontWeight="semibold">
            {deliveryTime === '7:30' ? '7:30 AM' : '3:00 PM'}
          </Text>

          <Text color="gray.600">Subtotal</Text>
          <Text fontWeight="semibold">₦{(price * quantity).toLocaleString()}</Text>

          <Text color="gray.600">Delivery Fee</Text>
          <Text fontWeight="semibold">₦1,000</Text>

          <Box pt={4} gridColumn="1 / -1">
            <Flex justify="space-between" align="center">
              <Text fontSize="lg" fontWeight="bold">Total</Text>
              <Text fontSize="lg" fontWeight="bold" color="orange.500">
                ₦{((price * quantity) + 1000).toLocaleString()}
              </Text>
            </Flex>
          </Box>
        </Grid>
      </Stack>
    </Box>
  )
}

export default function OrderNow() {
  const [selectedItem, setSelectedItem] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [deliveryTime, setDeliveryTime] = useState('7:30')
  const [phoneNumber, setPhoneNumber] = useState('')
  const toast = useToast()
  const bgColor = useColorModeValue('gray.50', 'gray.900')

  const { data: menuData, isLoading } = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const response = await axios.get('/api?action=get-menu')
      return response.data.menu
    },
  })

  const orderMutation = useMutation({
    mutationFn: (orderData: any) => axios.post('/api?action=place-order', orderData),
    onSuccess: () => {
      toast({
        title: 'Order Placed Successfully!',
        description: 'Your delicious meal is being prepared.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    },
  })

  const selectedItemPrice = menuData?.find(item => item.name === selectedItem)?.price || 0

  return (
    <Box bg={bgColor} minH="100vh" py={12}>
      <Container maxW="container.xl">
        <Stack spacing={8}>
          <Heading size="2xl">Place Your Order</Heading>

          <Grid templateColumns={{ base: '1fr', lg: '3fr 2fr' }} gap={8}>
            <Box bg={useColorModeValue('white', 'gray.700')} p={6} borderRadius="xl" shadow="sm">
              <Stack spacing={6}>
                <FormControl isRequired>
                  <FormLabel>Select Your Dish</FormLabel>
                  <Select
                    placeholder="Choose a dish"
                    value={selectedItem}
                    onChange={(e) => setSelectedItem(e.target.value)}
                    isDisabled={isLoading}
                  >
                    {menuData?.map((item) => (
                      <option key={item._id} value={item.name}>
                        {item.name} - ₦{item.price.toLocaleString()}/liter
                      </option>
                    ))}
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Quantity (in liters)</FormLabel>
                  <Input
                    type="number"
                    min={1}
                    step={0.5}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Delivery Time</FormLabel>
                  <RadioGroup value={deliveryTime} onChange={setDeliveryTime}>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                      <Radio value="7:30">
                        <Flex align="center" gap={2}>
                          <Icon as={FaClock} />
                          <Text>7:30 AM</Text>
                        </Flex>
                      </Radio>
                      <Radio value="15:00">
                        <Flex align="center" gap={2}>
                          <Icon as={FaClock} />
                          <Text>3:00 PM</Text>
                        </Flex>
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </FormControl>
              </Stack>
            </Box>

            <Stack spacing={6}>
              <OrderSummary
                selectedItem={selectedItem}
                quantity={quantity}
                deliveryTime={deliveryTime}
                price={selectedItemPrice}
              />

              <Button
                size="lg"
                colorScheme="orange"
                leftIcon={<Icon as={FaShoppingCart} />}
                onClick={() => orderMutation.mutate({
                  selectedItem,
                  quantity,
                  deliveryTime,
                  phoneNumber,
                })}
                isLoading={orderMutation.isLoading}
              >
                Place Order
              </Button>

              <Flex align="center" gap={2} color="gray.600">
                <Icon as={FaMotorcycle} />
                <Text fontSize="sm">Estimated delivery time: 45-60 minutes</Text>
              </Flex>
            </Stack>
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}
