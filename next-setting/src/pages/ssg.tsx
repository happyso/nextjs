type ITime = {
  time: string;
};

export default function SSG({ time }: ITime) {
  return (
    <>
      <p>SSG 입니다.</p>
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
  };
}
