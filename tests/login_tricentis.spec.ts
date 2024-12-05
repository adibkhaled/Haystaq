import { test } from '@playwright/test';
import { HelperPage } from '../src/HelperPage';
import data from "../data.json";

// Global user data
const validUserData = {
  email: data.email,
  password: data.valid_pass
};

const invalidUserData = {
  email: data.email,
  password: data.in_valid_pass
};

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
  await performLogin(helper, validUserData);
  await helper.verifyUserLoggedIn(validUserData.email);
  await helper.logOut();
});

test('Login with invalid credentials and verify failure', async ({ page }) => {
  const helper = new HelperPage(page);

  // Perform login with invalid credentials and verify login failure
  await performLogin(helper, invalidUserData);
  await helper.verifyInvalidLogin();
});