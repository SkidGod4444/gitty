import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex font-lora uppercase items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "text-primary-foreground bg-primary transition duration-300 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] border border-primary/60 shadow-[0_4px_0_0_rgba(8,8,20,0.25),0_2px_12px_0_rgba(0,0,0,0.18),inset_0_2px_4px_#ffffff44,inset_0_-4px_6px_-4px_#00000029] hover:shadow-[0_2px_0_0_rgba(8,8,20,0.19),0_6px_16px_0_rgba(0,0,0,0.14),inset_0_3px_6px_#ffffff33,inset_0_-2px_2px_-2px_#00000018] active:translate-y-1 active:shadow-[0_1px_0_0_rgba(8,8,20,0.25),0_1px_6px_0_rgba(0,0,0,0.17),inset_0_1px_2px_#ffffff33] hover:bg-primary/90",
        destructive:
          "text-white bg-destructive transition duration-300 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] border border-destructive/60 shadow-[0_4px_0_0_rgba(127,29,29,0.35),0_2px_12px_0_rgba(220,38,38,0.25),inset_0_2px_4px_#ffffff44,inset_0_-4px_6px_-4px_#00000029] hover:shadow-[0_2px_0_0_rgba(127,29,29,0.25),0_6px_16px_0_rgba(220,38,38,0.20),inset_0_3px_6px_#ffffff33,inset_0_-2px_2px_-2px_#00000018] active:translate-y-1 active:shadow-[0_1px_0_0_rgba(127,29,29,0.35),0_1px_6px_0_rgba(220,38,38,0.22),inset_0_1px_2px_#ffffff33] hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "text-foreground bg-background transition duration-300 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] border-2 border-border shadow-[0_4px_0_0_rgba(0,0,0,0.15),0_2px_12px_0_rgba(0,0,0,0.12),inset_0_2px_4px_#ffffff44,inset_0_-4px_6px_-4px_#00000020] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.12),0_6px_16px_0_rgba(0,0,0,0.10),inset_0_3px_6px_#ffffff33,inset_0_-2px_2px_-2px_#00000015] active:translate-y-1 active:shadow-[0_1px_0_0_rgba(0,0,0,0.15),0_1px_6px_0_rgba(0,0,0,0.12),inset_0_1px_2px_#ffffff33] hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "text-secondary-foreground bg-secondary transition duration-300 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] border border-secondary/60 shadow-[0_4px_0_0_rgba(0,0,0,0.20),0_2px_12px_0_rgba(0,0,0,0.15),inset_0_2px_4px_#ffffff44,inset_0_-4px_6px_-4px_#00000025] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.15),0_6px_16px_0_rgba(0,0,0,0.12),inset_0_3px_6px_#ffffff33,inset_0_-2px_2px_-2px_#00000018] active:translate-y-1 active:shadow-[0_1px_0_0_rgba(0,0,0,0.20),0_1px_6px_0_rgba(0,0,0,0.15),inset_0_1px_2px_#ffffff33] hover:bg-secondary/80",
        ghost:
          "text-foreground bg-transparent transition duration-300 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] border border-transparent shadow-[0_2px_0_0_rgba(0,0,0,0.08),0_1px_6px_0_rgba(0,0,0,0.06),inset_0_1px_2px_#ffffff20] hover:shadow-[0_1px_0_0_rgba(0,0,0,0.06),0_4px_12px_0_rgba(0,0,0,0.08),inset_0_2px_4px_#ffffff25] active:translate-y-0.5 active:shadow-[0_0px_0_0_rgba(0,0,0,0.08),0_1px_4px_0_rgba(0,0,0,0.10),inset_0_1px_2px_#ffffff20] hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 transition duration-300 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] hover:underline active:translate-y-0.5",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
