const readline = require('readline');
const axios = require('axios');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });



function pageDececion(){
    rl.setPrompt('Would you like to turn the next page?\n Press 1 To Continue\n Press 2 To Move Back To Prev:\n');
    rl.prompt();
    rl.on('line',(secondChoice)=>{
        if(secondChoice== 1){
            console.log("hello");
        }
        rl.close();
    })

    }

    

    exports.pageDececion = pageDececion;