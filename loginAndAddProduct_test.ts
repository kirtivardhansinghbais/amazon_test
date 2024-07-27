import {  } from "module";import loginPage from "./pageObject/loginPage";

Feature('Amazon');

Scenario('login and add product',  ({ I }) => {
    I.amOnPage('/');
    I.wait(2);
    loginPage.login("9993056686", "9425442297");
});
