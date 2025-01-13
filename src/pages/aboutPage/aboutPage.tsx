import { AboutPageUI } from '@ui/pages';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);
type SkillKeys =
  | 'react'
  | 'ts'
  | 'js'
  | 'html'
  | 'css'
  | 'redux'
  | 'git'
  | 'jest'
  | 'cypress'
  | 'vite'
  | 'webpack';

export const AboutPage: React.FC = () => {
  const skillRefs: Record<SkillKeys, React.RefObject<HTMLLIElement>> = {
    react: useRef<HTMLLIElement>(null),
    ts: useRef<HTMLLIElement>(null),
    js: useRef<HTMLLIElement>(null),
    html: useRef<HTMLLIElement>(null),
    css: useRef<HTMLLIElement>(null),
    redux: useRef<HTMLLIElement>(null),
    git: useRef<HTMLLIElement>(null),
    jest: useRef<HTMLLIElement>(null),
    cypress: useRef<HTMLLIElement>(null),
    vite: useRef<HTMLLIElement>(null),
    webpack: useRef<HTMLLIElement>(null),
  };

  const skills: { key: SkillKeys; text: string }[] = [
    { key: 'react', text: 'React' },
    { key: 'ts', text: 'TypeScript' },
    { key: 'js', text: 'JavaScript' },
    { key: 'html', text: 'HTML' },
    { key: 'css', text: 'CSS' },
    { key: 'redux', text: 'Redux' },
    { key: 'git', text: 'Git' },
    { key: 'jest', text: 'Jest' },
    { key: 'cypress', text: 'Cypress' },
    { key: 'vite', text: 'Vite' },
    { key: 'webpack', text: 'Webpack' },
  ];

  const navigate = useNavigate();
  const goHome = () => {
    navigate('/home');
  };

  useEffect(() => {
    const timeline = gsap.timeline();
    skills.forEach(({ key, text }) => {
      const ref = skillRefs[key];
      if (ref?.current) {
        ref.current.textContent = text;
        gsap.set(ref.current, { opacity: 0 });
        timeline.fromTo(
          ref.current,
          { opacity: 0, text: '' },
          { opacity: 1, duration: 0.5, text },
        );
      }
    });
  }, []);

  return <AboutPageUI handleClick={goHome} skillRefs={skillRefs} />;
};
