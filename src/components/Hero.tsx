
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  "Automated patch management",
  "Real-time vulnerability monitoring",
  "Enterprise-grade security",
];

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-top" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-8">
            <Shield className="h-16 w-16 text-accent" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-slide-in">
            Secure Your Infrastructure
            <br />
            <span className="text-accent">Effortlessly</span>
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto mb-8 animate-slide-in">
            Automated patch management solution for modern enterprises.
            Stay protected with real-time updates and intelligent security monitoring.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-slide-in">
            <Link to="/signup">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-secondary animate-slide-in">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center text-sm font-medium"
              >
                <CheckCircle className="h-5 w-5 text-success mr-2" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
