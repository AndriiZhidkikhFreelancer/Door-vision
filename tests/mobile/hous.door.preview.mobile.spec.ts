import { doorPreviewMobileFixture, expect } from '../../fixtures/door-preview/mobile/door.preview.mobile.fixture';

doorPreviewMobileFixture.describe('DV-1/01: Door preview - Mobile', () => {
   doorPreviewMobileFixture(`ID-M1 : Check base image`, async ({ roomDoorMobileViewerPage, door }) => {
      await roomDoorMobileViewerPage.open()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('firstRoomWithOakDoor.png')
   });
   doorPreviewMobileFixture(`ID-M2 : Choose next doors`, async ({ roomDoorMobileViewerPage, door }) => {
      await roomDoorMobileViewerPage.open()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      roomDoorMobileViewerPage.clickNextDoorArrow()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.creme)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('firstRoomWithCremeDoor.png')
      roomDoorMobileViewerPage.clickNextDoorArrow()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.maple)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('firstRoomWithMapleDoor.png')

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
   doorPreviewMobileFixture(`ID-M7: Upload new image`, async ({ roomDoorMobileViewerPage, door }) => {
      await roomDoorMobileViewerPage.open()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickUploadPhotoButton()
      await roomDoorMobileViewerPage.uploadNewphoto('docs/img', 'newDoor.jpg')
      await roomDoorMobileViewerPage.clickSaveNewDoorPositionButton()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('newRoomWithOakDoor.png')
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
   });
   doorPreviewMobileFixture(`ID-M8: Choose new doors for an uploaded image`, async ({ roomDoorMobileViewerPage, doorPanelMobilePage,door }) => {
      await roomDoorMobileViewerPage.open()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickUploadPhotoButton()
      await roomDoorMobileViewerPage.uploadNewphoto('docs/img', 'newDoor.jpg')
      await roomDoorMobileViewerPage.clickSaveNewDoorPositionButton()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickSwipeMenuButton()
      await doorPanelMobilePage.expectLoaded()
      await doorPanelMobilePage.clickDoor(7)
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.anthrazite)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('newRoomWithAnthraziteDoor.png')
      await roomDoorMobileViewerPage.clickSwipeMenuButton()
      await doorPanelMobilePage.expectLoaded()
      await doorPanelMobilePage.clickDoor(3)
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.maple)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('newRoomWithMapleDoor.png')
   });
   
   
})
