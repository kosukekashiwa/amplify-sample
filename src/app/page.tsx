"use client";

import MarketingPricing from "@/ui-components/MarketingPricing";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { studioTheme } from "@/ui-components";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import awsconfig from "@/aws-exports";
Amplify.configure(awsconfig);

export default function Home() {
  return (
    <main>
      <ThemeProvider theme={studioTheme}>
        <MarketingPricing />
      </ThemeProvider>
    </main>
  );
}
