/**
 * 文字列をTextOutputオブジェクトに変換します。
 * @param content TextOutputに設定する文字列
 * @returns JSON形式のTextOutputオブジェクト
 */
export const toTextOutput = (content: string) => {
    const textOutput = ContentService.createTextOutput()
    textOutput.setContent(content)
    textOutput.setMimeType(ContentService.MimeType.JSON)
    return textOutput
}
