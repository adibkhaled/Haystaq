import { test } from '@playwright/test';
import { CustomerPage } from '../src/page/CustomerPage';
import data from "../data.json";
import { log } from 'console';
import { UserPage } from '../src/page/UserPage';
import playwrightConfig from '../playwright.config';


// user function to perform login
const performLogin = async (login, userData) => {
  await login.navigateToLogin();
  await login.fillLogin(userData);
  await login.submitLogin();
};

test.beforeEach(async ({ page }) => {
    const user = new UserPage(page);
    
    await page.goto(data.url);
    await performLogin(user, data.login_credential);
    
});

test('Update email id and verify the email id', async ({ page }) => {
  const customerPage = new CustomerPage(page);
  const user = new UserPage(page);
  
  await user.clickEmailLink(data.login_credential.email);
  await customerPage.fillUpdateEmail(data.update_email.email_01);
  await customerPage.saveButton();
  await user.verifyUserLoggedIn(data.update_email.email_01);
  await customerPage.fillUpdateEmail(data.update_email.email_02);
  await customerPage.saveButton();
  await user.verifyUserLoggedIn(data.update_email.email_02);
  await user.logOut();
});

test('Update first name and last name', async ({ page }) => {
  const customerPage = new CustomerPage(page);
  const user = new UserPage(page);

  await user.clickEmailLink(data.login_credential.email);
  await customerPage.fillUpdateFirstName(data.customer_name.firstname);
  await customerPage.fillUpdateLastName(data.customer_name.lastname);
  await customerPage.saveButton();
  await user.logOut();
});

test('Verify update first name and last name', async ({ page }) => {
  const customerPage = new CustomerPage(page);
  const user = new UserPage(page);

  await user.clickEmailLink(data.login_credential.email);
  await customerPage.verifyFirstName(data.customer_name.firstname);
  await customerPage.verifyLastName(data.customer_name.lastname)
  await user.logOut();
});