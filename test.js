const jwt = require('jsonwebtoken')

const user = {
    name: 'Min',
    id: '1234566',
    role: 'admin'
}
const secret = '12345678';

const token = jwt.sign(user, secret, {expiresIn: 60});

// const payload = jwt.verify(
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWluIiwiaWQiOiIxMjM0NTY2Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjE1ODIxMDYzLCJleHAiOjE2MTU4MjExMjN9.bte8IfjeLU2xcHrngJYWGPVWDYWLH8ke29VVk_ZYLpU",
//     secret
// );

console.log(token);
// console.log(payload);

