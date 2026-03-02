import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "paypal",
  name: "PayPal",
  description:
    "Global payments platform that issued its PYUSD stablecoin natively on Solana.",
  links: {
    website: "https://www.paypal.com",
    twitter: "https://x.com/PayPal",
  },
  platformToken: "2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo",
  tags: ["institutional", "payments", "stablecoin"],
};

export const services: ServiceRaw[] = [];
