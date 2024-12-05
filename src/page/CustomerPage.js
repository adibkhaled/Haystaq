import { expect } from '@playwright/test';

export class CustomerPage {
  constructor(page) {
    this.page = page;
  }

  async fillUpdateFirstName(firstname) {
    await this.page.getByLabel('First name:').fill(firstname);
  }

  async fillUpdateLastName(lastname) {
    await this.page.getByLabel('Last name:').fill(lastname);
  }

  async fillUpdateEmail(email) {
    await this.page.getByLabel('Email:').fill(email);
  }

  async saveButton(){
    await this.page.getByRole('button', { name: 'Save' }).click();
  }

  async verifyFirstName(firstname){
    await expect(this.page.getByLabel('First name:')).toHaveValue(firstname);
  }
  
  async verifyLastName(lastname){
    await expect(this.page.getByLabel('Last name:')).toHaveValue(lastname);
  }

}