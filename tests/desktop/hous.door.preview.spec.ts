import { doorPreviewFixture, expect } from '../../fixtures/door-preview/door.preview.fixture';
import { ProductDetailPage } from '../../app/index';
import path from 'path';

doorPreviewFixture.describe('DV-1/01: Door preview - Desctop', () => {
   doorPreviewFixture(`ID-1:Check base image`, async ({ roomDoorViewerPage }) => {
      await roomDoorViewerPage.open()
      await roomDoorViewerPage.takeDoorViewerScreenshot('firstRoomWithOakDoor.png')
   });
   doorPreviewFixture(`ID-2:Change doors`, async ({ roomDoorViewerPage, door }) => {
      await roomDoorViewerPage.open()
      await roomDoorViewerPage.clickDoor(door.creme)
      await roomDoorViewerPage.takeDoorViewerScreenshot('firstRoomWithCremeDoor.png')
      await roomDoorViewerPage.clickDoor(door.anthrazite)
      await roomDoorViewerPage.takeDoorViewerScreenshot('firstRoomWithAnthraziteDoor.png')
   });
   doorPreviewFixture(`ID-3:Check fourth base image`, async ({ roomDoorViewerPage }) => {
      await roomDoorViewerPage.open()
      await roomDoorViewerPage.clickRoomImage(4)
      await roomDoorViewerPage.takeDoorViewerScreenshot('fourthRoomWithOakDoor.png')
   });
   doorPreviewFixture(`ID-4:Change doors on the fourth image`, async ({ roomDoorViewerPage, door }) => {
      await roomDoorViewerPage.open()
      await roomDoorViewerPage.clickRoomImage(4)
      await roomDoorViewerPage.clickDoor(door.anthrazite)
      await roomDoorViewerPage.takeDoorViewerScreenshot('fourthRoomWithAnthraziteDoor.png')
      await roomDoorViewerPage.clickDoor(door.beech)
      await roomDoorViewerPage.takeDoorViewerScreenshot('fourthRoomWithBeechDoor.png')
   });
   doorPreviewFixture(`ID-5:Upload new image`, async ({ roomDoorViewerPage }) => {
      await roomDoorViewerPage.open()
      await roomDoorViewerPage.uploadNewphoto('docs/img', 'newDoor.jpg')
      await roomDoorViewerPage.clickSaveNewDoorPositionButton()
      await roomDoorViewerPage.takeDoorViewerScreenshot('newRoomWithOakDoor.png')
   });
   doorPreviewFixture(`ID-6:Change doors on the new images`, async ({ roomDoorViewerPage, door }) => {
      await roomDoorViewerPage.open()
      await roomDoorViewerPage.uploadNewphoto('docs/img', 'newDoor.jpg')
      await roomDoorViewerPage.clickSaveNewDoorPositionButton()
      await roomDoorViewerPage.takeDoorViewerScreenshot('newRoomWithOakDoor.png')
      await roomDoorViewerPage.clickDoor(door.anthrazite)
      await roomDoorViewerPage.takeDoorViewerScreenshot('newRoomWithAnthraziteDoor.png')
      await roomDoorViewerPage.clickDoor(door.creme)
      await roomDoorViewerPage.takeDoorViewerScreenshot('newRoomWithCremeDoor.png')
   });
   doorPreviewFixture(`ID-7:Add door to the favourite using footer menu`, async ({ roomDoorViewerPage, door }) => {
      await roomDoorViewerPage.open()
      await roomDoorViewerPage.uploadNewphoto('docs/img', 'newDoor.jpg')
      await roomDoorViewerPage.clickSaveNewDoorPositionButton()
      await roomDoorViewerPage.clickDoor(door.anthrazite)
      await expect(roomDoorViewerPage.favouriteToggleText).toHaveText('0')
      await roomDoorViewerPage.clickMarkFavouriteButton()
      await expect(roomDoorViewerPage.favouriteToggleText).toHaveText('1')
      await roomDoorViewerPage.clickFavouriteToggleText()
      await expect(roomDoorViewerPage.activeDoor(door.anthrazite)).toBeVisible()
      await expect(roomDoorViewerPage.doors).toHaveCount(1)
   });
   doorPreviewFixture(`ID-8:Add two doors to the favourite using doors list`, async ({ roomDoorViewerPage, door }) => {
      await roomDoorViewerPage.open()
      await roomDoorViewerPage.clickActiveDoorFavouriteMark(door.oak)
      await expect(roomDoorViewerPage.activeDoorMarkedAsFavourite(door.oak)).toBeVisible()
      await roomDoorViewerPage.clickDoorFavouriteMark(door.anthrazite)
      await expect(roomDoorViewerPage.doorMarkedAsFavourite(door.anthrazite)).toBeVisible()
      await roomDoorViewerPage.clickDoorFavouriteMark(door.creme)
      await expect(roomDoorViewerPage.doorMarkedAsFavourite(door.creme)).toBeVisible()
      await expect(roomDoorViewerPage.favouriteToggleText).toHaveText('3')
      await roomDoorViewerPage.clickFavouriteToggleText()
      await expect(roomDoorViewerPage.activeDoor(door.oak)).toBeVisible()
      await expect(roomDoorViewerPage.door(door.anthrazite)).toBeVisible()
      await expect(roomDoorViewerPage.door(door.creme)).toBeVisible()
      await expect(roomDoorViewerPage.doors).toHaveCount(3)
   })
   doorPreviewFixture(`ID-9:Refine the door position in the new images`, async ({ roomDoorViewerPage }) => {
      await roomDoorViewerPage.open()
      await roomDoorViewerPage.uploadNewphoto('docs/img', 'newDoor.jpg')
      await roomDoorViewerPage.clickSaveNewDoorPositionButton()
      await roomDoorViewerPage.clickRefinePositioningButton()
      await roomDoorViewerPage.changeDoorPosition()
      await roomDoorViewerPage.clickSaveNewDoorPositionButton()
      await roomDoorViewerPage.takeDoorViewerScreenshot('newDoorPosition.png')
   });
   doorPreviewFixture(`ID-10:Save image`, async ({ roomDoorViewerPage, page }) => {
      await roomDoorViewerPage.open()
      await roomDoorViewerPage.uploadNewphoto('docs/img', 'newDoor.jpg')
      await roomDoorViewerPage.clickSaveNewDoorPositionButton()
      await roomDoorViewerPage.takeDoorViewerScreenshot('newRoomWithOakDoor.png')
      const downloadedImagePath = await roomDoorViewerPage.saveDownloadedImage();
      const referenceImagePath = path.resolve('docs/img/downloaded.oak.desktop.png');
      await roomDoorViewerPage.verifyDownloadedImage(downloadedImagePath, referenceImagePath); 
   });
   doorPreviewFixture(`ID-11:Flip door`, async ({ roomDoorViewerPage }) => {
      await roomDoorViewerPage.open()
      await roomDoorViewerPage.uploadNewphoto('docs/img', 'newDoor.jpg')
      await roomDoorViewerPage.clickSaveNewDoorPositionButton()
      await roomDoorViewerPage.takeDoorViewerScreenshot('newRoomWithOakDoor.png')
      await roomDoorViewerPage.clickFlipDoorButton()
      await roomDoorViewerPage.takeDoorViewerScreenshot('flippedNewRoomWithOakDoor.png')
   });
   doorPreviewFixture('ID-12:Click share linkg', async ({ roomDoorViewerPage, page }) => {
      await roomDoorViewerPage.open()
      await roomDoorViewerPage.uploadNewphoto('docs/img', 'newDoor.jpg')
      await roomDoorViewerPage.clickSaveNewDoorPositionButton()
      await roomDoorViewerPage.mockShareDialog()
      await roomDoorViewerPage.clickShareLinkButton()
      await roomDoorViewerPage.waitForShareDialog()
   });
   doorPreviewFixture('ID-13: Click go to shop button', async ({ roomDoorViewerPage, context }) => {
      await roomDoorViewerPage.open()
      await roomDoorViewerPage.uploadNewphoto('docs/img', 'newDoor.jpg')
      await roomDoorViewerPage.clickSaveNewDoorPositionButton()
      await expect(roomDoorViewerPage.goToShopButton).toBeVisible()
      const [newPage] = await Promise.all([
         context.waitForEvent('page'),
         await roomDoorViewerPage.clickGoToShopButton()
      ])
      await newPage.bringToFront();
      const productDetailPage = new ProductDetailPage(newPage)
      await expect(productDetailPage.pageTitle).toHaveText('Hey, ')
      await expect(productDetailPage.pageTitle).toBeVisible()
      expect(newPage).toHaveURL('https://www.door-vision.com/productdetail')
   });

})
