import { doorPreviewMobileFixture, expect } from '../../fixtures/door-preview/mobile/door.preview.mobile.fixture';

doorPreviewMobileFixture.describe('DV-1/01: Door preview - Mobile', () => {
   doorPreviewMobileFixture(`ID-M1 : Check base image`, async ({ roomDoorMobileViewerPage, door }) => {
      await roomDoorMobileViewerPage.open()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('firstRoomWithOakDoor.png')
   });
   doorPreviewMobileFixture(`ID-M4 : Open doors panel and close`, async ({ roomDoorMobileViewerPage, doorPanelMobilePage, door}) => {
      await roomDoorMobileViewerPage.open()
      await roomDoorMobileViewerPage.clickSwipeMenuButton()
      await doorPanelMobilePage.expectLoaded()
      await expect(doorPanelMobilePage.doors).toHaveCount(7)
      await expect(doorPanelMobilePage.activeDoor).toHaveCount(1)
      await roomDoorMobileViewerPage.clickSwipeMenuButton()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await expect(roomDoorMobileViewerPage.renderedRoomImage).toBeVisible()
   });
   doorPreviewMobileFixture(`ID-M5: Choose door from door list`, async ({ roomDoorMobileViewerPage,doorPanelMobilePage, door }) => {
      await roomDoorMobileViewerPage.open()
      await roomDoorMobileViewerPage.clickSwipeMenuButton()
      await doorPanelMobilePage.expectLoaded()
      await doorPanelMobilePage.clickDoor(1)
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.creme)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('firstRoomWithCremeDoor.png')
      await roomDoorMobileViewerPage.clickSwipeMenuButton()
      await doorPanelMobilePage.expectLoaded()
      await doorPanelMobilePage.clickDoor(6)
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.anthrazite)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('firstRoomWithAnthraziteDoor.png')
   });
   doorPreviewMobileFixture(`ID-M6: Add three doors to the favourite from the door list`, async ({ roomDoorMobileViewerPage,doorPanelMobilePage, door }) => {
      await roomDoorMobileViewerPage.open()
      await roomDoorMobileViewerPage.clickSwipeMenuButton()
      await doorPanelMobilePage.expectLoaded()
      await doorPanelMobilePage.clickFavouriteMarkForActiveDoor()
      await doorPanelMobilePage.clickFavouriteMarkForDoor(1)
      await doorPanelMobilePage.clickFavouriteMarkForDoor(2)
      await expect(doorPanelMobilePage.doorsMarkedAsFavourite).toHaveCount(3)
      await doorPanelMobilePage.clickFavouriteButton()
      await doorPanelMobilePage.expectLoaded()
      await expect(doorPanelMobilePage.doors).toHaveCount(3)
      await doorPanelMobilePage.clickFavouriteButton()
      await doorPanelMobilePage.expectLoaded()
      await expect(doorPanelMobilePage.doors).toHaveCount(7)
   });
   
   
})
