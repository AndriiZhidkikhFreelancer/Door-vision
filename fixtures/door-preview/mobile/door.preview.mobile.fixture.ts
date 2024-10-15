import { test as base } from '@playwright/test';
import { DoorManager } from '../../../api/index';
import { RoomDoorMobileViewerPage } from '../../../app/index';

// Declare the types of your fixtures.
type MyFixtures = {
  doorManager: DoorManager,
  roomDoorMobileViewerPage: RoomDoorMobileViewerPage,

};

// Extend base test by providing "signIn" 
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const doorPreviewMobileFixture = base.extend<MyFixtures>({
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
  roomDoorMobileViewerPage: async ({ page }, use) => {
    const roomDoorMobileViewerPage = new RoomDoorMobileViewerPage(page)
    await use(roomDoorMobileViewerPage)
  },

});
export { expect } from '@playwright/test';
