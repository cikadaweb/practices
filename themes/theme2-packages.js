const {saturateUserInfo} = require('cikada-lib');

console.log(saturateUserInfo(
    {
        name: 'иван иванов',
        dateBirth: '10.11.1987',
        purpose: 'карьерный рост'
    }
));
