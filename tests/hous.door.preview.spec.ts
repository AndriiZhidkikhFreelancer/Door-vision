import { doorPreviewFixture } from '../fixtures/door-preview/door.preview.fixture';
doorPreviewFixture(`ID-1 : Check base image`, async ({ roomDoorViewerPage, imgCall }) => {
   await roomDoorViewerPage.open()
   await roomDoorViewerPage.waitApiCall(imgCall.oakDoor)
   await roomDoorViewerPage.takeDoorViewerScreenshot('firstRoomWithOakDoor.png')
});
doorPreviewFixture(`ID-2 : Change doors`, async ({ roomDoorViewerPage, door, imgCall }) => {
   await roomDoorViewerPage.open()
   await roomDoorViewerPage.waitApiCall(imgCall.oakDoor)
   await roomDoorViewerPage.clickDoor(door.creme)
   await roomDoorViewerPage.waitApiCall(imgCall.cremeDoor)
   await roomDoorViewerPage.takeDoorViewerScreenshot('firstRoomWithCremeDoor.png')
   await roomDoorViewerPage.clickDoor(door.anthrazite)
   await roomDoorViewerPage.waitApiCall(imgCall.anthraziteDoor)
   await roomDoorViewerPage.takeDoorViewerScreenshot('firstRoomWithAnthraziteDoor.png')
});
doorPreviewFixture(`ID-3 : Check fourth base image`, async ({ roomDoorViewerPage, imgCall }) => {
   await roomDoorViewerPage.open()
   await roomDoorViewerPage.waitApiCall(imgCall.oakDoor)
   await roomDoorViewerPage.clickRoomImage(4)
   await roomDoorViewerPage.takeDoorViewerScreenshot('fourthRoomWithOakDoor.png')
});
doorPreviewFixture(`ID-4 : Change doors on the fourth image`, async ({ roomDoorViewerPage, door, imgCall }) => {
   await roomDoorViewerPage.open()
   await roomDoorViewerPage.waitApiCall(imgCall.oakDoor)
   await roomDoorViewerPage.clickRoomImage(4)
   await roomDoorViewerPage.clickDoor(door.anthrazite)
   await roomDoorViewerPage.waitApiCall(imgCall.anthraziteDoor)
   await roomDoorViewerPage.takeDoorViewerScreenshot('fourthRoomWithAnthraziteDoor.png')
   await roomDoorViewerPage.clickDoor(door.beech)
   await roomDoorViewerPage.waitApiCall(imgCall.beechDoor)
   await roomDoorViewerPage.takeDoorViewerScreenshot('fourthRoomWithBeechDoor.png')
});
doorPreviewFixture(`ID-5 : Upload new image`, async ({ roomDoorViewerPage, door, imgCall }) => {
   await roomDoorViewerPage.open()
   await roomDoorViewerPage.waitApiCall(imgCall.oakDoor)
   await roomDoorViewerPage.clickRoomImage(4)
   await roomDoorViewerPage.clickDoor(door.anthrazite)
   await roomDoorViewerPage.waitApiCall(imgCall.anthraziteDoor)
   await roomDoorViewerPage.takeDoorViewerScreenshot('fourthRoomWithAnthraziteDoor.png')
   await roomDoorViewerPage.clickDoor(door.beech)
   await roomDoorViewerPage.waitApiCall(imgCall.beechDoor)
   await roomDoorViewerPage.takeDoorViewerScreenshot('fourthRoomWithBeechDoor.png')
});

