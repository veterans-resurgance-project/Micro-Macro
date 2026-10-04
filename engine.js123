export function runSimulationLogic(config, marketData) {
    let startingCapital = 10000;
    let riskedCapital = startingCapital * (config.riskPct / 100);
    let safeCapital = startingCapital - riskedCapital;
    
    let outcomeLog = [];
    let finalEquity = startingCapital;

    if (config.silo === 'macro') {
        let priceChange = marketData.shockMultiplier || 1.1;
        let portfolioSwing = riskedCapital * priceChange;
        finalEquity = safeCapital + portfolioSwing;
        
        outcomeLog.push(`Macro Market Year ${marketData.year}: ${marketData.description}`);
        outcomeLog.push(`Initial Risk Exposure: $${riskedCapital.toFixed(2)}`);
        outcomeLog.push(`Ending Portfolio Value: $${finalEquity.toFixed(2)}`);

    } else {
        // Grab sector-specific modifiers if they exist in the historical data file
        const sectorMod = marketData.sectorShocks && marketData.sectorShocks[config.silo] 
            ? marketData.sectorShocks[config.silo] 
            : { yieldMod: 1.0, laborCostMod: 1.0 };

        let siloLabel = {
            'agro-forestry': '🌲 Agro-Forestry & Substrate Cell',
            'water-infra': '💧 Water Infrastructure & Drip Line Cell',
            'waste-mgmt': '♻️ Municipal Waste & Recovery Cell'
        }[config.silo] || '⚙️ Regional Resource Cell';

        let fixedCost = config.infraWeight * 25; 
        let variableCost = ((100 - config.infraWeight) * 12) * sectorMod.laborCostMod; 
        let totalCost = fixedCost + variableCost;
        
        let yieldFactor = (marketData.shockMultiplier > 1.5 ? 0.85 : 1.15) * sectorMod.yieldMod; 
        let baseMultiplier = marketData.basePrice || 1.25;
        
        let revenue = (riskedCapital * yieldFactor * baseMultiplier) - totalCost;
        finalEquity = safeCapital + revenue;

        outcomeLog.push(`Operational Sector: ${siloLabel}`);
        outcomeLog.push(`Historical Baseline Year: ${config.year} — ${marketData.description}`);
        outcomeLog.push(`Structural Deployment Costs (Fixed / Adjusted Variable): $${totalCost.toFixed(2)}`);
        outcomeLog.push(`Sector Yield Multiplier: ${yieldFactor.toFixed(2)}`);
        outcomeLog.push(`Final Sector Equity: $${finalEquity.toFixed(2)}`);
    }

    return { finalEquity, outcomeLog };
}
