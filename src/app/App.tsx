import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from '@app/styles/components/app.module.scss';
import { HomePage } from '@pages/HomePage';
import { AboutPage } from '@pages/AboutPage';
import { PathEnum } from '@shared/lib/constants';
import gsap from 'gsap';
import { Cursor } from '@shared/ui/Cursor';
import { useGSAP } from '@gsap/react';
import { PageNotFound } from '@pages/PageNotFound';
import { Modal } from '@shared/ui/Modal';
import { ProjectDetails } from '@pages/ProjectDetails';

gsap.registerPlugin(useGSAP);

const getPathDepth = (pathname: string): number => {
  if (pathname === PathEnum.start) return 0;
  if (pathname === PathEnum.about) return 1;
  // Обработка /projects/:id
  if (pathname.includes('/projects')) return 2;
  return 0;
};

export const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Определение старого фона при переходе по ссылке
  const backgroundLocation = location.state?.background || null;

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

  // Для определения направления анимации
  const prevDepth = useRef(getPathDepth(location.pathname));
  const [direction, setDirection] = useState<'right' | 'left' | null>(null);

  useEffect(() => {
    const depth = getPathDepth(location.pathname);
    if (depth > prevDepth.current) {
      setDirection('right');
    } else if (depth < prevDepth.current) {
      setDirection('left');
    } else {
      setDirection(null);
    }
    prevDepth.current = depth;
  }, [location.pathname]);

  const onEnter = (node: HTMLElement) => {
    if (!direction) return;

    const xStart = direction === 'right' ? '100%' : '-100%';

    gsap.set(node, {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1,
    });

    gsap.fromTo(
      node,
      { x: xStart },
      {
        x: '0%',
        duration: 0.8,
        ease: 'power3.out',
        onComplete: () => {
          gsap.set(node, { clearProps: 'all' });
        },
      },
    );
  };

  const onExit = (node: HTMLElement) => {
    if (!direction) return;

    const xEnd = direction === 'right' ? '-100%' : '100%';

    gsap.set(node, {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 0,
    });

    gsap.to(node, {
      x: xEnd,
      duration: 0.8,
      ease: 'power3.out',
    });
  };

  // Обработчик для событий наведения курсора
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Обработчик для события ухода курсора
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useGSAP(
    () => {
      const container = containerRef.current;
      const cursor = cursorRef.current;
      const aura = auraRef.current;
      if (!cursor || !aura) return;

      let mouseX = 0;
      let mouseY = 0;
      let posX = 0;
      let posY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        setCursorOut(false);
        mouseX = e.pageX;
        mouseY = e.pageY;
      };

      const handleMouseOut = (e: MouseEvent) => {
        if (
          e.relatedTarget === null ||
          !(e.relatedTarget instanceof HTMLElement)
        ) {
          setCursorOut(true);
        }
      };

      document.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseout', handleMouseOut);

      gsap.to(
        {},
        {
          duration: 0.01,
          repeat: -1,
          onRepeat: () => {
            posX += (mouseX - posX) / 5;
            posY += (mouseY - posY) / 5;
            gsap.set(cursor, { css: { left: mouseX, top: mouseY } });
            gsap.set(aura, { css: { left: posX - 27, top: posY - 27 } });
          },
        },
      );
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseout', handleMouseOut);
      };
    },
    { scope: containerRef },
  );

  useLayoutEffect(() => {
    const addEventListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };
    addEventListeners();

    return () => {
      const interactiveElements = document.querySelectorAll('a, button');
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [location.pathname]);

  useEffect(() => {
    if (!backgroundLocation) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, backgroundLocation]);

  return (
    <div className={styles.app} ref={containerRef}>
      <Cursor
        cursorRef={cursorRef}
        auraRef={auraRef}
        cursorOut={cursorOut}
        isHovered={isHovered}
      />

      <TransitionGroup component={null}>
        <CSSTransition
          key={
            backgroundLocation ? backgroundLocation.pathname : location.pathname
          }
          timeout={800}
          onEnter={onEnter}
          onExit={onExit}
          mountOnEnter={false}
          unmountOnExit={true}
        >
          <Routes location={backgroundLocation || location}>
            <Route path={PathEnum.start} element={<HomePage />} />
            <Route path={PathEnum.about} element={<AboutPage />} />
            <Route path={PathEnum.project} element={<ProjectDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>

      {backgroundLocation && (
        <Routes>
          <Route
            path={PathEnum.project}
            element={
              <Modal onClose={closeModal}>
                <div>тут модалка</div>
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
};
