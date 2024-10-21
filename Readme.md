# Automation Testing Monotaro with Webdriver.io Typescript.
This project is automation testing on [website](https://www.monotaro.id). This project purpose is to fullfill my take home test and show my skill to create automation testing website with webdriver.io and typescript. In this project, it handle 2 test case: 
- register account as individual 
- checkout product (including login)

## Additional Information
- In test case register account, because there is no feature to delete account, so i create function to generate random email to prevent test case failed after running multiple times. 
- In test case register account, i found unexplained bug that if i fill form register too fast and click button register, nothing happened. So i need to browser pause in process fill form register. 

### Method Used
- Behavior-driven development (BDD)
- Page Object Model
- Web UI Automation
- Reporting

### Technologies
- Typescript
- Webdriver.io
- Cucumber
- Allure

## Alure 
To run report on this project, try to install this on terminal
```
npm install -g allure-commandline --save-dev
```


## Getting Started / Setup Basic
- Clone this repo by using git clone or download it with zip
- Open terminal and go to filepath folder this project
- run "npm install"

## How to use this project
- Open terminal and go to filepath folder this project
- run "npm run wdio" on terminal to start web ui automation to testing scenario in folder test/features
- run "npm run buildReport" on terminal to build report with framework allure
- run "npm run runReport" on terminal to see report testing result via browser

## Example allure report 
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/1d058220-6bb4-4b18-826d-14f1d9914cff">

