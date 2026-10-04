export const housingLaborCrisis = {
    year: "housing-labor-crisis",
    displayName: "Rural Housing & Workforce Crunch",
    basePrice: 4.50,
    shockMultiplier: 1.15,
    description: "Acute housing shortages and soaring rental costs in the Mid-Valley trigger severe labor scarcity for field and facility operations.",
    sectorShocks: {
        "agro-forestry": { yieldMod: 0.78, laborCostMod: 1.50 },
        "water-infra": { yieldMod: 0.85, laborCostMod: 1.45 },
        "waste-mgmt": { yieldMod: 0.92, laborCostMod: 1.40 }
    },
    newsEvents: [
        {
            category: "LABOR ECONOMICS",
            time: "Chronic Constraint",
            title: "Mid-Valley Housing Shortage Cripples Seasonal Ag & Driver Recruitment",
            snippet: "Transit and agricultural operators cite lack of affordable housing options in towns like Lebanon, Albany, and Corvallis as the primary bottleneck for workforce retention."
        }
    ]
};
