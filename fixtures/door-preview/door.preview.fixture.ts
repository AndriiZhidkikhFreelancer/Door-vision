import { test as base } from '@playwright/test';
import { DoorManager } from '../../api/index';
import { HousDoorViewerPage } from '../../app';
import { doors } from '../../app/data/desktop/doors.data';

// Declare the types of your fixtures.
type MyFixtures = {
  doorManager: DoorManager,
  housDoorViewerPage: HousDoorViewerPage,
  door: typeof doors
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
  housDoorViewerPage: async ({ page }, use) => {
    const housDoorViewerPage = new HousDoorViewerPage(page)
    await use(housDoorViewerPage)
  },
  door: async ({}, use) => {
    const door = doors
    await use(door)
  },
});
export { expect } from '@playwright/test';