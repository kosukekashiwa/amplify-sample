"use client";

import { CTASection, Frame437 } from "@/ui-components";

import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import awsconfig from "@/aws-exports";
Amplify.configure(awsconfig);

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <CTASection />
      <Frame437 />
    </div>
  );
}
