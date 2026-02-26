import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Destinations from '@/components/Destinations/Destinations';
import BookTrip from '@/components/BookTrip/BookTrip';
import Testimonials from '@/components/Testimonials/Testimonials';
import Subscribe from '@/components/Subscribe/Subscribe';
import Footer from '@/components/Footer/Footer';


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Destinations />
      <BookTrip />
      <Testimonials />
      <Subscribe />
      <Footer />
    </main>
  );
}
