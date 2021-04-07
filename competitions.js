var comptemplate = document.getElementById('competitions-template').innerHTML;
var template = Handlebars.compile(comptemplate);
// data comesfrom 'freestylers-data.js'
var html = template(competitionsdata);
document.getElementById('competitions-list').innerHTML = html;

// title typewriter
var i = 0
var j = 0
window.onload = function() {
    typeWriterTitle('Competitions', 100);
}