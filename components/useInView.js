import { useRef, useState, useEffect } from "react";

export default options => {
  const ref = useRef(null);
  let observer = null;
  const [inView, setInView] = useState(true);

  useEffect(() => {
    (window.IntersectionObserver
      ? Promise.resolve()
      : import("intersection-observer")
    )
      .then(() => {
        observer = new IntersectionObserver(([entry]) => {
          setInView(entry.isIntersecting);
        }, options);
        observer.observe(ref.current);
      })
      .catch(() => {
        console.error("Something went wrong regarding intersection observer");
      });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return [ref, inView];
};
