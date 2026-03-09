# Architecture

ClearLedger is a lightweight browser-based financial snapshot tool.

The application consists of three main components:

### Interface (HTML)

The user interface is defined in `index.html`.  
It provides four input fields:

- Income
- Expenses
- Debts
- Assets

A summary section displays calculated values.

### Styling (CSS)

`style.css` provides a minimal interface focused on clarity and readability.

The layout uses a centered container and card-style panels.

### Logic (JavaScript)

All calculation logic is implemented in `app.js`.

The script performs the following tasks:

- Reads values from input fields
- Calculates balance and net worth
- Updates the summary display
- Stores values in browser localStorage
- Reloads saved values when the page loads