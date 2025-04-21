import Layout from '@/components/layout';

export default function ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}
