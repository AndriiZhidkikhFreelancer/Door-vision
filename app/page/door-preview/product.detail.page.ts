import { AppPage } from "../../abstractClasses";

export class ProductDetailPage extends AppPage {
    public pagePath = 'https://www.door-vision.com/productdetail';
    public pageTitle = this.page.locator('h1')
}