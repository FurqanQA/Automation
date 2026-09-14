export class BasePage {

    constructor(page) {
        this.page = page;
    }

    async goBack() {
        await this.page.goBack();
    }

    async reload() {
        await this.page.reload();
    }

    async getPageTitle() {
        return await this.page.title();
    }
}