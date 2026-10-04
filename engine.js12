export function runSimulationLogic(config, marketData) {
    let startingCapital = 10000;
    let riskedCapital = startingCapital * (config.riskPct / 100);
    let safeCapital = startingCapital - riskedCapital;
    
    let outcomeLog = [];
    let finalEquity = startingCapital;

    if (config.silo === 'macro') {
        // Macro Trader Math: Pure price exposure + leverage
        let priceChange = marketData.shockMultiplier;
        let portfolioSwing = riskedCapital * priceChange;
        finalEquity = safeCapital + portfolioSwing;
        
        outcomeLog.push(`Macro Market Year ${marketData.year}: ${marketData.description}`);
        outcomeLog.push(`Initial Risk Exposure: $${riskedCapital}`);
        outcomeLog.push(`Ending Portfolio Value: $${finalEquity.toFixed(2)}`);

    } else {
        // Micro Farmer Math: Labor vs Infrastructure lag & structural costs
        let fixedCost = config.infraWeight * 20; // Infrastructure carries fixed debt
        let variableCost = (100 - config.infraWeight) * 15; // Labor is flexible
        let totalCost = fixedCost + variableCost;
        
        // Cobweb lag effect: High market price causes overproduction penalty next cycle
        let yieldFactor = marketData.shockMultiplier > 1.5 ? 0.8 : 1.1; 
        let revenue = (riskedCapital * yieldFactor * marketData.basePrice) - totalCost;
        
        finalEquity = safeCapital + revenue;

        outcomeLog.push(`Micro Farm Year ${marketData.year}: Operating in regional silo.`);
        outcomeLog.push(`Structural Costs (Fixed/Labor): $${totalCost}`);
        outcomeLog.push(`Yield & Market Interaction factor: ${yieldFactor}`);
        outcomeLog.push(`Final Farm Equity: $${finalEquity.toFixed(2)}`);
    }

    return { finalEquity, outcomeLog };
}
