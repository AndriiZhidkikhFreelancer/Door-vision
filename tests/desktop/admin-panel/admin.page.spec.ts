import { adminFixture, expect } from '../../../fixtures/admin.fixture';
import { AdminDoorManagerController } from '../../../api/door-preview/admin.door.manger.controller';

adminFixture.describe('DV-1/01: Door preview - Desctop', () => {
   adminFixture.only(`ID-A2:Visit the visual door page`, async ({ overviewPage, visualDoorsPage, signIn, adminDoorManagerController }) => {
      await overviewPage.open()
      await overviewPage.expectLoaded()
      await overviewPage.clickVisualDoorsTab()
      await visualDoorsPage.expectLoaded()
   });
   adminFixture.only(`ID-A3:Visit the visual door page`, async ({ visualDoorsPage, createDoorPage, signIn, adminDoorManagerController, roomDoorViewerPage,adminDoor }) => {
      await visualDoorsPage.open()
      await visualDoorsPage.expectLoaded()
      await visualDoorsPage.clickCreateNewDoorButton()
      await createDoorPage.setDoorNameField(adminDoor.name)
      await createDoorPage.setExternalIdsField(adminDoor.externalId)
      await createDoorPage.setShopLinkField(adminDoor.shopLink)
      await createDoorPage.setPriceField(adminDoor.price)
      await createDoorPage.choosePriceCurrency(adminDoor.euro)
      await createDoorPage.uploadDoorImage('docs/img', 'adminDoor.png')
      await createDoorPage.clickSaveButton()
      await expect(createDoorPage.successMessage).toBeVisible()
      await expect(createDoorPage.successMessage).toHaveText('Saved successfully')
      await expect(createDoorPage.newDoorImg).toBeVisible()
      await createDoorPage.pingNewDoorImg()
      await roomDoorViewerPage.open()
      await roomDoorViewerPage.takeDoorViewerScreenshot('firstRoomWithTestAutomationDoor.png')
 
   });
});