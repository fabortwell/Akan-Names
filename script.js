function submitForm(event) {
event.preventDefault();
var date =documents. form[
    "akanForm"
]["birthday"]. value;
var gender =documents.forms[
    "akanForm"
]["gender"].value;
var akanName= "";
}
var femaleNames =[
    'Akosua',
    'Adwoa',
    'Abenaa',
    'Akua',
    'Yaa',
    'Afua',
    'Ama',
];


var maleNames =[
'Akosua',
'Kwadwo',
'Kwabena',
'Kwaku',
'Yaw',
'Kofi',
'Kwame',
];

var dateObject = new Date(date);
var day = dateObject.getDay();

if (day !=null && gender != null) {
    if(gender === 'male' ){
        akanName = maleNames[day];
    }

    
    else{

        akanName = femaleNames[day];
    }
}


document.getElementById('akanName').addEventListener('click', function (event){
    event.preventDefault();
    submitForm();

});

    

  

