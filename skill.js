// get data from URL
var params = new URLSearchParams(window.location.search);
var cat = params.get('cat');
var skill = params.get('skill');

// search data from JSON
var skilldata = skillsdata["skill"][cat][skill];


// {
//     nickname: ...,
//     skillname: ...,
//     description: ... 
// }

// handlebars
var scripttag = document.getElementById('skill');
var nametemplate = scripttag.innerHTML;
var template = Handlebars.compile(nametemplate);

var html = template(skilldata);
scripttag.insertAdjacentHTML('afterend', html);
//