const readline = require("readline");
const axios = require("axios");
const prompt = require("prompt-sync")({ sigint: true });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function pageDececion() {
  let choice = prompt(
    "Would you like to turn the next page?\n Press 1 To Continue\n Press 2 To Move Back To Prev:\n "
  );

  if (choice == 1) {
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
      })
      .catch((error) => {
        console.error(error);
      });
  }
  //   rl.setPrompt(
  //     "Would you like to turn the next page?\n Press 1 To Continue\n Press 2 To Move Back To Prev:\n"
  //   );
  //   rl.prompt();
  //   rl.on("line", (secondChoice) => {
  //     if (secondChoice == 1) {
  //       console.log("hello");
  //     }
  //   });
}

exports.pageDececion = pageDececion;
