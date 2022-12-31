type ITime = {
  time: string;
};

export default function ISR({ time }: ITime) {
  return (
    <>
      <p>ISR 입니다.</p>
      <p>{time}</p>
    </>
  );
}

export async function getStaticProps() {
  console.log('server');
  return {
    props: {
      time: new Date().toISOString(),
    },
    revalidate: 10, // In seconds
  };
}
