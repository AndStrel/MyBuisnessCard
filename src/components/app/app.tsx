import { HomePage } from '@pages/homePage';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import styles from '@styles/components/app.module.scss';
import { AboutPage } from '@pages/aboutPage';

export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
