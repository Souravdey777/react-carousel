import React from "react";
import styles from "./carousel.module.css";

function Carousel(props) {
  const { CarouselObj } = props;
  return (
    <div className={styles.carouselRoot}>
      {CarouselObj.map((block) =>
        block.images.map((image) => <div className={styles.image}>{image}</div>)
      )}
    </div>
  );
}

export default Carousel;
