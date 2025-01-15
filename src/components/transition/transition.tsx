import { SwitchTransition, Transition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useAppDispatch } from '@utils/store';
import { toggleCompleted } from '@slices/transitionSlice';
import { useRef } from 'react';

interface TransitionComponentProps {
  children: React.ReactNode;
}

export const TransitionComponent: React.FC<TransitionComponentProps> = ({
  children,
}) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const nodeRef = useRef<HTMLDivElement>(null); // Создаем реф для DOM-узла

  const handleOnEnter = () => {
    const node = nodeRef.current;
    if (node) {
      dispatch(toggleCompleted(false));
      gsap.set(node, {
        autoAlpha: 0,
        xPercent: location.pathname === '/about' ? 100 : -100,
      });
      gsap
        .timeline({
          paused: true,
          onComplete: () => {
            dispatch(toggleCompleted(true));
          },
        })
        .to(node, {
          autoAlpha: 1,
          xPercent: 0,
          duration: 0.5,
          ease: 'power2.out',
        })
        .play();
    }
  };

  const handleOnExit = () => {
    const node = nodeRef.current;
    if (node) {
      gsap
        .timeline({ paused: true })
        .to(node, {
          xPercent: location.pathname === '/about' ? 100 : -100,
          autoAlpha: 0,
          duration: 0.5,
          ease: 'power2.in',
        })
        .play();
    }
  };

  return (
    <SwitchTransition>
      <Transition
        key={location.pathname}
        timeout={500}
        nodeRef={nodeRef} // Передаем nodeRef
        onEnter={handleOnEnter} // Вызываем обработчик
        onExit={handleOnExit} // Вызываем обработчик
      >
        {(state) => <div ref={nodeRef}>{children}</div>}
      </Transition>
    </SwitchTransition>
  );
};
