import Link from 'next/link';

const Home = (prop) => {
  return (
    <div>
      <h1>Next</h1>
      <h2>Message: {prop.message}</h2>
      <Link href='/product'>Produtos</Link>
    </div>
  )  
}

export default Home;

//https://www.youtube.com/watch?v=n47Y5-hSFSs&list=PLB97yPrFwo5jmtx3ClYFHvMLUMyx9qfnV