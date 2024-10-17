import { test as base } from '@playwright/test';
import { DoorManager } from '../../api/index';
import { RoomDoorViewerPage, ProductDetailPage } from '../../app/index';
import { AdminDoorManagerController } from '../../api/door-preview/admin.door.manger.controller';
import { doors } from '../../app/data/desktop/doors.data';
import { imgCall } from '../../app/data/desktop/img-api-url/img-api.data';
// Declare the types of your fixtures.
type MyFixtures = {
  roomDoorViewerPage: RoomDoorViewerPage,
  productDetailPage:ProductDetailPage,
  adminDoorManagerController:AdminDoorManagerController,
  door: typeof doors
  imgCall: typeof imgCall
};

// Extend base test by providing "signIn" 
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const doorPreviewFixture = base.extend<MyFixtures>({
  adminDoorManagerController: async ({ page }, use) => {
    const adminDoorManagerController = new AdminDoorManagerController(page.request)
    const response = await adminDoorManagerController.getVisualDoorsListPaginated();
    const ids = response.data.getVisualDoorsPaginated.results
         .filter((item: any) => item.name === 'Test Automation door')
         .map((item: any) => item.id);

    if (ids.length > 0) {
      for (const id of ids) {
         await adminDoorManagerController.deleteVisualDoor(id);
      }
   }
    await use(adminDoorManagerController)
  },
  roomDoorViewerPage: async ({ page }, use) => {
    const housDoorViewerPage = new RoomDoorViewerPage(page)
    await use(housDoorViewerPage)
  },
  productDetailPage: async ({ page }, use) => {
    const productDetailPage = new ProductDetailPage(page[1])
    await use(productDetailPage)
  },
  door: async ({}, use) => {
    const door = doors
    await use(door)
  },
  imgCall: async ({}, use) => {
    await use(imgCall)
  },
});
export { expect } from '@playwright/test';
