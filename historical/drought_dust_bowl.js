export const droughtDustBowl = {
    year: "pnw-drought",
    displayName: "PNW Drought & Watershed Stress",
    basePrice: 6.50,
    shockMultiplier: 2.00,
    description: "Severe snowpack depletion and summer water curtailments restricting irrigation across the Willamette Basin.",
    sectorShocks: {
        "agro-forestry": { yieldMod: 0.65, laborCostMod: 1.35 },
        "water-infra": { yieldMod: 0.70, laborCostMod: 1.40 },
        "waste-mgmt": { yieldMod: 0.90, laborCostMod: 1.10 }
    },
    newsEvents: [
        {
            category: "WATER RIGHTS",
            time: "Severe Alert",
            title: "Willamette Basin Irrigation Districts Enforce Emergency Water Curtailments",
            snippet: "Low summer river flows and depleted reservoirs force farmers to prioritize high-value permanent crops over annual rotations."
        }
    ]
};
