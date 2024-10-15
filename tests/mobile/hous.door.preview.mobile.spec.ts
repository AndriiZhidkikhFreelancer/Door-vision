import { doorPreviewMobileFixture, expect } from '../../fixtures/door-preview/mobile/door.preview.mobile.fixture';

doorPreviewMobileFixture.describe('DV-1/01: Door preview - Mobile', () => {
   doorPreviewMobileFixture(`ID-M1 : Check base image`, async ({ roomDoorMobileViewerPage, door }) => {
      await roomDoorMobileViewerPage.open()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('firstRoomWithOakDoor.png')
   });
   doorPreviewMobileFixture(`ID-M4 : Open doors pane and close`, async ({ roomDoorMobileViewerPage,doorPanelMobilePage }) => {
      await roomDoorMobileViewerPage.open()
      await roomDoorMobileViewerPage.clickSwipeMenuButton()
      await expect(roomDoorMobileViewerPage.renderedRoomImage).toBeHidden()
      await doorPanelMobilePage.expectLoaded()
      await expect(doorPanelMobilePage.doors).toHaveCount(7)
      await expect(doorPanelMobilePage.activeDoor).toHaveCount(1)
      await roomDoorMobileViewerPage.clickSwipeMenuButton()
      await expect(roomDoorMobileViewerPage.renderedRoomImage).toBeVisible()
   });
})
