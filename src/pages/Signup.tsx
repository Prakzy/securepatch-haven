
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export default function Signup() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleOTPlessSignup = () => {
    // Implement OTPless signup logic here after API key setup
    toast({
      title: "Account Created",
      description: "Welcome to Afforal Cyber Patch!",
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Create Account</CardTitle>
            <CardDescription>
              Get started with Afforal Cyber Patch
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              className="w-full"
              size="lg"
              onClick={handleOTPlessSignup}
            >
              Sign up with OTPless
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
