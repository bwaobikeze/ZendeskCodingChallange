const readline = require("readline");
const axios = require("axios");
const prompt = require("prompt-sync")({ sigint: true });
const DT = require("./displayDetailsOfTickets.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function pageDececion() {
  let choice = prompt(
    "Would you like to turn the next page? "
  );
  if (choice == 'yes') {
    
      let choiceTwo= prompt('Select 1 to continue or Select 2 to go back: ');
      if(choiceTwo==1){
        axios
      .get(
        "https://zccbrianwaobikeze.zendesk.com/api/v2/tickets.json?page[size]=25&page[after]=eyJvIjoibmljZV9pZCIsInYiOiJhUmtBQUFBQUFBQUEifQ==",
        {
          headers: {
            Authorization:
              "Basic YnJpYW4ud2FvYmlrZXplQGdtYWlsLmNvbTpLaW5kYm95MjBA",
            Cookie:
              "__cfruid=c2d00345d80097a8018a3307ab6e5cc0abe6c1a2-1627511044",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        pageDececion();
      })
      .catch((error) => {
        console.error(error);
      });

      }
      // else if (choiceTwo== 2){
      //   axios
      //   .get(
      //     "https://zccbrianwaobikeze.zendesk.com/api/v2/tickets.json?page[size]=25&page[before]=eyJvIjoibmljZV9pZCIsInYiOiJhUm9BQUFBQUFBQUEifQ==",
      //     {
      //       headers: {
      //         Authorization:
      //           "Basic YnJpYW4ud2FvYmlrZXplQGdtYWlsLmNvbTpLaW5kYm95MjBA",
      //         Cookie:
      //           "__cfruid=c2d00345d80097a8018a3307ab6e5cc0abe6c1a2-1627511044",
      //       },
      //     }
      //   )
      //   .then((res) => {
      //     console.log(res.data);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });


      // }

  
 

    }
    // else if (choice=='no'){

    // DT.showingTicket();
    //}


  }
    
 
 
 
 

  

exports.pageDececion = pageDececion;
