<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ag Market Simulation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="game-container">
        <h1>Ag Market Sim</h1>
        
        <!-- Setup Form -->
        <div id="setup-panel">
            <label>Silo:
                <select id="silo-choice">
                    <option value="micro">Micro (Farm Manager)</option>
                    <option value="macro">Macro (Trader)</option>
                </select>
            </label>
            <label>Start Year:
                <select id="year-choice">
                    <option value="2007">2007 (Pre-Crash / Food Crisis)</option>
                    <option value="2020">2020 (Pandemic Shock)</option>
                    <option value="2022">2022 (Geopolitical Shock)</option>
                </select>
            </label>
            <label>Asset Risk (% of Capital): <input type="number" id="risk-pct" value="50" min="10" max="100"></label>
            <label>Structure (0 = Labor Heavy, 100 = Infra Heavy): <input type="range" id="infra-weight" value="50" min="0" max="100"></label>
            <button id="start-btn">Run Simulation</button>
        </div>

        <!-- Results Display -->
        <div id="output-panel" style="display:none;">
            <h2>Simulation Results</h2>
            <div id="log-content"></div>
            <button id="reset-btn">New Simulation</button>
        </div>
    </div>

    <script type="module" src="main.js"></script>
</body>
</html>
