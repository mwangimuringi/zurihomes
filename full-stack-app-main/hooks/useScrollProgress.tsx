"use client";
// hooks
import { useState, useEffect } from "react";
const useScrollProgress = () => {
  const [completion, setCompletion] = useState<number>(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(
          parseFloat(Number(currentProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    };

    //event
    window.addEventListener("scroll", updateScrollCompletion);
    // clear event
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);
  return completion;
};

export default useScrollProgress;
