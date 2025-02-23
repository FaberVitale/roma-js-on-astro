import { test } from '@playwright/test';
import { expectH1, expectWellFormedPage } from './shared-e2e-tests';

test('event page is well formed', async ({ page }) => {
  await page.goto('/it/eventi/2025-02-15-romajs-special-edition');
  const lang = 'it';

  await Promise.all([
    expectWellFormedPage(page, lang, null),
    expectH1(page, /RomaJS Special Edition/),
  ]);
});
