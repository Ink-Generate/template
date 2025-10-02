// components/ui/image.tsx
import * as React from "react";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, ...props }, ref) => (
    <img
      ref={ref}
      className={`rounded-md object-cover ${className || ""}`}
      {...props}
    />
  )
);

Image.displayName = "Image";
