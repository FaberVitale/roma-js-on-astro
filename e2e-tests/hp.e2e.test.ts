import { test, expect } from '@playwright/test';
import {
  expectCanonical,
  expectH1,
  expectWellFormedPage,
} from './shared-e2e-tests';

const urlMap = {
  it: '/',
  en: '/en',
};

test('italian HP is well formed', async ({ page }) => {
  await page.goto('./');
  const lang = 'it';

  await Promise.all([
    expectWellFormedPage(page, lang, urlMap),
    expect(page).toHaveTitle(/La tech community di Javascript su Roma/i),
    expectH1(page, /La tech community di Javascript su Roma/i),
  ]);
});

test('italian HP fallback page has valid canonical', async ({ page }) => {
  await page.goto('./it');
  const lang = 'it';

  await Promise.all([
    expectWellFormedPage(page, lang, null),
    expectCanonical(page, 'https://romajs.org'),
    expect(page).toHaveTitle(/La tech community di Javascript su Roma/i),
    expectH1(page, /La tech community di Javascript su Roma/i),
  ]);
});

test('english HP is well formed', async ({ page }) => {
  await page.goto('./en');
  const lang = 'en';

  await Promise.all([
    expectWellFormedPage(page, lang, urlMap),
    expect(page).toHaveTitle(/The Javascript community in Rome/i),
    expectH1(page, /The Javascript community in Rome/i),
  ]);
});
