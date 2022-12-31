import React, { useState } from 'react';
import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';

export async function getServerSideProps() {
  console.log('server');
  return {
    props: {},
  };
}

export default function Info() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const { status = 'inintial' } = router.query;
  return (
    <>
      <div className="text-3xl font-bold">My Info</div>
      <div className="text-3xl font-bold">Clicked : {String(clicked)}</div>
      <div className="text-3xl font-bold">Status : {status}</div>

      <button
        onClick={() => {
          alert('edit');
          setClicked(true);
          location.replace('/settings/info?status=editing');
        }}
      >
        edit (replace)
      </button>
      <br />
      <button
        onClick={() => {
          alert('edit');
          setClicked(true);
          router.push('/settings/info?status=editing');
        }}
      >
        edit (push)
      </button>
      <br />
      <button
        onClick={() => {
          alert('edit');
          setClicked(true);
          router.push('/settings/info?status=editing', undefined, { shallow: true });
        }}
      >
        edit (shallow)
      </button>
    </>
  );
}

Info.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
