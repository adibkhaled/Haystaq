import { test } from '@playwright/test';
import { HelperPage } from '../src/page/HelperPage';
import data from "../data.json";

// Function to perform login
const performLogin = async (login, userData) => {
  await login.navigateToLogin();
  await login.fillLogin(userData);
  await login.submitLogin();
};

test.beforeEach(async ({ page }) => {
  await page.goto(data.url);
});

test('Login and log out with valid user credentials', async ({ page }) => {
  const helper = new HelperPage(page);

  // Perform login and logout for valid user
  await performLogin(helper, data.login_credential);
  await helper.verifyUserLoggedIn(data.login_credential.email);
  await helper.logOut();
});

test('Login with invalid password and verify failure', async ({ page }) => {
  const helper = new HelperPage(page);

  // Perform login with invalid password and verify login failure
  await performLogin(helper, data.invalid_password);
  await helper.verifyInvalidLogin();
});

test('Login with wrong user and verify failure', async ({ page }) => {
  const helper = new HelperPage(page);

  // Perform login with invalid user and verify login failure
  await performLogin(helper, data.invalid_user);
  await helper.verifyInvalidLogin();
});