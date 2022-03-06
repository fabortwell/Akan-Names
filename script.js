function akanNames() {
var day = parseInt(document.getElementById("y").value);
var day = parseInt(document.getElementById("m").value);
var day = parseInt(document.getElementById("d").value);


var male = document.getElementById("male");
var female = document.getElementById("female");
var display = document.getElementById("display");

var dateOfTheWeek = new Date(year + "/" + Month + "/" + day);
var result = dateOfTheWeek.getDay();
alert(result);

var daysOfWeek = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

if (year <2022 && year >1900) {
    if (month <13 && month > 0){
        if (day <32 && day > 0) {
            if (male.checked) {
                alert("Your Akan name is " + maleNames[result]+" and born on "+daysOfWeek[result]);
            }else if (female.checked) {
                alert("Your Akan name is " + femaleNames[result]+" and born on "+daysOfWeek[result]);
            } else {
                alert("choose the right gender option");
            }
        } else {
            alert("kindly enter the right day");
        }

    } else {
        alert("you have entered the wrong month");
    }

} else {
    alert(" kindly enter the right year");
}
        }
    
