export const fuelSpike2022 = {
    year: "fuel-spike-2022",
    displayName: "2022 Energy & Diesel Price Shock",
    basePrice: 5.10,
    shockMultiplier: 1.65,
    description: "Sudden crude and regional diesel spikes drastically inflating transport costs for Valley crops and lumber logistics.",
    sectorShocks: {
        "agro-forestry": { yieldMod: 0.92, laborCostMod: 1.25 },
        "water-infra": { yieldMod: 0.95, laborCostMod: 1.15 },
        "waste-mgmt": { yieldMod: 0.88, laborCostMod: 1.30 }
    },
    newsEvents: [
        {
            category: "TRANSPORT LOGISTICS",
            time: "Critical Shock",
            title: "Willamette Valley Freight Rates Surge Amid Record Diesel Prices",
            snippet: "Local agricultural haulers and nursery stock transporters absorb a 40% jump in fuel overhead, squeezing producer margins."
        }
    ]
};
