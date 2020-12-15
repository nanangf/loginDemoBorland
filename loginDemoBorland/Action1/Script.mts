With Browser("InsuranceWeb: Home")
		.Maximize
	With .Page("InsuranceWeb: Home")
		.WebEdit("login-form:email").Set "john.smith@gmail.com" @@ hightlight id_;_Browser("InsuranceWeb: Home").Page("InsuranceWeb: Home").WebEdit("login-form:email")_;_script infofile_;_ZIP::ssf1.xml_;_
		.WebEdit("login-form:password").Set "john" @@ hightlight id_;_Browser("InsuranceWeb: Home").Page("InsuranceWeb: Home").WebEdit("login-form:password")_;_script infofile_;_ZIP::ssf2.xml_;_
		.Image("Login").Click 35,8 @@ hightlight id_;_Browser("InsuranceWeb: Home").Page("InsuranceWeb: Home").Image("Login")_;_script infofile_;_ZIP::ssf3.xml_;_
	End With
	.Page("InsuranceWeb: Home_2").Image("details").Click 54,9 @@ hightlight id_;_Browser("InsuranceWeb: Home").Page("InsuranceWeb: Home 2").Image("details")_;_script infofile_;_ZIP::ssf4.xml_;_
	With .Page("InsuranceWeb: Account")
		.Link("Home").Click @@ hightlight id_;_Browser("InsuranceWeb: Home").Page("InsuranceWeb: Account").Link("Home")_;_script infofile_;_ZIP::ssf5.xml_;_
		.Image("logout").Click 42,8 @@ hightlight id_;_Browser("InsuranceWeb: Home").Page("InsuranceWeb: Account").Image("logout")_;_script infofile_;_ZIP::ssf6.xml_;_
		.Sync @@ hightlight id_;_Browser("InsuranceWeb: Home").Page("InsuranceWeb: Account")_;_script infofile_;_ZIP::ssf7.xml_;_
	End With
	.CloseAllTabs @@ hightlight id_;_658074_;_script infofile_;_ZIP::ssf8.xml_;_
End With

text = "nama"
nmbr = "nama"

If text = nmbr Then
	MsgBox("HALLO")
End If
