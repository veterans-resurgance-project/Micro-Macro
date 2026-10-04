export function runSimulationLogic(params, marketData) {
    const { silo, year, riskPct, infraWeight, foreclosureRate } = params;

    // Default multipliers based on Willamette Valley agricultural silos
    let siloMultiplier = 1.0;
    let sectorName = silo;

    switch(silo) {
        case 'grass-seed':
            sectorName = "Grass Seed & Forage Crops";
            siloMultiplier = 0.95;
            break;
        case 'hazelnuts':
            sectorName = "Hazelnuts & Orchard Crops";
            siloMultiplier = 1.05;
            break;
        case 'berries-produce':
            sectorName = "Berries & Diversified Produce";
            siloMultiplier = 1.10;
            break;
        case 'small-livestock':
            sectorName = "Small-Scale Livestock & Poultry";
            siloMultiplier = 0.90;
            break;
        case 'agro-forestry':
            sectorName = "Agro-Forestry & Substrate";
            siloMultiplier = 1.00;
            break;
        case 'water-infra':
            sectorName = "Water Infrastructure & Drip";
            siloMultiplier = 0.85;
            break;
        case 'waste-mgmt':
            sectorName = "Municipal Waste & Recovery";
            siloMultiplier = 0.95;
            break;
    }

    // Compute simulated financial outcome factoring in foreclosure stress attrition
    const baseYield = marketData.baseYield || 100;
    const computedYield = (baseYield * siloMultiplier * infraWeight * (1 - (riskPct / 100))).toFixed(2);
    const stressAttritionImpact = (foreclosureRate * 2.4).toFixed(2);

    const outcomeLog = [
        `[INIT] Target Valley Sector: ${sectorName}`,
        `[SCENARIO] Historical Baseline Loaded: ${marketData.displayName || year}`,
        `[PARAM] Risk Mitigation Threshold: ${riskPct}% | Infra Weight: ${infraWeight}x`,
        `[STRESS] Regional Farm Foreclosure Rate Factor: ${foreclosureRate}%`,
        `[COMPUTE] Volatility Index: ${marketData.volatility || 0.15}`,
        `[RESULT] Adjusted Sector Yield / Margin Output: ${computedYield} units`,
        `[ATTRITION] Estimated Asset Distress & Consolidation Drag: -${stressAttritionImpact}%`,
        `[SUCCESS] Simulation vector matrix successfully compiled.`
    ];

    return { outcomeLog };
}
