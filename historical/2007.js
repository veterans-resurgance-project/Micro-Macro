export const data2007 = {
    year: 2007,
    basePrice: 4.00,
    shockMultiplier: 1.8,
    description: "Global food crisis & inventory squeeze.",
    sectorShocks: {
        "agro-forestry": { yieldMod: 0.90, laborCostMod: 1.10 },
        "water-infra": { yieldMod: 0.95, laborCostMod: 1.05 },
        "waste-mgmt": { yieldMod: 0.85, laborCostMod: 1.15 }
    },
    newsEvents: [
        {
            category: "GLOBAL SUPPLY",
            time: "2007 Peak",
            title: "Global Grain Reserves Hit Record Lows Amid Inventory Squeeze",
            snippet: "International agricultural commodity markets experience extreme volatility as export restrictions take hold."
        }
    ]
};
