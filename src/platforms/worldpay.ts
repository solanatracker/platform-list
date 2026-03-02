import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "worldpay",
  name: "Worldpay",
  description:
    "Global payment processor that operates a Solana validator and settles merchant transactions in USDC on Solana.",
  links: {
    website: "https://www.worldpay.com",
    twitter: "https://x.com/Worldpay",
  },
  tags: ["institutional", "payments"],
};

export const services: ServiceRaw[] = [];
