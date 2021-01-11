Set objExcel = CreateObject("Excel.Application")
    Set objWorkbook = objExcel.Workbooks.Open("C:\Users\nanangfaisal\Documents\Unified Functional Testing\loginDemoBorland\Data\Data.xlsx")
    Set objSheet  = objWorkbook.Worksheets("Sheet1") 'Or pass sheet number integer value 1,2,etc
    strValue = objSheet.Cells(intRow, intCol)
    GetExcelCellData = strValue   'Returning value of the specified cell
    MsgBox(GetExcelCellData)
    Set objSheet  = Nothing
    Set objWorkbook = Nothing
    Set objExcel = Nothing
