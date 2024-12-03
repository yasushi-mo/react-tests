import { FC } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export const ZoomPanPinchH1: FC = () => {
  return (
    <TransformWrapper>
      <TransformComponent>
        <h1>Zoom Pan Pinch</h1>
      </TransformComponent>
    </TransformWrapper>
  );
};
