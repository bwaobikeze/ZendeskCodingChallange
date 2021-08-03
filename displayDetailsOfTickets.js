
const axios = require('axios');
const prompt = require("prompt-sync")({ sigint: true });

// This function shows details for a specfic ticket chosen
function showingTicket(ticketId){


    axios.get(`https://zccbrianwaobikeze.zendesk.com/api/v2/tickets/${ticketId}.json`, {
        headers: {
          'Authorization': 'Basic YnJpYW4ud2FvYmlrZXplQGdtYWlsLmNvbTpLaW5kYm95MjBA', 
          'Cookie': '__cfruid=c2d00345d80097a8018a3307ab6e5cc0abe6c1a2-1627511044'
        }
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
      

 }


 exports.showingTicket = showingTicket;