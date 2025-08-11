import { useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FloatingLabelInput = ({ label, className, ...props }: FloatingLabelInputProps) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFilled(e.target.value.length > 0);
    props.onChange?.(e);
  };

  return (
    <div className={cn("relative", isFilled && "input-filled")}>
      <Input
        {...props}
        onChange={handleChange}
        className={cn("h-14 pt-4", className)}
      />
      <span className="floating-label absolute left-3 top-4 text-gray-500 pointer-events-none">
        {label}
      </span>
    </div>
  );
};