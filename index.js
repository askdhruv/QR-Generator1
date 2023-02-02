import fs from 'fs';
import inquirer from 'inquirer';
import qr from 'qr-image';

inquirer
  .prompt([
    /* Pass your questions in here */{
        name: "link",
        message: "What is the link",
        type: 'input'        
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.link;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("qr-image.png"));

    fs.writeFileSync("link.txt", url, (err) => {
    if(err)
        console.log(err);
    else    
        console.log("Success");
});


})

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

//Add React frontend