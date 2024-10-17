import { test as base } from '@playwright/test';
import { OverviewPage, VisualDoorsPage } from '../app';

// Declare the types of your fixtures.
type MyFixtures = {
  overviewPage:OverviewPage,
  visualDoorsPage:VisualDoorsPage,
};

// Extend base test by providing "signIn" 
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const adminFixture = base.extend<MyFixtures>({
  overviewPage: async ({ page }, use) => {
    const overviewPage = new OverviewPage(page)
    await use(overviewPage)
  },
  visualDoorsPage: async ({ page }, use) => {
    const visualDoorsPage = new VisualDoorsPage(page)
    await use(visualDoorsPage)
  },
});
export { expect } from '@playwright/test';
