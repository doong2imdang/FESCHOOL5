import { useState, useEffect } from "react";

export default function useScrollBottom() {
  const [isBottom, setIsBottom] = useState(false);
  console.log(isBottom);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log(document.documentElement.scrollTop + window.innerHeight);
      // console.log(document.documentElement.offsetHeight);
      setIsBottom(Math.ceil(document.documentElement.scrollTop + window.innerHeight + 30) >= document.documentElement.offsetHeight);
    })
  }, []);

  return isBottom;
}