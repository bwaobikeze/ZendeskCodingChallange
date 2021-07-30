const axios = require('axios');
const prompt = require('prompt-sync')({sigint: true});

// startRequest();

// function startRequest(){
//     let menuDes = prompt('Welcome To Your ticket viewer Please select 1 to view your ticket: ');

//     switch(menuDes){
//     case 1:
//     listTotaltickets();
//     break;
//     case 2:
//     console.log('See you soon');
//     break;
//     }

    
// }

//axios.get('https://zccbrianwaobikeze.zendesk.com/api/v2/tickets.json').then(result => console.log(result.data)).catch(err => console.log(err))
//listTotaltickets();

// function listTotaltickets(){
// axios.get('https://zccbrianwaobikeze.zendesk.com/api/v2/tickets.json/', {
//   headers: {
//     'Authorization': 'Basic YnJpYW4ud2FvYmlrZXplQGdtYWlsLmNvbTpLaW5kYm95MjBA', 
//     'Cookie': '__cfruid=c2d00345d80097a8018a3307ab6e5cc0abe6c1a2-1627511044'
//   }
// })
// .then((res) => {
//   console.log(res.data)
// })
// .catch((error) => {
//   console.error(error)
// })


//}
showingTicket(100);

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
