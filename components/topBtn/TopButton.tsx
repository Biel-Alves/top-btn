import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

type Props = {
  scrollRef: any;
};

export const TopButton = ({ scrollRef }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (scrollRef.current.scrollTop > 900) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    scrollRef.current.addEventListener("scroll", toggleVisibility);
  }, [scrollRef]);

  const scrollToTop = () => {
    scrollRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-2 w-full flex justify-center">
      <button
        className={`${isVisible ? "opacity-100" : "opacity-0"} topBtn`}
        type="button"
        onClick={scrollToTop}
      >
        <ArrowSmallUpIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};
