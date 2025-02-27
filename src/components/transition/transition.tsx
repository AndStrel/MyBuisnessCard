// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import styles from './transition.module.scss';

// interface TransitionComponentProps {
//   children: React.ReactNode;
// }

// export const TransitionComponent: React.FC<TransitionComponentProps> = ({
//   children,
// }) => {
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   return (
//     <TransitionGroup>
//       <CSSTransition
//         key={location.pathname}
//         timeout={1000}
//         classNames={{
//           enter: styles['fade-enter'],
//           enterActive: styles['fade-enter-active'],
//           exit: styles['fade-exit'],
//           exitActive: styles['fade-exit-active'],
//         }}
//       >
//         <div>{children}</div>
//       </CSSTransition>
//     </TransitionGroup>
//   );
// };
