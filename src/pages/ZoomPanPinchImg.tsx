import { FC } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export const ZoomPanPinchImg: FC = () => {
  return (
    <TransformWrapper>
      <TransformComponent>
        <img src="./snowman.jpg" alt="snowman" />
      </TransformComponent>
    </TransformWrapper>
  );
};
