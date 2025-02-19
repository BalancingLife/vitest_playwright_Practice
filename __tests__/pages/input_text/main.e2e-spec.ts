import {test, expect} from '@playwright/test'


test.describe("input-text", () => {
    test.describe("input-test-labeled", () => {
        const pageUrl = "/input/text"

        test(("if page loading, show 값1: "),async ({page}) => {
            await page.goto(pageUrl);

            await expect(page.getByText("값1: ", { exact: true })).toBeVisible();
        })

        test(("if input===Next.js, show 값1: Next.js"),async ({page}) => {
            const text = 'Next.js'

            await page.goto(pageUrl);
            await page.getByLabel('라벨').fill(text);

            await expect(page.getByText(`값1: ${text}`)).toBeVisible();
        })
    })

    test.describe("input-test-placeholder", () => {
        const pageUrl = "/input/text"

        test(("if page loading, show 값2: "),async ({page}) => {
            await page.goto(pageUrl);

            await expect(page.getByText("값2: ", { exact: true })).toBeVisible();
        })

        test(("if input===playwright, show 값2: playwright"),async ({page}) => {
            const text = 'playwright'

            await page.goto(pageUrl);
            await page.getByPlaceholder('값을 입력해주세요').fill(text);

            await expect(page.getByText(`값2: ${text}`)).toBeVisible();
        })
    })

    test.describe("input-test-content-editable", () => {
        const pageUrl = "/input/text"

        test(("if page loading, show 값3: "),async ({page}) => {
            await page.goto(pageUrl);

            await expect(page.getByText("값3: ", { exact: true })).toBeVisible();
        })

        test(("if input===playwright, show 값3: playwright"),async ({page}) => {
            const text = 'Tdd'

            await page.goto(pageUrl);
            await page.getByLabel('main').fill(text);

            await expect(page.getByText(`값3: ${text}`)).toBeVisible();
        })
    })
})