import React, {useCallback, useRef} from 'react';

const useInfinityScroller = (
  loading: boolean,
  hasMore: boolean,
  setPageNumber: React.Dispatch<React.SetStateAction<number>>,
):
  | string
  | ((instance: HTMLDivElement | null) => void)
  | React.RefObject<HTMLDivElement>
  | null
  | undefined => {
  const observer = useRef<IntersectionObserver>();
  return useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current?.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber: number) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );
};

export default useInfinityScroller;
