import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold tracking-[0.02em] transition-all duration-150 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-45 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.985] active:translate-y-[1px]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border border-primary/65 shadow-glow shadow-[0_0_0_1px_rgba(255,255,255,0.14),_0_16px_52px_-35px_rgba(255,98,56,0.8)] hover:brightness-110 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.22),_0_18px_65px_-38px_rgba(255,98,56,0.85)] hover:-translate-y-0.5",
        cta: "bg-[linear-gradient(120deg,_hsl(var(--primary))_0%,_hsl(var(--accent))_100%)] text-[hsl(var(--primary-foreground))] border border-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.12),_0_26px_70px_-46px_rgba(255,98,56,0.95)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),_0_22px_78px_-42px_rgba(0,214,255,0.45)] hover:-translate-y-0.5 hover:saturate-150",
        ghost:
          "border border-white/20 bg-white/[0.06] text-foreground/90 shadow-[0_8px_30px_-26px_rgba(255,255,255,0.28)] hover:bg-white/[0.15] hover:border-white/35 hover:text-foreground",
        outline:
          "border border-white/30 bg-black/30 text-foreground hover:bg-black/55 hover:border-white/45 hover:text-foreground hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),_0_16px_48px_-34px_rgba(255,255,255,0.2)]",
        accent: "bg-accent text-accent-foreground border border-accent/50 hover:bg-accent hover:brightness-95 hover:shadow-[0_0_0_1px_rgba(0,0,0,0.15),_0_16px_55px_-34px_rgba(0,210,255,0.45)]",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base leading-none",
        xl: "h-14 px-10 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
