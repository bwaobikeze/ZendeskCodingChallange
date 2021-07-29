let axios = require('axios');

let config = {
  method: 'get',
  url: 'https://zccbrianwaobikeze.zendesk.com/api/v2/tickets.json',
  headers: { 
    'Authorization': 'Basic YnJpYW4ud2FvYmlrZXplQGdtYWlsLmNvbTpLaW5kYm95MjBA', 
    'Cookie': '__cfruid=c2d00345d80097a8018a3307ab6e5cc0abe6c1a2-1627511044'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
