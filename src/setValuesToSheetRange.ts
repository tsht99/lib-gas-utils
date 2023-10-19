/**
 * Google Apps Script のスプレッドシートの特定のシートに値を設定します。
 *
 * @param sheet - 値を設定する対象のシート。
 * @param values - 設定する値の二次元配列。
 * @param startRow - 値の設定を開始する行のインデックス。
 * @param startCol - 値の設定を開始する列のインデックス。
 */
export const setValuesToSheetRange = (
    sheet: GoogleAppsScript.Spreadsheet.Sheet,
    values: unknown[][],
    startRow: number,
    startCol: number
) => {
    sheet.getRange(startRow, startCol, values.length, values[0].length).setValues(values)
}
