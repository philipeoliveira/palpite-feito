import { animate } from 'framer-motion';

export function animationToggleInfos() {
   animate(
      '#bet-toggle-infos',
      { x: [30, 0] },
      { duration: 0.8, delay: 0.1, ease: 'backOut' }
   );
}
