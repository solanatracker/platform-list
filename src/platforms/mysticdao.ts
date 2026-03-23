import { NetworkId, PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "mysticdao",
  name: "Mystic DAO",
  description: "Mystic DAO is a gamified DeFi ecosystem on Solana.",
  links: {
    website: "https://mysticdao.io/",
    twitter: "https://x.com/MysticDAO",
  },
  tags: ["gaming"],
};

const contract = {
  name: "Main",
  address: "MYstiCRQrXvJAp3DGUdguaZjn7Zq1kwUYRe2sRK2RFY",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
