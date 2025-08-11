import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthCard } from "@/components/auth/AuthCard";
import { FloatingLabelInput } from "@/components/auth/FloatingLabelInput";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Implement actual sign in logic
      toast({
        title: "Success!",
        description: "Signed in successfully.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid credentials. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <AuthCard className="animate-fade-in">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome Back</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FloatingLabelInput
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FloatingLabelInput
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </AuthCard>
    </div>
  );
};

export default SignIn;