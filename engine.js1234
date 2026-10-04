export function runSimulationLogic(config, marketData) {
    let startingCapital = 10000;
    let riskedCapital = startingCapital * (config.riskPct / 100);
    let safeCapital = startingCapital - riskedCapital;
    
    let outcomeLog = [];
    let finalEquity = startingCapital;

    // Handle Macro vs Micro / Regional Silos
    if (config.silo === 'macro') {
        // Macro Trader Math: Pure price exposure + leverage
        let priceChange = marketData.shockMultiplier || 1.1;
        let portfolioSwing = riskedCapital * priceChange;
        finalEquity = safeCapital + portfolioSwing;
        
        outcomeLog.push(`Macro Market Year ${marketData.year || config.year}: ${marketData.description || 'General market volatility run.'}`);
        outcomeLog.push(`Initial Risk Exposure: $${riskedCapital.toFixed(2)}`);
        outcomeLog.push(`Ending Portfolio Value: $${finalEquity.toFixed(2)}`);

    } else {
        // Micro / Regional Silo Math (Agro-Forestry, Water Infra, Waste Mgmt)
        let siloLabel = {
            'agro-forestry': '🌲 Agro-Forestry & Substrate Cell',
            'water-infra': '💧 Water Infrastructure & Drip Line Cell',
            'waste-mgmt': '♻️ Municipal Waste & Recovery Cell'
        }[config.silo] || '⚙️ Regional Resource Cell';

        let fixedCost = config.infraWeight * 25; // Infrastructure carries fixed operational debt
        let variableCost = (100 - config.infraWeight) * 12; // Labor and material deployment
        let totalCost = fixedCost + variableCost;
        
        // Cobweb lag & infrastructure weight interaction effect
        let shock = marketData.shockMultiplier || 1.2;
        let yieldFactor = shock > 1.5 ? 0.85 : 1.15; 
        let baseMultiplier = marketData.basePrice || 1.25;
        
        let revenue = (riskedCapital * yieldFactor * baseMultiplier) - totalCost;
        finalEquity = safeCapital + revenue;

        outcomeLog.push(`Operational Sector: ${siloLabel}`);
        outcomeLog.push(`Historical Baseline Year: ${config.year}`);
        outcomeLog.push(`Structural Deployment Costs (Fixed / Variable): $${totalCost.toFixed(2)}`);
        outcomeLog.push(`Infrastructural Weight Factor: ${config.infraWeight} (Yield Factor: ${yieldFactor})`);
        outcomeLog.push(`Final Sector Equity: $${finalEquity.toFixed(2)}`);
    }

    return { finalEquity, outcomeLog };
}
