'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaSearch, FaShoppingCart, FaStar } from 'react-icons/fa'

interface MenuItem {
  id: number;
  name: string;
  prices: { [key: string]: number };
  description: string;
  category: string;
  image?: string;
  rating?: number;
  preparationTime?: string;
}

const proteinItems: MenuItem[] = [
  {
    id: 1,
    name: 'Peppered Chicken',
    prices: { '1.5': 15000, '2.5': 15000, '5': 30000 },
    description: 'Spicy and flavorful peppered chicken',
    category: 'proteins',
    preparationTime: '30-45 mins',
    rating: 4.8,
  },
  { id: 2, name: 'Peppered Turkey', prices: { '1.5': 16000, '2.5': 13000, '5': 28000 }, description: 'Tender turkey with a peppery kick' },
  { id: 3, name: 'Peppered Beef', prices: { '1.5': 18000, '2.5': 19500, '5': 38500 }, description: 'Succulent beef with a spicy pepper coating' },
  { id: 4, name: 'Fried Fish', prices: { '1.5': 10000, '2.5': 15000, '5': 30000 }, description: 'Crispy fried fish' },
  { id: 5, name: 'Goat Meat', prices: { '1.5': 18000 }, description: 'Tender and flavorful goat meat' },
  { id: 6, name: 'Peppered Snail', prices: { 'piece': 3000 }, description: 'Delicacy of peppered snails' },
]

const specialItems: MenuItem[] = [
  {
    id: 7,
    name: 'Yam Porridge',
    prices: { '1.5': 15000, '2.5': 19500, '5': 40000 },
    description: 'Creamy yam porridge',
    category: 'specials',
    preparationTime: '20-35 mins',
    rating: 4.7,
  },
  { id: 8, name: 'Moi Moi', prices: { '1.5': 12000, '2.5': 15000, '5': 30000 }, description: 'Steamed bean pudding' },
  { id: 9, name: 'Ewa Agoyin', prices: { '1.5': 15000, '2.5': 19000, '5': 38000 }, description: 'Mashed beans with spicy sauce' },
  { id: 10, name: 'Akara', prices: { '1.5': 10000, '2.5': 13000, '5': 25000 }, description: 'Deep-fried bean cakes' },
  { id: 11, name: 'Fire Pasta', prices: { '1.5': 11000, '2.5': 12000, '5': 24000 }, description: 'Spicy pasta dish' },
]

const MenuCard = ({ item }: { item: MenuItem }) => {
  const cardBg = useColorModeValue('white', 'gray.700')
  const router = useRouter()

  return (
    <Box
      bg={cardBg}
      borderRadius="lg"
      overflow="hidden"
      shadow="sm"
      transition="all 0.2s"
      _hover={{ shadow: 'md', transform: 'translateY(-2px)' }}
    >
      <Box position="relative" h="200px">
        <Image
          src={item.image || `/placeholder.jpg`}
          alt={item.name}
          fill
          style={{ objectFit: 'cover' }}
        />
        {item.rating && (
          <Tag
            position="absolute"
            top={2}
            left={2}
            colorScheme="orange"
            display="flex"
            alignItems="center"
            gap={1}
          >
            <Icon as={FaStar} />
            {item.rating}
          </Tag>
        )}
      </Box>
      <Stack p={4} spacing={3}>
        <Flex justify="space-between" align="center">
          <Heading size="md">{item.name}</Heading>
          <Text color="orange.500" fontWeight="bold">
            from ₦{Object.values(item.prices)[0].toLocaleString()}
          </Text>
        </Flex>
        <Text color="gray.600" noOfLines={2}>
          {item.description}
        </Text>
        <Flex justify="space-between" align="center">
          <Text fontSize="sm" color="gray.500">
            {item.preparationTime} prep time
          </Text>
          <Button
            colorScheme="orange"
            size="sm"
            leftIcon={<FaShoppingCart />}
            onClick={() => router.push(`/order-now?item=${item.id}`)}
          >
            Order Now
          </Button>
        </Flex>
      </Stack>
    </Box>
  )
}

export default function ViewMenu() {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'proteins', name: 'Proteins' },
    { id: 'specials', name: 'delladelish\'s Specials' },
  ]

  const menuItems: MenuItem[] = [...proteinItems, ...specialItems]

  return (
    <Box bg={bgColor} minH="100vh" py={12}>
      <Container maxW="container.xl">
        <Stack spacing={8}>
          <Stack spacing={4}>
            <Heading size="2xl">Our Menu</Heading>
            <InputGroup maxW="600px">
              <InputLeftElement pointerEvents="none">
                <Icon as={FaSearch} color="gray.400" />
              </InputLeftElement>
              <Input
                placeholder="Search menu items..."
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="full"
              />
            </InputGroup>
          </Stack>

          <Flex gap={4} overflowX="auto" py={4}>
            {categories.map(category => (
              <Button
                key={category.id}
                colorScheme="orange"
                variant={activeCategory === category.id ? 'solid' : 'outline'}
                onClick={() => setActiveCategory(category.id)}
                minW="fit-content"
              >
                {category.name}
              </Button>
            ))}
          </Flex>

          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            gap={6}
          >
            {menuItems
              .filter(item => activeCategory === 'all' || item.category === activeCategory)
              .map(item => (
                <MenuCard key={item.id} item={item} />
              ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}