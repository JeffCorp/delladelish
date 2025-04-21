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
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaClock, FaHeart, FaMotorcycle, FaSearch, FaStar } from 'react-icons/fa';
import { MdDeliveryDining, MdFavorite, MdLocalDining } from 'react-icons/md';

const PopularCategory = ({ icon, title }: { icon: React.ReactNode; title: string }) => {
  return (
    <Flex
      direction="column"
      align="center"
      bg={useColorModeValue('white', 'gray.700')}
      p={4}
      borderRadius="xl"
      cursor="pointer"
      transition="all 0.2s"
      _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
    >
      <Box
        bg={useColorModeValue('orange.50', 'orange.900')}
        p={3}
        borderRadius="full"
        color="orange.500"
        mb={2}
      >
        {icon}
      </Box>
      <Text fontWeight="medium">{title}</Text>
    </Flex>
  );
};

interface FeaturedRestaurantProps {
  name: string;
  rating: string;
  cuisine: string;
  deliveryTime: string;
  image: string;
}

const FeaturedRestaurant = ({ name, rating, cuisine, deliveryTime, image }: FeaturedRestaurantProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      borderRadius="xl"
      overflow="hidden"
      shadow="sm"
      transition="all 0.2s"
      _hover={{ shadow: 'md', transform: 'translateY(-2px)' }}
    >
      <Box position="relative" h="200px">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
        />
        <Button
          position="absolute"
          top={2}
          right={2}
          size="sm"
          borderRadius="full"
          colorScheme="red"
          variant="ghost"
          onClick={(e) => e.stopPropagation()}
        >
          <Icon as={FaHeart} />
        </Button>
      </Box>
      <Box p={4}>
        <Flex justify="space-between" align="center" mb={2}>
          <Heading size="md">{name}</Heading>
          <Flex align="center">
            <Icon as={FaStar} color="yellow.400" mr={1} />
            <Text fontWeight="bold">{rating}</Text>
          </Flex>
        </Flex>
        <Text color="gray.600" fontSize="sm" mb={2}>{cuisine}</Text>
        <Flex align="center" color="gray.500" fontSize="sm">
          <Icon as={FaMotorcycle} mr={2} />
          <Text>{deliveryTime} min</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default function LandingPage() {
  const router = useRouter();
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box bg={bgColor}>
      {/* Hero Section */}
      <Box
        bg="orange.500"
        color="white"
        py={{ base: 20, md: 32 }}
        position="relative"
        overflow="hidden"
      >
        <Container maxW="container.xl">
          <Stack spacing={6} maxW="container.md">
            <Heading
              fontSize={{ base: '3xl', md: '5xl' }}
              fontWeight="bold"
              lineHeight="shorter"
            >
              Delicious food delivered to your doorstep
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }}>
              Order from the best local restaurants with easy, on-demand delivery.
            </Text>
            <InputGroup size="lg" maxW="600px">
              <InputLeftElement pointerEvents="none">
                <Icon as={FaSearch} color="gray.400" />
              </InputLeftElement>
              <Input
                bg="white"
                color="gray.800"
                placeholder="Search for food"
                _placeholder={{ color: 'gray.500' }}
                borderRadius="full"
              />
            </InputGroup>
          </Stack>
        </Container>
      </Box>

      {/* Categories Section */}
      <Container maxW="container.xl" py={12}>
        <Heading mb={8} size="lg">Popular Categories</Heading>
        <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }} spacing={6}>
          <PopularCategory icon={<Icon as={MdLocalDining} boxSize={6} />} title="Local Favorites" />
          <PopularCategory icon={<Icon as={FaClock} boxSize={6} />} title="Fast Delivery" />
          <PopularCategory icon={<Icon as={MdDeliveryDining} boxSize={6} />} title="Daily Deals" />
          <PopularCategory icon={<Icon as={MdFavorite} boxSize={6} />} title="Most Loved" />
        </SimpleGrid>
      </Container>

      {/* Featured Restaurants */}
      <Container maxW="container.xl" py={12}>
        <Heading mb={8} size="lg">Featured Restaurants</Heading>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={6}
        >
          <FeaturedRestaurant
            name="delladelish's Kitchen"
            rating="4.8"
            cuisine="Nigerian • Local"
            deliveryTime="30-45"
            image="/cooking.jpg"
          />
          {/* Add more restaurants here */}
        </Grid>
      </Container>

      {/* Download App Section */}
      <Box bg="orange.500" color="white" py={16}>
        <Container maxW="container.xl">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={8}
            align="center"
            justify="space-between"
          >
            <Stack spacing={4} maxW="lg">
              <Heading size="xl">Get the best food delivery experience</Heading>
              <Text fontSize="lg">
                Download our mobile app for faster ordering, exclusive deals, and real-time order tracking.
              </Text>
              <Stack direction="row" spacing={4}>
                <Button
                  bg="black"
                  color="white"
                  _hover={{ bg: 'gray.800' }}
                  size="lg"
                >
                  App Store
                </Button>
                <Button
                  bg="black"
                  color="white"
                  _hover={{ bg: 'gray.800' }}
                  size="lg"
                >
                  Google Play
                </Button>
              </Stack>
            </Stack>
            <Box w={{ base: 'full', md: '40%' }} h="300px" position="relative">
              {/* Add phone mockup image here */}
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}