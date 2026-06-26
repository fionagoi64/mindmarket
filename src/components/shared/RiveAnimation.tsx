import { useRive } from "@rive-app/react-canvas";

type TRiveAnimation = {
  src: string;
  autoplay?: boolean;
  width?: number;
  height?: number;
  className?: string;
};

export const RiveAnimation = ({
  src,
  autoplay = true,
  width = 400,
  height = 400,
  className,
}: TRiveAnimation) => {
  const { RiveComponent } = useRive({
    src: `/rive/${src}.riv`,
    autoplay,
  });

  return (
    <div
      style={{ width, height }}
      className={className}
    >
      <RiveComponent className="h-full w-full" />
    </div>
  );
};
