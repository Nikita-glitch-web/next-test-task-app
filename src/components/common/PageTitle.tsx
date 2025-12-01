import { cn } from "@/lib/utils";

interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
}

export function PageTitle({ children, className, subtitle }: PageTitleProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        {children}
      </h1>
      {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
    </div>
  );
}
