﻿With Browser("InsuranceWeb: Home")
	i = 0	
	Do
	i = i+1
		.Page("InsuranceWeb: Home").Image("Signup").Click 42,11	
		With .Page("InsuranceWeb: Sign up")
			.WebEdit("signup:fname").Set "john" @@ script infofile_;_ZIP::ssf2.xml_;_
			.WebEdit("signup:lname").Set "smith1" @@ script infofile_;_ZIP::ssf3.xml_;_
			.WebEdit("BirthDate").Set "06/01/1991" @@ script infofile_;_ZIP::ssf6.xml_;_
			.WebEdit("signup:email").Set "johnsmith1@gmail.com" @@ script infofile_;_ZIP::ssf7.xml_;_
			.WebEdit("signup:street").Set "jakarta" @@ script infofile_;_ZIP::ssf8.xml_;_
			.WebEdit("signup:city").Set "jakarta selatan" @@ script infofile_;_ZIP::ssf9.xml_;_
			.WebList("signup:state").Select "Alabama" @@ script infofile_;_ZIP::ssf10.xml_;_
			.WebEdit("signup:zip").Set "14280" @@ script infofile_;_ZIP::ssf11.xml_;_
			.WebEdit("signup:password").Set "123456" @@ script infofile_;_ZIP::ssf12.xml_;_
			.Link("Home").Click @@ script infofile_;_ZIP::ssf13.xml_;_
		End With
		MsgBox(i)
	Loop While i < 3
	.Close	
End With
