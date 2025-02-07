
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PricingCard } from "@/components/PricingCard";

const pricingPlans = [
  {
    title: "Basic",
    price: "$29",
    description: "Perfect for small businesses",
    features: [
      "Microsoft patches",
      "Basic support",
      "Patch history",
      "Email notifications",
      "Up to 10 devices",
    ],
  },
  {
    title: "Pro",
    price: "$99",
    description: "For growing organizations",
    features: [
      "Everything in Basic",
      "Third-party patches",
      "Priority support",
      "Advanced reporting",
      "Up to 50 devices",
      "API access",
    ],
    isPopular: true,
  },
  {
    title: "Enterprise",
    price: "$299",
    description: "For large enterprises",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Custom patch management",
      "Unlimited devices",
      "SLA guarantee",
      "Custom integration",
      "Advanced security features",
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-secondary">
              Choose the plan that's right for your business
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
