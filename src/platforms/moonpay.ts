import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "moonpay",
  name: "MoonPay",
  description:
    "Fiat on-ramp and off-ramp infrastructure for buying, selling, and swapping cryptocurrencies on Solana.",
  links: {
    website: "https://www.moonpay.com",
    twitter: "https://x.com/moonpay",
    documentation: "https://dev.moonpay.com",
  },
  tags: ["infrastructure", "payments"],
};

export const services: ServiceRaw[] = [];
