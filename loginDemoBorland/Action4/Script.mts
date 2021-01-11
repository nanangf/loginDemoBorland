Set objExcel = CreateObject("Excel.Application")
    Set objWorkbook = objExcel.Workbooks.Open("C:\Users\nanangfaisal\Documents\Unified Functional Testing\loginDemoBorland\Data\Data.xlsx")
    Set objSheet = objWorkbook.Worksheets("Sheet1")
    ColCount = objSheet.UsedRange.Columns.Count
    RowCount = objSheet.UsedRange.Rows.Count
    For i = 1 To RowCount
        For j = 1 To ColCount
            fieldvalue = objSheet.Cells(i,j)
            MsgBox fieldvalue
        Next
   Next
   Set objSheet  = Nothing
   Set objWorkbook = Nothing
   Set objExcel = Nothing
