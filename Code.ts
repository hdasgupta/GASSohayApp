// Serves the Web App UI
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('React Apps Script App')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// Backend API function callable from React
function getSheetData() {
  return SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Appointments")
    .getRange("A1:F")
    .getValues();
}
