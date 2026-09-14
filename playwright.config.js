// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({

    testDir: './tests',

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 1 : undefined,

    reporter: 'html',

    use: {
        baseURL: process.env.BASE_URL,

        trace: 'on-first-retry',
    },

    projects: [

        // Authentication setup
        {
            name: 'setup',

            testMatch: /.*\.setup\.js/
        },

        // Login tests
        {
            name: 'login',

            testMatch: /loginTest\.spec\.js/,

            use: {
                ...devices['Desktop Chrome']
            }
        },

        // Tests that require login
        {
            name: 'chromium',

            testIgnore: /loginTest\.spec\.js/,

            use: {
                ...devices['Desktop Chrome'],

                storageState: 'playwright/.auth/user.json'
            },

            dependencies: ['setup']
        }
    ]
});