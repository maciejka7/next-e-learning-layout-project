import { useState } from "react";
import styles from "./preview.module.scss";

export default function Preview() {
  const [isVisible, setVisibility] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button onClick={() => setVisibility(!isVisible)}>
        {isVisible ? "close" : "show"}
      </button>

      {isVisible && (
        <img
          className={styles.image}
          src="https://cdn.dribbble.com/users/1728196/screenshots/14894041/media/4746348dec3a05157cf3197d07c35df5.png"
          alt=""
        />
      )}
    </div>
  );
}
