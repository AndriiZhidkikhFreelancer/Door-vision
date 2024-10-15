import { doorPreviewMobileFixture } from '../../fixtures/door-preview/mobile/door.preview.mobile.fixture';

doorPreviewMobileFixture.describe('DV-1/01: Door preview - Mobile', () => {
   doorPreviewMobileFixture(`ID-M1 : Check base image`, async ({ roomDoorMobileViewerPage }) => {
         await roomDoorMobileViewerPage.open()
         await roomDoorMobileViewerPage.takeDoorViewerScreenshot('firstRoomWithOakDoor.png')
      });
   })
