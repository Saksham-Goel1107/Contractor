import { Metadata } from "next";
import { PricingSection } from "@/components/pricing-section";

export const metadata: Metadata = {
  title: "Pricing | Contract Analysis Tool",
  description: "Choose the right plan for your contract analysis needs",
};

export default function PricingPage() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen py-12 px-4 md:px-8">
      <div className="container max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose the plan that best fits your needs
          </p>
        </div>
        
        <PricingSection />
      </div>
    </main>
  );
}
