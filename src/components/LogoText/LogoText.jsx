import { useEffect, forwardRef } from "react";
import styles from "./LogoText.module.css";

export const LogoText = forwardRef((props, ref) => {

  useEffect(() => {
    const tId = setTimeout(() => {
      if (ref && ref.current) {
        ref.current.classList.add(styles.moved);
      }
    }, 2500);

    return () => {
      clearTimeout(tId);
    };
  }, [ref]);

  return (
    <h2 ref={ref} className={styles.logoText}>
      Campers Rental Service
    </h2>
  );
});

LogoText.displayName = "LogoText";