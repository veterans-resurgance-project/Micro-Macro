import { historicalDatabase } from './historical_data.js';
import { runSimulationLogic } from './engine.js';

document.getElementById('start-btn').addEventListener('click', () => {
    const silo = document.getElementById('silo-choice').value;
    const year = document.getElementById('year-choice').value;
    const riskPct = parseFloat(document.getElementById('risk-pct').value);
    const infraWeight = parseFloat(document.getElementById('infra-weight').value);

    const marketData = historicalDatabase[year];
    const results = runSimulationLogic({ silo, year, riskPct, infraWeight }, marketData);

    // Render UI
    let logHTML = results.outcomeLog.map(line => `<p>${line}</p>`).join('');
    document.getElementById('log-content').innerHTML = logHTML;
    
    document.getElementById('setup-panel').style.display = 'none';
    document.getElementById('output-panel').style.display = 'block';
});

document.getElementById('reset-btn').addEventListener('click', () => {
    document.getElementById('setup-panel').style.display = 'block';
    document.getElementById('output-panel').style.display = 'none';
});
