import { test as base } from '@playwright/test';
import { RoomDoorMobileViewerPage, DoorPanelMobilePage, BurgerMenuMobilePage } from '../../../app/index';
import { AdminDoorManagerController } from '../../../api/door-preview/admin.door.manger.controller'
import { doors } from '../../../app/data/desktop/doors.data';

// Declare the types of your fixtures.
type MyFixtures = {
  roomDoorMobileViewerPage: RoomDoorMobileViewerPage,
  burgerMenuMobilePage: BurgerMenuMobilePage,
  adminDoorManagerController:AdminDoorManagerController,
  doorPanelMobilePage: DoorPanelMobilePage,
  door: typeof doors
};

// Extend base test by providing "signIn" 
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const doorPreviewMobileFixture = base.extend<MyFixtures>({
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
  roomDoorMobileViewerPage: async ({ page }, use) => {
    const roomDoorMobileViewerPage = new RoomDoorMobileViewerPage(page)
    await use(roomDoorMobileViewerPage)
  },
  doorPanelMobilePage: async ({ page }, use) => {
    const doorPanelMobilePage = new DoorPanelMobilePage(page)
    await use(doorPanelMobilePage)
  },
  burgerMenuMobilePage: async ({ page }, use) => {
    const burgerMenuMobilePage = new BurgerMenuMobilePage(page)
    await use(burgerMenuMobilePage)
  },
  door: async ({}, use) => {
    const door = doors
    await use(door)
  },
});
export { expect } from '@playwright/test';
