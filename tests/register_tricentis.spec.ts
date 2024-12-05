// registration.test.js
import { test } from '@playwright/test';
import { HelperPage } from '../src/HelperPage';
import data from "../data.json";


test.beforeEach(async ({ page })=> {
  await page.goto(data.url)
});


test('Register in Tricentis site', async ({ page }) => {
  const helper = new HelperPage(page);

  await helper.navigateToRegister();
  await helper.fillRegistrationForm(data.register_data);
  await helper.submitRegistration();
  if (await helper.alreadyRegister() === 'No') {
    await helper.continueAfterRegistration();
    await helper.verifyUserLoggedIn(data.register_data.email);
    await helper.logOut()
  } else {
    console.log('Email already specified');
  };
});

