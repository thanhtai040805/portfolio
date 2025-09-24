import { useEffect, useState } from "react";

export const ScrollBarSection = () =>  {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const percent = (scrolled / maxScroll) * 100;
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scrollbar-wrapper">
      <div
        className="scrollbar-progress"
        style={{ transform: `translateY(-${100 - scrollPercent}%)` }}
      ></div>
    </div>
  );
}
