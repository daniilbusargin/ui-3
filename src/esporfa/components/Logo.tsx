import { cn } from "../lib/cn";

type Props = { className?: string };

export function Logo({ className }: Props) {
  return (
    <span
      className={cn(
        "font-sans text-xl font-bold tracking-tight text-ink",
        className,
      )}
    >
      esporfa
    </span>
  );
}
