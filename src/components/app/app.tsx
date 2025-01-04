import { HomePage } from '@pages/homePage';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import styles from '@styles/components/app.module.scss';
import { AboutPage } from '@pages/aboutPage';
import { PathEnum } from '@utils/constants';

export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route
            path={PathEnum.start}
            element={<Navigate to={PathEnum.home} replace />}
          />
          <Route path={PathEnum.home} element={<HomePage />} />
          <Route path={PathEnum.about} element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
