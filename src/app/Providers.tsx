"use client";

import { ThemeProvider } from "@aws-amplify/ui-react";
import { studioTheme } from "@/ui-components";
export type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <ThemeProvider theme={studioTheme}>{children}</ThemeProvider>;
};

export default Providers;
