// RegistrationPage.js
import { expect } from '@playwright/test';

export class UserPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToLogin() {
    await this.page.getByRole('link', { name: 'Log in' }).click();
  }

  async fillLogin(user) {
    await this.page.getByLabel('Email:').fill(user.email);
    await this.page.getByLabel('Password:').fill(user.password);
  }

  async submitLogin() {
    await this.page.getByRole('button', { name: 'Log in' }).click();
  }

  async verifyUserLoggedIn(email) {
    await expect(this.page.getByRole('link', { name: email })).toBeVisible();
  }

  async logOut() {
    await this.page.getByRole('link', { name: 'Log out' }).click();
  }

  async clickEmailLink(email){
    await this.page.getByRole('link', { name: email }).click();
  }

 

  async verifyInvalidLogin(){
    try {
      const errorMessage = this.page.getByText('Login was unsuccessful.'); 
      if (await errorMessage.isVisible()) {
        console.log('Login unsuccessful', await errorMessage.textContent());
      }
    } catch (error) {
      return error.message;
    }
  }
}