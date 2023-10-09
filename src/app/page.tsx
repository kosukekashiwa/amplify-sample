"use client";

import MarketingPricing from "@/ui-components/MarketingPricing";
import Frame437 from "@/ui-components/Frame437";

import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import awsconfig from "@/aws-exports";
Amplify.configure(awsconfig);

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <MarketingPricing />
      <Frame437 />
    </div>
  );
}
