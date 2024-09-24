import { test as base } from '@playwright/test';
import { DoorManager } from '../../api/index';
import { RoomDoorViewerPage, ProductDetailPage } from '../../app/index';
import { doors } from '../../app/data/desktop/doors.data';
import { imgCall } from '../../app/data/desktop/img-api-url/img-api.data';
// Declare the types of your fixtures.
type MyFixtures = {
  doorManager: DoorManager,
  roomDoorViewerPage: RoomDoorViewerPage,
  productDetailPage:ProductDetailPage
  door: typeof doors
  imgCall: typeof imgCall
};

// Extend base test by providing "signIn" 
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const doorPreviewFixture = base.extend<MyFixtures>({
  doorManager: async ({ page }, use) => {
    const doorManager = new DoorManager(page.request)
    const response = await doorManager.getUserScenarios();
    const shortIds = response.data.getAppUser.getUserScenarios.map(scenario => scenario.shortId);
    if (shortIds.length > 0) {
      for (const id of shortIds) {
         await doorManager.deleteUserScenarioForAppUser(id);
      }
   }
    await use(doorManager)
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