const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
// rl.question(`Welcome to Your Zendesk Ticket Viewer Please Press 1 to Move foward: `, choice => {
//     if (choice == 1){
//         listTotaltickets();
//     }else
//     console.log("sorry see you again");
//     rl.close()
//   });


// axios.get('https://zccbrianwaobikeze.zendesk.com/api/v2/tickets.json').then(result => console.log(result.data)).catch(err => console.log(err))
// listTotaltickets();




// in this function loop list of tickets 25 on each page
// give option to next page 

listTotaltickets();

async function listTotaltickets(){


    try {
        let apiCal = await axios.get('https://zccbrianwaobikeze.zendesk.com/api/v2/tickets.json?page[size]=25', {
              headers: {
                'Authorization': 'Basic YnJpYW4ud2FvYmlrZXplQGdtYWlsLmNvbTpLaW5kYm95MjBA', 
                'Cookie': '__cfruid=c2d00345d80097a8018a3307ab6e5cc0abe6c1a2-1627511044'
              }});
        console.log(apiCal.data);
        pageDececion();
    } catch (error) {
        console.log(error.message)
    }


}

//ageDececion();

function pageDececion(){
    rl.question(`Would you like to turn the next page?\n Press 1 To Continue\n Press 2 To Move Back To Prev: \n  `, choice => {


       if(choice=="1"){


        //console.log("hello i am reaD")
        axios.get('https://zccbrianwaobikeze.zendesk.com/api/v2/tickets.json?page[size]=25&page[after]=eyJvIjoibmljZV9pZCIsInYiOiJhUmtBQUFBQUFBQUEifQ==', {
              headers: {
                'Authorization': 'Basic YnJpYW4ud2FvYmlrZXplQGdtYWlsLmNvbTpLaW5kYm95MjBA', 
                'Cookie': '__cfruid=c2d00345d80097a8018a3307ab6e5cc0abe6c1a2-1627511044'
              }
            })
            .then((res) => {
              console.log(res.data)
            })
            
            .then()
            .catch((error) => {
              console.error(error)
            })
        }
        rl.close()
      });

}



// This function shows details for a specfic ticket chosen
// function showingTicket(ticketId){

//     axios.get(`https://zccbrianwaobikeze.zendesk.com/api/v2/tickets/${ticketId}.json`, {
//         headers: {
//           'Authorization': 'Basic YnJpYW4ud2FvYmlrZXplQGdtYWlsLmNvbTpLaW5kYm95MjBA', 
//           'Cookie': '__cfruid=c2d00345d80097a8018a3307ab6e5cc0abe6c1a2-1627511044'
//         }
//       })
//       .then((res) => {
//         console.log(res.data)
//       })
//       .catch((error) => {
//         console.error(error)
//       })
      

//  }
