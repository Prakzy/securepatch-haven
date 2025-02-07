
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export const PricingCard = ({
  title,
  price,
  description,
  features,
  isPopular = false,
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-8 bg-white shadow-lg transition-transform duration-300 hover:scale-105",
        isPopular && "border-2 border-accent"
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-accent text-white text-sm font-medium px-3 py-1 rounded-full">
            Most Popular
          </div>
        </div>
      )}
      <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-primary">{price}</span>
        <span className="text-secondary">/month</span>
      </div>
      <p className="text-secondary mb-6">{description}</p>
      <Button
        className={cn("w-full mb-6", isPopular ? "bg-accent" : "")}
        variant={isPopular ? "default" : "outline"}
      >
        Get Started
      </Button>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-success shrink-0 mr-2" />
            <span className="text-secondary text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
