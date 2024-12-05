import { test } from '@playwright/test';
import { HelperPage } from '../src/HelperPage';
import data from "../data.json";
import { log } from 'console';

// Global user data
const userData = {
  email: data.email,
  password: data.valid_pass,
  email_update: "adib01@outlook.com" 
};

// Helper function to perform login
const performLogin = async (login, userData) => {
  await login.navigateToLogin();
  await login.fillLogin(userData);
  await login.submitLogin();
};

test.beforeEach(async ({ page }) => {
    const helper = new HelperPage(page);
    
    await page.goto(data.url);
    await performLogin(helper, userData);
});

test('Update email id and verify the email id', async ({ page }) => {
  const helper = new HelperPage(page);

  await helper.clickEmailLink(userData.email);
  await helper.fillUpdateEmail(userData.email_update);
  await helper.saveButton();
  await helper.verifyUserLoggedIn(userData.email_update);
  await helper.fillUpdateEmail(userData.email);
  await helper.saveButton();
  await helper.verifyUserLoggedIn(userData.email);
  await helper.logOut();
});