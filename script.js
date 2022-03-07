function submitForm(event) {
event.prventDefault();
var dat =documents. form[
    "akanform"
]["birthday"]. value;
var gender =documents.forms[
    "akanForm"
]["gender"].value;
var akanName= "";
]

var femaleNames =[
    'Akosua',
    'Adwoa',
    'Abenaa',
    'Akua',
    'Yaa',
    'Afua',
    'Ama',
];
var MaleNames =[
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


document.getElementById(
    'akanName').innerHTML = akanName;
)
