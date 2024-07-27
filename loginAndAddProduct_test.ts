import {  } from "module";import loginPage from "./pageObject/loginPage"
import { loginData } from "./data/loginData"

Feature('Amazon');

Scenario('login and add product',  ({ I }) => {
    I.amOnPage('/')
    I.wait(1)
    loginPage.login(loginData.username, loginData.password)
    
})
