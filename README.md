# OCBC Simple Login Page
A simple Banking dashboard which displays transactions and a simple transfer to payee page , can only be accessing through credentials.

This project is built with Create React App with TypeScript and UI Framework is Materil UI.

## Dependencies
ReactJS
MaterialUI
Axios
emotions
styled-component

## 5 APIs have been added  with Unit test:
1. authenticate/login - User is able to login
2. account/balances - User is able to see the balances  in the account
3. account/transactions - User is able to see the transactions in the account
4. account/payees - User is able to retrieve his/her list of payees
5. transfer - User is able to make a transfer
6. Unit Test - Unit test set to all components and pages


### As per the Instruction
1. Authenticated the user and retrieve the jwt token via "/authenticate/login"
   ```
   username: ocbc
   password: 123456
   ```
2. In the subsequence apis call, passed the token into the header.
   ```
   Content-Type: "application/json"
   Accept: "application/json"
   Authorization: {{the-token}}
   ```
   
### UI - Demo Screenshots

![01 - Landing](https://raw.githubusercontent.com/send2alamelu/banking-react-app-ts/master/screenshots/login.png)
![02 - Dashboard](https://raw.githubusercontent.com/send2alamelu/banking-react-app-ts/master/screenshots/dashboard.png)
![03 - Transaction](https://github.com/send2alamelu/banking-react-app-ts/blob/master/screenshots/transaction3.png)
![04 - Payee](https://github.com/send2alamelu/banking-react-app-ts/blob/master/screenshots/transaction3.png)
![05 - Calender](https://github.com/send2alamelu/banking-react-app-ts/blob/master/screenshots/transaction3.png)
