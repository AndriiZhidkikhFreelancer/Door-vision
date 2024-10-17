import { doorPreviewMobileFixture, expect } from '../../fixtures/door-preview/mobile/door.preview.mobile.fixture';
import { ProductDetailPage } from '../../app/index';
const path = require('path');

doorPreviewMobileFixture.describe('DV-1/01: Door preview - Mobile', () => {
   doorPreviewMobileFixture('ID-M1:Check base image', async ({ roomDoorMobileViewerPage,adminDoorManagerController, door }) => {
      await roomDoorMobileViewerPage.open()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('firstRoomWithOakDoor.png')
   });
   doorPreviewMobileFixture('ID-M2:Choose next doors', async ({ roomDoorMobileViewerPage, adminDoorManagerController,door }) => {
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
      roomDoorMobileViewerPage.clickNextDoorArrow()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door['crack oak'])
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('firstRoomWithCrackOakDoor.png')
   });
   doorPreviewMobileFixture('ID-M3:Choose previous doors', async ({ roomDoorMobileViewerPage,adminDoorManagerController, door }) => {
      await roomDoorMobileViewerPage.open()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickNextDoorArrow()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.creme)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickNextDoorArrow()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.maple)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickNextDoorArrow()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door['crack oak'])
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickPreviousDoorArrow()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.maple)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('firstRoomWithMapleDoor.png')
      await roomDoorMobileViewerPage.clickPreviousDoorArrow()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.creme)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('firstRoomWithCremeDoor.png')
      await roomDoorMobileViewerPage.clickPreviousDoorArrow()
      await roomDoorMobileViewerPage.open()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('firstRoomWithOakDoor.png')
   });
   doorPreviewMobileFixture('ID-M4:Open doors panel and close', async ({ roomDoorMobileViewerPage, doorPanelMobilePage,adminDoorManagerController, door}) => {
      await roomDoorMobileViewerPage.open()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickSwipeMenuButton()
      await doorPanelMobilePage.expectLoaded()
      await expect(doorPanelMobilePage.doors).toHaveCount(7)
      await roomDoorMobileViewerPage.clickSwipeMenuButton()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await expect(roomDoorMobileViewerPage.renderedRoomImage).toBeVisible()
   });
   doorPreviewMobileFixture('ID-M5:Choose door from door list', async ({ roomDoorMobileViewerPage,doorPanelMobilePage,adminDoorManagerController, door }) => {
      await roomDoorMobileViewerPage.open()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickSwipeMenuButton()
      await doorPanelMobilePage.expectLoaded()
      await doorPanelMobilePage.clickDoor(2)
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.creme)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('firstRoomWithCremeDoor.png')
      await roomDoorMobileViewerPage.clickSwipeMenuButton()
      await doorPanelMobilePage.expectLoaded()
      await doorPanelMobilePage.clickDoor(7)
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.anthrazite)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('firstRoomWithAnthraziteDoor.png')
   });
   doorPreviewMobileFixture('ID-M6:Add three doors to the favourite from the door list', async ({ roomDoorMobileViewerPage,doorPanelMobilePage,adminDoorManagerController, door }) => {
      await roomDoorMobileViewerPage.open()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickSwipeMenuButton()
      await doorPanelMobilePage.expectLoaded()
      await doorPanelMobilePage.clickFavouriteMarkForDoor(1)
      await doorPanelMobilePage.clickFavouriteMarkForDoor(2)
      await doorPanelMobilePage.clickFavouriteMarkForDoor(3)
      await expect(doorPanelMobilePage.doorsMarkedAsFavourite).toHaveCount(3)
      await doorPanelMobilePage.clickFavouriteButton()
      await doorPanelMobilePage.expectLoaded()
      await expect(doorPanelMobilePage.doors).toHaveCount(3)
      await doorPanelMobilePage.clickFavouriteButton()
      await doorPanelMobilePage.expectLoaded()
      await expect(doorPanelMobilePage.doors).toHaveCount(7)
   });
   doorPreviewMobileFixture('ID-M7:Upload new image', async ({ roomDoorMobileViewerPage, adminDoorManagerController,door }) => {
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
   doorPreviewMobileFixture('ID-M8:Choose new doors for an uploaded image', async ({ roomDoorMobileViewerPage, doorPanelMobilePage,adminDoorManagerController,door }) => {
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
   doorPreviewMobileFixture('ID-M9:Choose next doors on the uploaded image', async ({ roomDoorMobileViewerPage,adminDoorManagerController,door }) => {
      await roomDoorMobileViewerPage.open()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickUploadPhotoButton()
      await roomDoorMobileViewerPage.uploadNewphoto('docs/img', 'newDoor.jpg')
      await roomDoorMobileViewerPage.clickSaveNewDoorPositionButton()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickNextDoorArrow()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.creme)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('newRoomWithCremeDoor.png')
      await roomDoorMobileViewerPage.clickNextDoorArrow()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.maple)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('newRoomWithMapleDoor.png')
      await roomDoorMobileViewerPage.clickNextDoorArrow()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door['crack oak'])
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('newRoomWithCrackOakDoor.png')
   });
   doorPreviewMobileFixture('ID-M10:Choose previous doors on the uploaded image', async ({ roomDoorMobileViewerPage,adminDoorManagerController,door }) => {
      await roomDoorMobileViewerPage.open()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickUploadPhotoButton()
      await roomDoorMobileViewerPage.uploadNewphoto('docs/img', 'newDoor.jpg')
      await roomDoorMobileViewerPage.clickSaveNewDoorPositionButton()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickNextDoorArrow()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.creme)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickNextDoorArrow()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.maple)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickNextDoorArrow()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door['crack oak'])
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickPreviousDoorArrow()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.maple)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('newRoomWithMapleDoor.png')
      await roomDoorMobileViewerPage.clickPreviousDoorArrow()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.creme)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('newRoomWithCremeDoor.png')
      await roomDoorMobileViewerPage.clickPreviousDoorArrow()
      await roomDoorMobileViewerPage.open()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('newRoomWithOakDoor.png')
   });
   doorPreviewMobileFixture('ID-M11:Click burger menu', async ({ roomDoorMobileViewerPage, burgerMenuMobilePage,adminDoorManagerController, door }) => {
      await roomDoorMobileViewerPage.open()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickMenuButton()
      await burgerMenuMobilePage.expectLoaded() 
      await burgerMenuMobilePage.clickCloseMenuButton()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await expect(burgerMenuMobilePage.roomsImageSection).toHaveCount(0)
   });
   doorPreviewMobileFixture.only('ID-M12:Save image', async ({ roomDoorMobileViewerPage, burgerMenuMobilePage, adminDoorManagerController,door }) => {
      await roomDoorMobileViewerPage.open()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickUploadPhotoButton()
      await roomDoorMobileViewerPage.uploadNewphoto('docs/img', 'newDoor.jpg')
      await roomDoorMobileViewerPage.clickSaveNewDoorPositionButton()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickMenuButton()
      await burgerMenuMobilePage.expectLoaded() 
      const downloadedImagePath = await burgerMenuMobilePage.saveDownloadedImage();
      const referenceImagePath = path.resolve('docs/img/downloaded.oak.mobile.png');
      await burgerMenuMobilePage.verifyDownloadedImage(downloadedImagePath, referenceImagePath); 
   });
   doorPreviewMobileFixture('ID-M13:Flip door', async ({ roomDoorMobileViewerPage,burgerMenuMobilePage,adminDoorManagerController, door }) => {
      await roomDoorMobileViewerPage.open()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickUploadPhotoButton()
      await roomDoorMobileViewerPage.uploadNewphoto('docs/img', 'newDoor.jpg')
      await roomDoorMobileViewerPage.clickSaveNewDoorPositionButton()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickMenuButton()
      await burgerMenuMobilePage.expectLoaded() 
      await burgerMenuMobilePage.clickFlipDoorButton()
      await expect(burgerMenuMobilePage.roomsImageSection).toHaveCount(0)
      await roomDoorMobileViewerPage.takeDoorViewerScreenshot('flippedNewRoomWithOakDoor.png')
   });
   doorPreviewMobileFixture('ID-M15:Click go to shop button', async ({ roomDoorMobileViewerPage, context, adminDoorManagerController,door }) => {
      await roomDoorMobileViewerPage.open()
      await roomDoorMobileViewerPage.clickUploadPhotoButton()
      await roomDoorMobileViewerPage.uploadNewphoto('docs/img', 'newDoor.jpg')
      await roomDoorMobileViewerPage.clickSaveNewDoorPositionButton()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await expect(roomDoorMobileViewerPage.goToShopButton).toBeVisible()
      const [newPage] = await Promise.all([
         context.waitForEvent('page'),
         await roomDoorMobileViewerPage.clickGoToShopButton()
      ])
      await newPage.bringToFront();
      const productDetailPage = new ProductDetailPage(newPage)
      await expect(productDetailPage.pageTitle).toHaveText('Hey, ')
      await expect(productDetailPage.pageTitle).toBeVisible()
      expect(newPage).toHaveURL('https://www.door-vision.com/productdetail')
   });
   doorPreviewMobileFixture.skip('ID-M14:Click share link', async ({roomDoorMobileViewerPage,burgerMenuMobilePage, adminDoorManagerController,door }) => {
      await roomDoorMobileViewerPage.open()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickUploadPhotoButton()
      await roomDoorMobileViewerPage.uploadNewphoto('docs/img', 'newDoor.jpg')
      await roomDoorMobileViewerPage.clickSaveNewDoorPositionButton()
      await expect(roomDoorMobileViewerPage.doorName).toHaveText(door.oak)
      await expect(roomDoorMobileViewerPage.doorName).toBeVisible()
      await roomDoorMobileViewerPage.clickMenuButton()
      await burgerMenuMobilePage.expectLoaded() 
      await burgerMenuMobilePage.mockShareDialog()
      await burgerMenuMobilePage.clickShareLinkButton()
      await burgerMenuMobilePage.waitForShareDialog()
   });
   
})
