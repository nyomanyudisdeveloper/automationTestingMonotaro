import { Before, After } from "@wdio/cucumber-framework";
import {browser} from "@wdio/globals"

Before(async () => {
    await browser.url("https://www.monotaro.id")
})