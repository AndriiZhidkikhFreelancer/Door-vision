import { RequestHolder } from "../requestHolder";


export class DoorManager extends RequestHolder {
  async getUserScenarios() {
    const payload = {
      operationName: "GetUserScenariosForAppUser",
      query: `
        query GetUserScenariosForAppUser {
          getAppUser {
            id
            getUserScenarios {
              ...UserScenario
              __typename
            }
            __typename
          }
        }
        
        fragment UserScenario on UserScenario {
          id
          shortId
          doorType
          customData
          lightPosition
          corners {
            index
            doorType
            topLeft {
              x
              y
              __typename
            }
            topRight {
              x
              y
              __typename
            }
            bottomLeft {
              x
              y
              __typename
            }
            bottomRight {
              x
              y
              __typename
            }
            __typename
          }
          lightSourceParameters {
            intensity
            location
            __typename
          }
          image {
            id
            url
            __typename
          }
          thumbnailImage {
            id
            url
            __typename
          }
          __typename
        }
      `,
      variables: {}
    }

    const response = await this.request.post('https://testautomation.test.door-vision.cloud/graphql', {
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://testautomation.test.door-vision.cloud/?s=USER_qpLxIx',
        'Origin': 'https://testautomation.test.door-vision.cloud',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'uk,ru;q=0.9,en-US;q=0.8,en;q=0.7,ru-RU;q=0.6',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
        'x-door-vision-app-user': '5Wbqg5',
        'x-door-vision-customer-key': 'testautomation',
        'x-door-vision-version': '32828d5e9d894fd0cab9b4244d6c92e34b7eaa13'
      },
      data: payload
    });

    return response.json();
  }
  async deleteUserScenarioForAppUser(id:string) {
    const payload = {
      operationName: "DeleteUserScenarioForAppUser",
      query: `
       mutation DeleteUserScenarioForAppUser($userScenarioId: String!) {
       deleteUserScenarioForAppUser(userScenarioShortId: $userScenarioId) {
      ...UserScenario
      __typename
    }
  }

  fragment UserScenario on UserScenario {
    id
    shortId
    doorType
    customData
    lightPosition
    corners {
      index
      doorType
      topLeft {
        x
        y
        __typename
      }
      topRight {
        x
        y
        __typename
      }
      bottomLeft {
        x
        y
        __typename
      }
      bottomRight {
        x
        y
        __typename
      }
      __typename
    }
    lightSourceParameters {
      intensity
      location
      __typename
    }
    image {
      id
      url
      __typename
    }
    thumbnailImage {
      id
      url
      __typename
    }
    __typename
  }
      `,
      variables: { userScenarioId: `${id}` }
    }
    const response = await this.request.post('https://testautomation.test.door-vision.cloud/graphql', {
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://testautomation.test.door-vision.cloud/?s=USER_qpLxIx',
        'Origin': 'https://testautomation.test.door-vision.cloud',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'uk,ru;q=0.9,en-US;q=0.8,en;q=0.7,ru-RU;q=0.6',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
        'x-door-vision-app-user': '5Wbqg5',
        'x-door-vision-customer-key': 'testautomation',
        'x-door-vision-version': '32828d5e9d894fd0cab9b4244d6c92e34b7eaa13'
      },
      data: payload
    });

    return response.json();
  }

}
