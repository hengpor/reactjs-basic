# reactjs-basic
this repo is for basic code that start learning react js


need to install webpack and webpack-dev-server

npm install -S webpack //install locally
npm install -g webpack //install globally
npm install -g webpack-dev-server 

add to package.json

"scripts": {
    "dev": "webpack-dev-server --content-base src --inline --hot",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  
so you can run

npm run dev 

for short which is equivalent 

webpack-dev-server --content-base src --inline --hot

## Instruction to run
1. Navigation to reactjs-basic
2. *npm install*
3. *npm run dev*
4. navigate to location:8080
