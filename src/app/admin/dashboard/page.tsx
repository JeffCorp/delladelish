'use client';

import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FaChartLine, FaMotorcycle, FaUtensils, FaWallet } from 'react-icons/fa';

interface DashboardCardProps {
  title: string
  value: string | number
  icon: React.ElementType
  change?: number
  subtitle?: string
}

const DashboardCard = ({ title, value, icon, change, subtitle }: DashboardCardProps) => {
  const bgColor = useColorModeValue('white', 'gray.700')
  const iconBg = useColorModeValue('orange.50', 'orange.900')

  return (
    <Box bg={bgColor} p={6} borderRadius="xl" shadow="sm">
      <Flex justify="space-between" align="start" mb={4}>
        <Box>
          <Text color="gray.500" fontSize="sm" mb={1}>
            {title}
          </Text>
          <Heading size="lg">{value}</Heading>
          {subtitle && (
            <Text color="gray.600" fontSize="sm" mt={1}>
              {subtitle}
            </Text>
          )}
        </Box>
        <Flex
          bg={iconBg}
          p={3}
          borderRadius="full"
          color="orange.500"
          align="center"
          justify="center"
        >
          <Icon as={icon} boxSize={6} />
        </Flex>
      </Flex>
      {change !== undefined && (
        <StatGroup>
          <Stat>
            <StatHelpText>
              <StatArrow type={change >= 0 ? 'increase' : 'decrease'} />
              {Math.abs(change)}% from last month
            </StatHelpText>
          </Stat>
        </StatGroup>
      )}
    </Box>
  )
}

const RecentOrderCard = ({ order }) => {
  const bgColor = useColorModeValue('white', 'gray.700')

  return (
    <Box bg={bgColor} p={4} borderRadius="lg" shadow="sm">
      <Flex justify="space-between" align="center" mb={2}>
        <Text fontWeight="bold">Order #{order.id}</Text>
        <Text color="orange.500" fontSize="sm">
          {order.time}
        </Text>
      </Flex>
      <Text color="gray.600" mb={2}>{order.items}</Text>
      <Flex justify="space-between" align="center">
        <Text fontSize="sm" color="gray.500">
          {order.customer}
        </Text>
        <Text fontWeight="bold">₦{order.total.toLocaleString()}</Text>
      </Flex>
    </Box>
  )
}

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const bgColor = useColorModeValue('gray.50', 'gray.900')

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <Box minH="100vh" bg={bgColor} py={12}>
        <Container maxW="container.xl">
          <Text>Loading...</Text>
        </Container>
      </Box>
    )
  }

  const recentOrders = [
    {
      id: '12345',
      time: '10 mins ago',
      items: 'Peppered Chicken (1.5L), Moi Moi (2.5L)',
      customer: 'John Doe',
      total: 35000,
    },
    // Add more orders here
  ]

  return (
    <Box minH="100vh" bg={bgColor} py={12}>
      <Container maxW="container.xl">
        <Stack spacing={8}>
          <Flex justify="space-between" align="center">
            <Heading size="2xl">Dashboard</Heading>
            <Text color="gray.600">Welcome back, Admin</Text>
          </Flex>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            <DashboardCard
              title="Total Orders"
              value="156"
              icon={FaMotorcycle}
              change={12}
              subtitle="Last 30 days"
            />
            <DashboardCard
              title="Revenue"
              value="₦1,234,500"
              icon={FaWallet}
              change={8}
              subtitle="Last 30 days"
            />
            <DashboardCard
              title="Active Menu Items"
              value="24"
              icon={FaUtensils}
            />
            <DashboardCard
              title="Growth"
              value="23%"
              icon={FaChartLine}
              change={23}
              subtitle="vs last month"
            />
          </SimpleGrid>

          <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={6}>
            {/* Orders Overview */}
            <Box>
              <Heading size="md" mb={4}>Recent Orders</Heading>
              <Stack spacing={4}>
                {recentOrders.map((order) => (
                  <RecentOrderCard key={order.id} order={order} />
                ))}
              </Stack>
            </Box>

            {/* Popular Items */}
            <Box bg={useColorModeValue('white', 'gray.700')} p={6} borderRadius="xl" shadow="sm">
              <Heading size="md" mb={4}>Popular Items</Heading>
              <Stack spacing={4}>
                {['Peppered Chicken', 'Moi Moi', 'Ewa Agoyin'].map((item, index) => (
                  <Flex key={item} justify="space-between" align="center">
                    <Text>{item}</Text>
                    <Text color="orange.500" fontWeight="bold">
                      {85 - index * 12}%
                    </Text>
                  </Flex>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}
