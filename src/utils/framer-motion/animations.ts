import { animate } from 'framer-motion';

export function animationToggleInfos() {
   animate(
      '#bet-toggle-infos',
      { x: [30, 0] },
      { duration: 0.8, delay: 0.1, ease: 'backOut' }
   );
}

export function animateClover() {
   animate(
      '#clover',
      { scale: [1, 1, 0.8, 1], rotate: [0, 0, 0, 360] },
      { ease: 'circOut', repeat: Infinity, duration: 3 }
   );
}
