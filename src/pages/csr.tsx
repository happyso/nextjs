import { useEffect, useState } from 'react';
import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';

export default function CSR() {
  const [time, setTime] = useState('');
  useEffect(() => {
    return setTime(new Date().toISOString());
  });
  return (
    <>
      <p>CSR 입니다.</p>
      <p>{time}</p>
    </>
  );
}

CSR.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
