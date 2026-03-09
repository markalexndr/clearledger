# Using Local Storage in Browser Applications

Modern web browsers provide a feature called **localStorage**, which allows applications to store small amounts of data directly in the user's browser.

This makes it possible to build lightweight applications that retain information between sessions without requiring a database or server.

---

## What Local Storage Does

Local storage allows a website to store simple key-value pairs.

For example:
income = 3000
expenses = 2100

These values remain available even if the user refreshes the page.

---

## Why ClearLedger Uses Local Storage

ClearLedger stores financial values locally so that:

- user data remains on the device
- the application works without accounts
- no external database is required

This approach simplifies the application architecture while maintaining user privacy.

---

## Limitations

Local storage is best suited for:

- small amounts of data
- single-user applications
- non-sensitive information

Because the data is stored in the browser, it can be cleared if the user resets their browser data.

---

## Summary

Local storage provides a simple and effective way to persist information in browser-based tools.

For small applications such as ClearLedger, it removes the need for backend infrastructure while maintaining a smooth user experience.