const axios = require('axios');




axios.get("https://jsonplaceholder.typicode.com/users").then(result => console.log(result.data)).catch(err => console.log(err))



