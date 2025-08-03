import { AboutPageUI } from '@ui/pages';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);
type SkillKeys =
  | 'react'
  | 'redux'
  | 'ts'
  | 'js'
  | 'stimulus'
  | 'twig'
  | 'git'
  | 'docker'
  | 'jest'
  | 'cypress'
  | 'vite'
  | 'webpack';

export const AboutPage: React.FC = () => {
  const skillRefs: Record<SkillKeys, React.RefObject<HTMLLIElement>> = {
    react: useRef<HTMLLIElement>(null),
    redux: useRef<HTMLLIElement>(null),
    ts: useRef<HTMLLIElement>(null),
    js: useRef<HTMLLIElement>(null),
    stimulus: useRef<HTMLLIElement>(null),
    twig: useRef<HTMLLIElement>(null),
    git: useRef<HTMLLIElement>(null),
    docker: useRef<HTMLLIElement>(null),
    jest: useRef<HTMLLIElement>(null),
    cypress: useRef<HTMLLIElement>(null),
    vite: useRef<HTMLLIElement>(null),
    webpack: useRef<HTMLLIElement>(null),
  };

  const skills: { key: SkillKeys; text: string }[] = [
    { key: 'react', text: 'React' },
    { key: 'redux', text: 'Redux' },
    { key: 'ts', text: 'TypeScript' },
    { key: 'js', text: 'JavaScript' },
    { key: 'stimulus', text: 'Stimulus' },
    { key: 'twig', text: 'Twig' },
    { key: 'git', text: 'Git' },
    { key: 'docker', text: 'Docker' },
    { key: 'jest', text: 'Jest' },
    { key: 'cypress', text: 'Cypress' },
    { key: 'vite', text: 'Vite' },
    { key: 'webpack', text: 'Webpack' },
  ];

  useGSAP(() => {
    const timeline = gsap.timeline();
    skills.forEach(({ key, text }) => {
      const ref = skillRefs[key];
      if (ref?.current) {
        ref.current.textContent = text;
        gsap.set(ref.current, { opacity: 0 });
        timeline.fromTo(
          ref.current,
          { opacity: 0, text: '' },
          { opacity: 1, duration: 0.3, text },
        );
      }
    });
  });

  return (
    <AboutPageUI
      handleClick={() => window.history.back()}
      skillRefs={skillRefs}
    />
  );
};
