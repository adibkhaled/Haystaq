import { test } from '@playwright/test';
import { HelperPage } from '../src/HelperPage';
import data from "../data.json";

// Helper function to perform login
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

test('Login with invalid credentials and verify failure', async ({ page }) => {
  const helper = new HelperPage(page);

  // Perform login with invalid credentials and verify login failure
  await performLogin(helper, data.invalid_pass);
  await helper.verifyInvalidLogin();
});

test('Login with invalid user and verify failure', async ({ page }) => {
  const helper = new HelperPage(page);

  // Perform login with invalid credentials and verify login failure
  await performLogin(helper, data.invalid_user);
  await helper.verifyInvalidLogin();
});