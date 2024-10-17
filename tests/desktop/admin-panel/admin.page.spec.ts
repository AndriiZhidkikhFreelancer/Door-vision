import { adminFixture, expect } from '../../../fixtures/admin.fixture';

adminFixture.describe('DV-1/01: Door preview - Desctop', () => {
   adminFixture(`ID-A2:Visit the visual door page`, async ({ overviewPage, visualDoorsPage, signIn, adminDoorManagerController }) => {
      await overviewPage.open()
      await overviewPage.expectLoaded()
      await overviewPage.clickVisualDoorsTab()
      await visualDoorsPage.expectLoaded()
   });
   adminFixture(`ID-A3:Visit the visual door page`, async ({ visualDoorsPage, createDoorPage, signIn, adminDoorManagerController, roomDoorViewerPage,newAdminDoor }) => {
      await visualDoorsPage.open()
      await visualDoorsPage.clickCreateNewDoorButton()
      await createDoorPage.setDoorNameField(newAdminDoor.name)
      await createDoorPage.setExternalIdsField(newAdminDoor.externalId)
      await createDoorPage.setShopLinkField(newAdminDoor.shopLink)
      await createDoorPage.setPriceField(newAdminDoor.price)
      await createDoorPage.choosePriceCurrency(newAdminDoor.euro)
      await createDoorPage.uploadDoorImage('docs/img', 'adminDoor.png')
      await createDoorPage.clickSaveButton()
      await expect(createDoorPage.alertMessage).toBeVisible()
      await expect(createDoorPage.alertMessage).toHaveText('Saved successfully')
      await expect(createDoorPage.newDoorImg).toBeVisible()
      await createDoorPage.pingNewDoorImg()
      await roomDoorViewerPage.open()
      await roomDoorViewerPage.takeDoorViewerScreenshot('firstRoomWithTestAutomationDoor.png')
      await visualDoorsPage.open()
      await visualDoorsPage.clickExternalIds(newAdminDoor.externalId)
      await expect(createDoorPage.doorNameField).toHaveValue(newAdminDoor.name)
      await createDoorPage.clickDeleteDoorButtonn()
      await expect(createDoorPage.alertMessage).toHaveText('Visual door successfully deleted')
      await visualDoorsPage.open()
      await visualDoorsPage.expectLoaded()
      await expect(visualDoorsPage.externalIds(newAdminDoor.externalId)).toHaveCount(0)
   });
});