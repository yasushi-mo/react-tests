import { FC } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export const ZoomPanPinch: FC = () => {
  return (
    <TransformWrapper>
      <TransformComponent>
        <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
          <image href="./snowman.jpg" width="600" height="400" />
        </svg>
      </TransformComponent>
    </TransformWrapper>
  );
};
