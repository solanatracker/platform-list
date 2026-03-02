import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "visa",
  name: "Visa",
  description:
    "Global payment network using Solana for USDC stablecoin settlement between financial institutions.",
  links: {
    website: "https://www.visa.com",
    twitter: "https://x.com/Visa",
  },
  tags: ["institutional", "payments"],
};

export const services: ServiceRaw[] = [];
