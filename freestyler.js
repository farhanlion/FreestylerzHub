//get data from url 
var params = new URLSearchParams(window.location.search);
var person = params.get('person');
var persondata = freestylersdata["freestylers"][person];

// {gautierfayolle: {...}}

var scripttag = document.getElementById('person');
var nametemplate = scripttag.innerHTML;
var template = Handlebars.compile(nametemplate);

var html = template(persondata);
scripttag.insertAdjacentHTML('afterend', html);


// back link 
var params = new URLSearchParams(window.location.search);
var address = params.get('from');

document.getElementById('backlink').href = address;

// typewriter title
var i = 0;
var j = 0;

window.onload = function() {
    typeWriterTitle(persondata.name, 100);
}