import { RequestHolder } from "../requestHolder";


export class AdminDoorManagerController extends RequestHolder {
  async getVisualDoorsListPaginated(page: number = 1, pageSize: number = 20, doorType: string = "SINGLE") {
    const payload = {
      operationName: "GetVisualDoorsListPaginated",
      query: `
        query GetVisualDoorsListPaginated($page: Int, $pageSize: Int, $filter: VisualDoorsPaginationFilter) {
          getVisualDoorsPaginated(
            pagination: {pageSize: $pageSize, page: $page, mode: PAGE}
            filter: $filter
          ) {
            pageInfo {
              page
              pageSize
              totalPages
              totalResults
              __typename
            }
            results {
              id
              name
              price {
                value
                currency
                __typename
              }
              order
              enabled
              externalIds
              doorType
              thumbnail {
                url
                __typename
              }
              __typename
            }
            __typename
          }
        }
      `,
      variables: {
        page,
        pageSize,
        filter: {
          customerKey: "testautomation",
          enabled: true,
          doorType
        }
      }
    };
  
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
  
  async deleteVisualDoor(id: string) {
    const payload = {
      operationName: "deleteVisualDoorInShowVisualDoors",
      query: `
        mutation deleteVisualDoorInShowVisualDoors($id: String!) {
          deleteVisualDoor(id: $id)
        }
      `,
      variables: { id: `${id}` }
    };
  
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
