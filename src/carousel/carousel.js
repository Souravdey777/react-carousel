import React, { useState } from "react";
import styles from "./carousel.module.css";

function Carousel(props) {
  const { CarouselObj } = props;
  const scroller = [];
  const scrollArea = React.createRef();
  const [blockPosition, setBlockPosition] = useState(0); // currectly focus block value

  function onclickLeft() {
    console.log((blockPosition > 0 ? blockPosition - 1 : 0) * 4);
    scrollArea.current.scrollTo({
      left:
        scroller[(blockPosition > 0 ? blockPosition - 1 : 0) * 4].offsetLeft -
        window.innerWidth * 0.02,
      behavior: "smooth",
    });
    setBlockPosition(blockPosition > 0 ? blockPosition - 1 : 0);
  }
  
  function onclickRight() {
    scrollArea.current.scrollTo({
      left:
        scroller[
          (blockPosition < CarouselObj.length - 1
            ? blockPosition + 1
            : blockPosition) * 4
        ].offsetLeft -
        window.innerWidth * 0.02,
      behavior: "smooth",
    });
    setBlockPosition(
      blockPosition < CarouselObj.length - 1 ? blockPosition + 1 : blockPosition
    );
  }

  return (
    <>
      <div onClick={onclickLeft}>Left</div>
      <div className={styles.carouselRoot} ref={scrollArea}>
        {CarouselObj.map((block, blockid) =>
          block.images.map((image, id) => (
            <div
              className={styles.image}
              key={id}
              ref={(ref) => {
                scroller[id + blockid * 4] = ref;
              }}
            >
              {id + blockid * 4}
              {/* <img src={image} alt={id + blockid * 4} /> */}
            </div>
          ))
        )}
      </div>
      <div onClick={onclickRight}>Right</div>
    </>
  );
}

export default Carousel;
