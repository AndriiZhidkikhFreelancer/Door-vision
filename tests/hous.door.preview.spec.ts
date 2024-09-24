import { doorPreviewFixture } from '../fixtures/door-preview/door.preview.fixture';

doorPreviewFixture('ID-1 : Check base image', async ({ housDoorViewerPage }) => {
   await housDoorViewerPage.open()
   await housDoorViewerPage.takeDoorViewerScreenshot('firstRoomWithOakDoor.png')
});
doorPreviewFixture('ID-2 : Change doors', async ({ housDoorViewerPage, door }) => {
   await housDoorViewerPage.open()
   await housDoorViewerPage.clickDoor(door.creme)
   await housDoorViewerPage.takeDoorViewerScreenshot('firstRoomWithCremeDoor.png')
   await housDoorViewerPage.clickDoor(door.anthrazite)
   await housDoorViewerPage.takeDoorViewerScreenshot('firstRoomWithAnthraziteDoor.png')
});
doorPreviewFixture('ID-3 : Check fourth base image', async ({ housDoorViewerPage }) => {
   await housDoorViewerPage.open()
   await housDoorViewerPage.clickRoomImage(4)
   await housDoorViewerPage.takeDoorViewerScreenshot('fourthRoomWithOakDoor.png')
});
doorPreviewFixture('ID-4 : Change doors on the fourth image', async ({ housDoorViewerPage, door }) => {
   await housDoorViewerPage.open()
   await housDoorViewerPage.clickRoomImage(4)
   await housDoorViewerPage.clickDoor(door.anthrazite)
   await housDoorViewerPage.takeDoorViewerScreenshot('fourthRoomWithAnthraziteDoor.png')
   await housDoorViewerPage.clickDoor(door.beech)
   await housDoorViewerPage.takeDoorViewerScreenshot('fourthRoomWithBeechDoor.png')
});

