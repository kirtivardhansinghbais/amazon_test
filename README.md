# Initial setup

# Install node and npm in your machine
# Run following command to install node_modules. 
npm i 

# Install codeceptjs with playwright helper in your machine
# Run following command to install codeceptjs with playwright helper.
npm install codeceptjs playwright --save-dev

# Provide the following data on the "loginAndAddProduct_test.ts" page to in "stepObject" run the test:
1. phoneNumberOrEmail: Please enter your email or phone number for Amazon account.
2. password: Please enter your password for Amazon acount.
3. userName: Please enter your Amazon account user name.

# Running the tests - with out steps
# Open the Test Runner using the following command.
npx codeceptjs run

# Running the tests - step by step
# Open the Test Runner using the following command.
npx codeceptjs run --steps

# Running the tests to see a more detailed output
# Open the Test Runner using the following command.
npx codeceptjs run --debug

# Running the tests to see very detailed output informations.
# Open the Test Runner using the following command.
npx codeceptjs run --verbose

# Running the tests in parallel mode by using multiple workers.
# Open the Test Runner using the following command.
npx codeceptjs run-workers 3