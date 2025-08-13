import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

// Mappe les variantes et tailles à Bootstrap
const bootstrapVariants = {
  default: "btn btn-primary",
  destructive: "btn btn-danger",
  outline: "btn btn-outline-secondary",
  secondary: "btn btn-secondary",
  ghost: "btn btn-light",
  link: "btn btn-link",
}

const bootstrapSizes = {
  default: "",
  sm: "btn-sm",
  lg: "btn-lg",
  icon: "btn-sm px-2", // Ajustement personnalisé pour bouton icône
}

const Button = React.forwardRef(
  ({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const variantClass = bootstrapVariants[variant] || bootstrapVariants.default
    const sizeClass = bootstrapSizes[size] || bootstrapSizes.default

    return (
      <Comp
        className={`${variantClass} ${sizeClass} ${className}`.trim()}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }
