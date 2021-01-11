Set objExcel = CreateObject("Excel.Application")
    Set objWorkbook = objExcel.Workbooks.Open("E:\Test\TestData.xlsx")
    Set objSheet  = objWorkbook.Worksheets("Sheet1") 'Or pass sheet number integer value 1,2,etc
    strValue = objSheet.Cells(intRow, intCol)
    GetExcelCellData = strValue   'Returning value of the specified cell
    Set objSheet  = Nothing
    Set objWorkbook = Nothing
    Set objExcel = Nothing
