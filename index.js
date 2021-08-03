const axios = require("axios");
const prompt = require("prompt-sync")({ sigint: true });
const pageTurn = require("./pageChoice");



BeginPro();

function BeginPro() {
  let choice = prompt(
    "Welcome to Your Zendesk Ticket Viewer Please Press 1 to Move foward:  "
  );

  if (choice == 1) {
    listTotaltickets();
  } else console.log(choice);
}


// in this function loop list of tickets 25 on each page
// give option to next page

async function listTotaltickets() {
  try {
    let apiCal = await axios.get(
      "https://zccbrianwaobikeze.zendesk.com/api/v2/tickets.json?page[size]=25",
      {
        headers: {
          Authorization:
            "Basic YnJpYW4ud2FvYmlrZXplQGdtYWlsLmNvbTpLaW5kYm95MjBA",
          Cookie:
            "__cfruid=c2d00345d80097a8018a3307ab6e5cc0abe6c1a2-1627511044",
        },
      }
    );
    console.log(apiCal.data);
    pageTurn.pageDececion();
  } catch (error) {
    console.log(error.message);
  }
}
