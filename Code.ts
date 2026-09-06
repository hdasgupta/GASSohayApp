// Serves the Web App UI
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('React Apps Script App')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// Backend API function callable from React
function getSheetData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Appointments");
  return sheet.getDataRange().getValues();
}
