import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "stripe",
  name: "Stripe",
  description:
    "Payment infrastructure provider enabling merchants to accept USDC payments on Solana.",
  links: {
    website: "https://stripe.com",
    twitter: "https://x.com/stripe",
  },
  tags: ["institutional", "payments"],
};

export const services: ServiceRaw[] = [];
