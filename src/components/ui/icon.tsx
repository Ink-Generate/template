// components/ui/icon.tsx
import * as React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof LucideIcons;
  "data-marker"?: string; // allow Babel to inject marker
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, className, ...props }, ref) => {
    const LucideIcon =
      LucideIcons[name] as React.FC<React.SVGProps<SVGSVGElement>>;

    if (!LucideIcon) {
      console.warn(`Icon "${name}" does not exist in lucide-react`);
      return null;
    }

    // Spread props so data-marker gets applied directly to the <svg>
    return (
      <LucideIcon
        ref={ref}
        className={cn("w-5 h-5", className)}
        {...props}
      />
    );
  }
);

Icon.displayName = "Icon";
