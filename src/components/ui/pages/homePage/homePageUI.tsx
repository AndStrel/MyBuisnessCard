import { Carousel } from '@components/carousel';
import { Footer } from '@components/footer/footer';
import { Header } from '@components/header';
// import { Portfolio } from '@components/portfolio';
import { Showcase } from '@components/showcase';
import styles from './homePage.module.scss';
import { CarouselNew } from '@components/carouselNew';

export const HomePageUI: React.FC = () => {
  return (
    <div className={styles.home}>
      <Header />
      <main className={styles.main}>
        <CarouselNew />
        <Showcase />
        <Carousel />
        {/* <Portfolio /> */}
      </main>
      <Footer />
    </div>
  );
};
