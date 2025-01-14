/* eslint-disable */
// import "bootstrap";
// import "./style.css";

const { LibManifestPlugin } = require("webpack");

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

let pronoun = ["the", "our", "ella"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".es", ".mx"];
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let m = 0; m < ext.length; m++) {
        //if(noun.endsWith(endPosition(1)))
         console.log(pronoun[i] + adj[j] + noun[k] + ext[m]);
        ;
      }
    }
  }
}
