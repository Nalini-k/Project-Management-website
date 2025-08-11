import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthCard } from "@/components/auth/AuthCard";
import { FloatingLabelInput } from "@/components/auth/FloatingLabelInput";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Implement actual sign up logic
      toast({
        title: "Success!",
        description: "Account created successfully.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <AuthCard className="animate-fade-in">
        <h1 className="text-3xl font-bold text-center mb-8">Create Account</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FloatingLabelInput
            type="text"
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
            {isLoading ? "Creating account..." : "Sign Up"}
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-primary hover:underline">
            Sign In
          </Link>
        </p>
      </AuthCard>
    </div>
  );
};

export default SignUp;