import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import styles from '@styles/components/app.module.scss';
import { HomePage } from '@pages/homePage';
import { AboutPage } from '@pages/aboutPage';
import { PathEnum } from '@utils/constants';
import gsap from 'gsap';
import { Cursor } from '@components/ui/cursor/cursor';
import { useGSAP } from '@gsap/react';
import { PageNotFound } from '@pages/PageNotFound';
import { Modal } from '@components/modal';
import { ProjectDetails } from '@pages/projectDetails';
gsap.registerPlugin(useGSAP);
export const App: React.FC = () => {
  const location = useLocation();
  // Определение старого фона при переходе по ссылке
  const backgroundLocation = location.state?.background || null;
  const navigate = useNavigate();
  const closeModal = () => {
    navigate(-1); // возвращаемся назад
  };
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);

  // Состояние для отслеживания, когда курсор выходит за пределы окна
  const [cursorOut, setCursorOut] = useState(false);

  // Состояние для отслеживания, когда курсор наводится на интерактивные элементы
  const [isHovered, setIsHovered] = useState(false);

  // Обработчик для событий наведения курсора
  const handleMouseEnter = () => {
    setIsHovered(true); // Устанавливаем состояние, когда курсор наводится на элемент
  };

  // Обработчик для события ухода курсора
  const handleMouseLeave = () => {
    setIsHovered(false); // Сбрасываем состояние, когда курсор покидает элемент
  };

  useGSAP(
    () => {
      const container = containerRef.current;
      const cursor = cursorRef.current; // Ссылка на элемент кастомного курсора
      const aura = auraRef.current; // Ссылка на элемент ауры
      if (!cursor || !aura) return; // Если элементы отсутствуют, завершаем выполнение эффекта

      let mouseX = 0;
      let mouseY = 0;
      let posX = 0;
      let posY = 0;

      // Обработчик движения мыши
      const handleMouseMove = (e: MouseEvent) => {
        setCursorOut(false); // Убираем состояние "курсор вне окна"
        mouseX = e.pageX; // Обновляем координаты X
        mouseY = e.pageY; // Обновляем координаты Y
      };

      // Обработчик ухода курсора за пределы окна
      const handleMouseOut = (e: MouseEvent) => {
        if (
          e.relatedTarget === null || // Уход за пределы окна
          !(e.relatedTarget instanceof HTMLElement) // Нет нового целевого элемента
        ) {
          setCursorOut(true); // Устанавливаем состояние "курсор вне окна"
        }
      };

      // Добавляем слушатели событий
      document.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseout', handleMouseOut);

      // Анимация кастомного курсора и ауры
      gsap.to({}, 0.01, {
        repeat: -1, // Бесконечный повтор
        onRepeat: () => {
          posX += (mouseX - posX) / 5; // Плавное приближение к позиции мыши
          posY += (mouseY - posY) / 5;

          // Обновление позиции кастомного курсора и ауры
          gsap.set(cursor, { css: { left: mouseX, top: mouseY } });
          gsap.set(aura, { css: { left: posX - 27, top: posY - 27 } });
        },
      });
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseout', handleMouseOut);
      };
    },
    { scope: containerRef },
  );

  // useEffect для добавления обработчиков наведения на интерактивные элементы
  useLayoutEffect(() => {
    const addEventListeners = () => {
      // Находим все интерактивные элементы (ссылки и кнопки)
      const interactiveElements = document.querySelectorAll('a, button');
      // Добавляем события для наведения и ухода курсора
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };
    addEventListeners();

    // Удаляем обработчики при размонтировании или изменении пути
    return () => {
      // clearTimeout(timeoutId);
      const interactiveElements = document.querySelectorAll('a, button');
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [location.pathname]); // Срабатывает при изменении пути

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={styles.app} ref={containerRef}>
      <Cursor
        cursorRef={cursorRef}
        auraRef={auraRef}
        cursorOut={cursorOut}
        isHovered={isHovered}
      />
      <Routes location={backgroundLocation || location}>
        <Route
          path={PathEnum.start}
          element={<Navigate to={PathEnum.home} replace />}
        />
        <Route path={PathEnum.home} element={<HomePage />} />
        <Route path={PathEnum.about} element={<AboutPage />} />
        <Route path={PathEnum.project} element={<ProjectDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {backgroundLocation && (
        <Routes>
          <Route
            path={PathEnum.project}
            element={
              <Modal onClose={closeModal}>
                <div>тут модалка</div>
                {/* <ProjectDetails /> */}
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
};
