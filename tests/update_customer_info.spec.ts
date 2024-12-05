import { test } from '@playwright/test';
import { HelperPage } from '../src/HelperPage';
import data from "../data.json";
import { log } from 'console';


// Helper function to perform login
const performLogin = async (login, userData) => {
  await login.navigateToLogin();
  await login.fillLogin(userData);
  await login.submitLogin();
};

test.beforeEach(async ({ page }) => {
    const helper = new HelperPage(page);
    
    await page.goto(data.url);
    await performLogin(helper, data.login_credential);
});

test('Update email id and verify the email id', async ({ page }) => {
  const helper = new HelperPage(page);

  await helper.clickEmailLink(data.login_credential.email);
  await helper.fillUpdateEmail(data.update_email.email_01);
  await helper.saveButton();
  await helper.verifyUserLoggedIn(data.update_email.email_01);
  await helper.fillUpdateEmail(data.update_email.email_02);
  await helper.saveButton();
  await helper.verifyUserLoggedIn(data.update_email.email_02);
  await helper.logOut();
});