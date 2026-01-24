import { Footer } from '@widgets/Footer';
import { Header } from '@widgets/Header';
import { Portfolio } from '@widgets/Portfolio';
import { Showcase } from '@widgets/Showcase';
import styles from './homePage.module.scss';
import { ProjectCarousel } from '@widgets/ProjectCarousel';

export const HomePageUI: React.FC = () => {
  return (
    <div className={styles.home}>
      <Header />
      <main className={styles.main}>
        <Showcase />
        <ProjectCarousel />
        {/*<Portfolio />*/}
      </main>
      <Footer />
    </div>
  );
};
