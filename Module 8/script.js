let nick = "Sam";
let height = "5\'0\'\'";
let kgweight = "50";

weight = kgweight * 2.205;

alert("Name: " + nick + "\nHeight: " + height + "\nWeight: " + weight);


let ufname = prompt("Input your first name:");
let ulname = prompt("Input your last name: " );
let ubirthyear = prompt("What year were you born in?");

let uage = 2023 - ubirthyear;
let message = "Hello " +ufname+ " " +ulname+ "! How does it feel to be " +uage+ " years old?";

alert(message);

let oksba = confirm("Do you consent to sharing your personal information to the site?")

if(oksba){
    console.log(message);
    alert("Information has been shared to the console. Thank you!");
} else{
    console.log("User does not wish to share his/her information");
    alert("Information has not been shared to the console. Thank you!");
}
