const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
rl.question(`Welcome to Your Zendesk Ticket Viewer Please Press 1 to Move foward: `, choice => {
    if (choice == 1){
        listTotaltickets();
    }else
    console.log("sorry see you again");
    rl.close()
  });


// axios.get('https://zccbrianwaobikeze.zendesk.com/api/v2/tickets.json').then(result => console.log(result.data)).catch(err => console.log(err))
// listTotaltickets();

function listTotaltickets(){
axios.get('https://zccbrianwaobikeze.zendesk.com/api/v2/tickets.json/', {
  headers: {
    'Authorization': 'Basic YnJpYW4ud2FvYmlrZXplQGdtYWlsLmNvbTpLaW5kYm95MjBA', 
    'Cookie': '__cfruid=c2d00345d80097a8018a3307ab6e5cc0abe6c1a2-1627511044'
  }
})
.then((res) => {
  console.log(res.data)
})
.then((ticketChoice) =>{
    rl.question(`Whitch ticket do you want view: `, ticketChoice => {

        showingTicket(ticketChoice);
        rl.close()
    });
})
.catch((error) => {
  console.error(error)
})


}
// showingTicket(100);

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
