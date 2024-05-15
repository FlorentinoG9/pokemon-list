import { test, expect } from '@playwright/test'

test('visit homepage', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Pokedex/)
})

test('should have pokemon list', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByTestId('pokemon-list')).not.toBeEmpty()
  await expect(page.getByTestId('pokemon-card')).toHaveCount(151)
})

test('should have search input', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByTestId('search-input')).toBeEmpty()
  await expect(page.getByTestId('search-input')).toHaveAttribute('placeholder', 'pikachu, charizard, mew, ...')

  await page.getByTestId('search-input').fill('pikachu')
  await expect(page.getByTestId('search-input')).toHaveValue('pikachu')
})

test('should search for a pokemon', async ({ page }) => {
  await page.goto('/')

  await page.getByTestId('search-input').fill('pikachu')
  await expect(page.getByTestId('pokemon-card')).toHaveCount(1)
  await expect(page.getByTestId('pokemon-card')).toContainText('pikachu')

  await page.getByTestId('search-input').fill('char')
  await expect(page.getByTestId('pokemon-card')).toHaveCount(3)
})

test('should navigate to a pokemon', async ({ page }) => {
  await page.goto('/')

  await page.getByTestId('pokemon-card').first().click()
  await expect(page).toHaveTitle(/bulbasaur/)
})

test('should have pokemon details', async ({ page }) => {
  await page.goto('/bulbasaur')

  await expect(page.getByTestId('pokemon-name')).toContainText('bulbasaur')
  await expect(page.getByTestId('pokemon-details')).not.toBeEmpty()
  await expect(page.getByTestId('pokemon-stats')).not.toBeEmpty()
  await expect(page.getByTestId('stat-bar')).toHaveCount(6)
  await expect(page.getByTestId('pokemon-evolutions')).not.toBeEmpty()
})
