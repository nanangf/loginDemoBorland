Set objExcel = CreateObject("Excel.Application")
Set objWorkbook = objExcel.Workbooks.Open("C:\Users\nanangfaisal\Documents\Unified Functional Testing\loginDemoBorland\Data\Data.xlsx")
Set objSheet  = objWorkbook.Worksheets("Sheet1")
iRow = 1
iColl = 0
cRow = objSheet.UsedRange.Rows.Count

With Browser("InsuranceWeb: Home")
	Do 
		iRow = iRow + 1
		iColl = iColl + 1
		Fname = objSheet.Cells(iRow,iColl).Value
		Lname = objSheet.Cells(iRow,iColl).Value
		Birthday = objSheet.Cells(iRow,iColl).Value
		
        .Page("InsuranceWeb: Home").Image("Signup").Click 42,11	
		With .Page("InsuranceWeb: Sign up")	
			.WebEdit("signup:fname").Set Fname @@ script infofile_;_ZIP::ssf2.xml_;_
			.WebEdit("signup:lname").Set Lname @@ script infofile_;_ZIP::ssf3.xml_;_
			.WebEdit("BirthDate").Set Birthday @@ script infofile_;_ZIP::ssf6.xml_;_
			.WebEdit("signup:email").Set "johnsmith1@gmail.com" @@ script infofile_;_ZIP::ssf7.xml_;_
			.WebEdit("signup:street").Set "jakarta" @@ script infofile_;_ZIP::ssf8.xml_;_
			.WebEdit("signup:city").Set "jakarta selatan" @@ script infofile_;_ZIP::ssf9.xml_;_
			.WebList("signup:state").Select "Alabama" @@ script infofile_;_ZIP::ssf10.xml_;_
			.WebEdit("signup:zip").Set "14280" @@ script infofile_;_ZIP::ssf11.xml_;_
			.WebEdit("signup:password").Set "123456" @@ script infofile_;_ZIP::ssf12.xml_;_
			.Link("Home").Click @@ script infofile_;_ZIP::ssf13.xml_;_
		End With
	Loop Until index = cRow
	.Close
Set objSheet  = Nothing
Set objWorkbook = Nothing
Set objExcel = Nothing

End With
