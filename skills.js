// get filter buttons

var basicskillsbtn = document.querySelector('#basic-skill-btn');
var advancedskillsbtn = document.querySelector('#advanced-skill-btn');

// basic btn click, 
basicskillsbtn.addEventListener("click", function() {
    if (advancedskillsbtn.classList.contains("active")) {
        // show basic skills
        document.querySelector('.basic-skills').style.display = "grid";
        // remove advanced skills
        document.querySelector('.advanced-skills').style.display = "none";
        // change class accordingly
        advancedskillsbtn.classList.toggle("active");
        basicskillsbtn.classList.toggle("active");
    }


});

// advanced btn click,
advancedskillsbtn.addEventListener("click", function() {
    if (basicskillsbtn.classList.contains("active")) {
        // show advanced skills
        document.querySelector('.advanced-skills').style.display = "grid";
        // remove basic skills
        document.querySelector('.basic-skills').style.display = "none";
        // change class accordingly
        advancedskillsbtn.classList.toggle("active");
        basicskillsbtn.classList.toggle("active");
    }


});

// handlebars
var skilltemplate = document.getElementById('skills-template').innerHTML
var template = Handlebars.compile(skilltemplate);
var html = template(skillsdata);
document.getElementById('skills').innerHTML = html;
// 



var i = 0;
var j = 0;
var skillsprompt = 'These are some of the several skills that are most consistently used by freestylers. However, there are no limits to how you can move with the ball. Express yourself in whatever way you wish!';
var target = document.getElementById('skills-prompt');
window.onload = function() {
    // typewriter for title
    typeWriterTitle('Skillz', 100);
    // typewriter for prompt
    typeWriter(skillsprompt, 0.2);
}