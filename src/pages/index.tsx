import Config from '../../config/config.export';
import Link from 'next/link';
type ITime = {
  time: string;
};
export default function Home({ time }: ITime) {
  return (
    <>
      <p>{Config().mode}</p>
      <p>{time}</p>
      <h2>
        <Link href="/csr">CSR 로</Link>
      </h2>
      <h2>
        <Link href="/ssg">SSG로</Link>
      </h2>
      <h2>
        <Link href="/isr">ISR로</Link>
      </h2>
    </>
  );
}

export async function getServerSideProps() {
  console.log('server');
  return {
    props: {
      time: new Date().toISOString(),
    },
  };
}
