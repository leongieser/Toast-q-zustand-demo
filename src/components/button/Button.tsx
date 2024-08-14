import { tv, type VariantProps } from 'tailwind-variants';

export const button = tv({
  base: 'px-4 py-2 rounded-lg text-2xl hover:opacity-80 outline',
  variants: {
    color: {
      positive: 'bg-green-200 text-green-600 outline-green-600',
      warning: 'bg-amber-200 text-amber-600 outline-amber-600',
      error: 'bg-red-200 text-red-600 outline-red-600',
      neutral: 'bg-zinc-50 text-zinc-800 outline-zinc-800',
    },
  },
  defaultVariants: {
    color: 'neutral',
  },
});

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    ButtonVariants {
  children: React.ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={`${button(props)} ${className}`}>
      {children}
    </button>
  );
}
