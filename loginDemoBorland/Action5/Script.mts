Set objExcel = CreateObject("Excel.Application")
     Set objWorkbook = objExcel.Workbooks.Open("C:\Users\nanangfaisal\Documents\Unified Functional Testing\loginDemoBorland\Data\Data.xlsx")
     Set objSheet = objWorkbook.Worksheets("Sheet1")
     columncount = objSheet.UsedRange.Columns.Count
     RowCount = objSheet.UsedRange.Rows.Count
     For i = 1 To columncount
         For j = 1 To RowCount
             strValue = objSheet.Cells(j,i)
             MsgBox strValue 'Displaying cell values
        Next
    Next
    Set objSheet  = Nothing
    Set objWorkbook = Nothing
    Set objExcel = Nothing

