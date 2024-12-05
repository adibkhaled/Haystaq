import { test } from '@playwright/test';
import { UserPage } from '../src/page/UserPage';
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
  const user = new UserPage(page);

  // Perform login and logout for valid user
  await performLogin(user, data.login_credential);
  await user.verifyUserLoggedIn(data.login_credential.email);
  await user.logOut();
});

test('Login with invalid password and verify failure', async ({ page }) => {
  const user = new UserPage(page);

  // Perform login with invalid password and verify login failure
  await performLogin(user, data.invalid_password);
  await user.verifyInvalidLogin();
});

test('Login with wrong user and verify failure', async ({ page }) => {
  const user = new UserPage(page);

  // Perform login with invalid user and verify login failure
  await performLogin(user, data.invalid_user);
  await user.verifyInvalidLogin();
});