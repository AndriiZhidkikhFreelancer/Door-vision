import { test as base } from '@playwright/test';
import { OverviewPage, VisualDoorsPage, SignIn, CreateDoorPage, RoomDoorViewerPage } from '../app';
import { AdminDoorManagerController } from '../api/door-preview/admin.door.manger.controller';
import { user } from '../app/data/user.data';
import { newDoor,doors } from '../app/data/desktop/doors.data'
// Declare the types of your fixtures.
type MyFixtures = {
  overviewPage:OverviewPage,
  visualDoorsPage:VisualDoorsPage,
  createDoorPage:CreateDoorPage,
  adminDoorManagerController:AdminDoorManagerController,
  roomDoorViewerPage: RoomDoorViewerPage,
  signIn:SignIn,
  user: typeof user,
  adminDoor: typeof newDoor
};

// Extend base test by providing "signIn" 
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const adminFixture = base.extend<MyFixtures>({
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
  
  signIn: async ({ page }, use) => {
    const signIn = new SignIn(page)
    await signIn.open()
    await signIn.expectLoaded()
    await signIn.signIn(user.admin)
    await page.waitForURL('https://admin.test.door-vision.cloud/overview');
    await use(signIn)
  },
  overviewPage: async ({ page }, use) => {
    const overviewPage = new OverviewPage(page)
    await use(overviewPage)
  },
  createDoorPage: async ({ page }, use) => {
    const createDoorPage = new CreateDoorPage(page)
    await use(createDoorPage)
  },
  visualDoorsPage: async ({ page }, use) => {
    const visualDoorsPage = new VisualDoorsPage(page)
    await use(visualDoorsPage)
  },
  adminDoor: async ({}, use) => {
    const adminDoor = newDoor
    await use(adminDoor)
  },
  roomDoorViewerPage: async ({ page }, use) => {
    const housDoorViewerPage = new RoomDoorViewerPage(page)
    await use(housDoorViewerPage)
  },
});
export { expect } from '@playwright/test';
