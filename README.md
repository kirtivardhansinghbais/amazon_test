# Initial setup

# Install node and npm in your machine
# Run following command to install node_modules. 
npm i 

# Install codeceptjs with playwright helper in your machine
# Run following command to codeceptjs with playwright helper.
npm install codeceptjs playwright --save-dev

# Running the tests - step by step
# Open the Test Runner using the following command.
npx codeceptjs run --steps

# Running the tests - with out steps
# Open the Test Runner using the following command.
npx codeceptjs run

# Note: Please provide the following on the "loginAndAddProduct_test.ts" page to run the test:
1. phoneNumberOrEmail
2. password
3. userName