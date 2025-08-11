import { cn } from "@/lib/utils";

interface AuthCardProps {
  children: React.ReactNode;
  className?: string;
}

export const AuthCard = ({ children, className }: AuthCardProps) => {
  return (
    <div className={cn("auth-card w-full max-w-md mx-auto", className)}>
      {children}
    </div>
  );
};