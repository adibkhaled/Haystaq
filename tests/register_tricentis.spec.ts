// registration.test.js
import { test } from '@playwright/test';
import { HelperPage } from '../src/HelperPage';
import data from "../data.json";


test.beforeEach(async ({ page })=> {
  await page.goto(data.url)
});

const userData = {
  firstname: data.firstname,
  lastname: data.lastname,
  email: data.email,
  password: data.valid_pass
};

test('Register in Tricentis site', async ({ page }) => {
  const helper = new HelperPage(page);

  await helper.navigateToRegister();
  await helper.fillRegistrationForm(userData);
  await helper.submitRegistration();
  if (await helper.alreadyRegister() === 'No') {
    await helper.continueAfterRegistration();
    await helper.verifyUserLoggedIn(userData.email);
    await helper.logOut()
  } else {
    console.log('Email already specified');
  };
});

