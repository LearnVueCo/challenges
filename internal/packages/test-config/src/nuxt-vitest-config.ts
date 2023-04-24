import { defineVitestConfig } from 'nuxt-vitest/config'

export const nuxtConfig = defineVitestConfig({
  test: {
    environment: 'nuxt',
    globals: true,
    dir: 'tests',
    silent: true,
    reporters: ['json'],
    outputFile: 'tests/results.json'
  }
})
