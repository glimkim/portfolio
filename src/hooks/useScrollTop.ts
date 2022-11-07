import { useState, useEffect } from 'react';
import _ from 'lodash';

function useScrollTop() {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = _.throttle(() => {
    setScrollTop(window.scrollY);
  }, 400);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return {
    scrollTop,
  };
}

export default useScrollTop;
