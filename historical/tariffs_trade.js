export const tariffsTrade = {
    year: "trade-tariffs",
    displayName: "Trade Tariffs & Export Retaliation",
    basePrice: 3.80,
    shockMultiplier: 1.20,
    description: "Export market blockades and tariff retaliations depressing local commodity pricing for Valley specialty harvests.",
    sectorShocks: {
        "agro-forestry": { yieldMod: 0.82, laborCostMod: 1.05 },
        "water-infra": { yieldMod: 1.00, laborCostMod: 1.00 },
        "waste-mgmt": { yieldMod: 0.95, laborCostMod: 1.05 }
    },
    newsEvents: [
        {
            category: "EXPORT MARKETS",
            time: "Active Trade Friction",
            title: "Pacific Rim Tariff Barriers Impact Oregon Grass Seed & Hazelnut Shipments",
            snippet: "Port of Portland logistics report inventory backlogs as international buyers renegotiate or cancel forward delivery contracts."
        }
    ]
};
