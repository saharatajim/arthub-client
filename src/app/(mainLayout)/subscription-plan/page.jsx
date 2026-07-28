import FreePlan from "@/app/components/subPlan/FreePlan";
import PremiumPlan from "@/app/components/subPlan/PremiumPlan";
import ProPlan from "@/app/components/subPlan/ProPlan";


export default function SubscriptionPlans() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Subscription Tier Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FreePlan />
        <ProPlan />
        <PremiumPlan/>
      </div>
    </div>
  );
}
