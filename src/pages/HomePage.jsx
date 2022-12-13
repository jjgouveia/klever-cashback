import Badge from '../components/Badge';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Store from '../components/Store';
import '../styles/Full.css';

function Home() {
  return (
    <div className='bg-klever-dark flex flex-col gap-12 md:gap-0'>
      <Header />
      <main className='mt-20 min-h-[calc(100vh-220px)]'>
        <Hero />
        <Store />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
