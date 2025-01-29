import { toggleCompleted } from '@slices/transitionSlice';
import { useAppDispatch } from '@utils/store';

const dispatch = useAppDispatch();

export const usePageTransition = () => ({
  onEnter: (node: gsap.TweenTarget) => {
    dispatch(toggleCompleted(false));
    gsap.set(node, { autoAlpha: 0, scale: 0.8, xPercent: -100 });
    gsap
      .timeline({
        paused: true,
        onComplete: () => {
          dispatch(toggleCompleted(true));
        },
      })
      .to(node, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
      .to(node, { scale: 1, duration: 0.25 })
      .play();
  },
  onExit: (node: gsap.TweenTarget) => {
    gsap
      .timeline({ paused: true })
      .to(node, { scale: 0.8, duration: 0.2 })
      .to(node, { xPercent: 100, autoAlpha: 0, duration: 0.2 })
      .play();
  },
});
