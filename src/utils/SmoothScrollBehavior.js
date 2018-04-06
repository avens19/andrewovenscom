import ScrollBehavior from 'scroll-behavior';
import { scroller } from 'react-scroll';

export default class SmoothScrollBehavior extends ScrollBehavior {
  scrollToTarget(element, target) {
    if (element !== window || typeof target !== 'string') {
      super.scrollToTarget(element, target);
      return;
    }

    scroller.scrollTo(target, {
      duration: 1500,
      smooth: 'easeInOutQuint'
    });
  }
}