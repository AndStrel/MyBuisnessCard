import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';
import { useNavigate } from 'react-router-dom';
import { PageNotFoundUI } from '@components/ui/pages/PageNotFoundUI';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);

export const PageNotFound: React.FC = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/home');
  };

  // useGSAP(() => {
  //   const timeline = gsap.timeline();
  //   skills.forEach(({ key, text }) => {
  //     const ref = skillRefs[key];
  //     if (ref?.current) {
  //       ref.current.textContent = text;
  //       gsap.set(ref.current, { opacity: 0 });
  //       timeline.fromTo(
  //         ref.current,
  //         { opacity: 0, text: '' },
  //         { opacity: 1, duration: 0.5, text },
  //       );
  //     }
  //   });
  // });

  return <PageNotFoundUI handleClick={goHome} />;
};
