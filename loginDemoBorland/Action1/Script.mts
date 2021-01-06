With Browser("InsuranceWeb: Home")
	With .Page("InsuranceWeb: Home")
		.WebEdit("login-form:email").Click
		.WebEdit("login-form:email").Set "john.smith@gmail.com" @@ script infofile_;_ZIP::ssf9.xml_;_
		.WebElement("Select a Service or login").Click @@ script infofile_;_ZIP::ssf10.xml_;_
		.WebEdit("login-form:password").Set "john" @@ script infofile_;_ZIP::ssf11.xml_;_
		.Image("Login").Click 47,8 @@ script infofile_;_ZIP::ssf12.xml_;_
	End With
	.Page("InsuranceWeb: Home_2").Image("details").Click 57,14 @@ script infofile_;_ZIP::ssf13.xml_;_
	With .Page("InsuranceWeb: Account")
		.Link("Home").Click @@ script infofile_;_ZIP::ssf14.xml_;_
		.Image("logout").Click 44,14 @@ script infofile_;_ZIP::ssf15.xml_;_
	End With
	
'	.Close
End With
