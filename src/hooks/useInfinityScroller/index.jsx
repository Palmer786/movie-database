import {useRef, useCallback} from 'react';

const useInfinityScroller = (loading, hasMore, setPageNumber) => {
  const observer = useRef();
  const lastMovieElementRef = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );
  return lastMovieElementRef;
};

export default useInfinityScroller;
