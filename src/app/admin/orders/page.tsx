'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Orders() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    } else if (status === 'authenticated') {
      fetchOrders();
    }
  }, [status, router]);

  const fetchOrders = async () => {
    const response = await fetch('/api/admin/orders');
    const data = await response.json();
    setOrders(data);
  };

  if (status === 'loading') return <div>Loading...</div>;

  return (
    <div>
      <h1>Manage Orders</h1>
      {/* Render orders and CRUD operation UI here */}
    </div>
  );
}
