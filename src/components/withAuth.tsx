'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ComponentType, useEffect } from 'react';

export function withAuth<P extends object>(WrappedComponent: ComponentType<P>) {
  return function WithAuth(props: P) {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === 'unauthenticated') {
        router.push('/admin/login');
      }
    }, [status, router]);

    if (status === 'loading') {
      return <div>Loading...</div>;
    }

    if (status === 'authenticated') {
      return <WrappedComponent {...props} />;
    }

    return null;
  };
}
