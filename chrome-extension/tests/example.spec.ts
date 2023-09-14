import { test, expect } from '@playwright/test'

test('basic test', async ({ page }) => {
  await page.goto('http://google.com')
  const title = await page.title()
  expect(title).toBe('Google')
})
