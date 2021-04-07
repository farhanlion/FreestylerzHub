var freestylerstemplate = document.getElementById('freestylers-template').innerHTML;
var template = Handlebars.compile(freestylerstemplate);
// data comesfrom 'freestylers-data.js'
var html = template(freestylersdata);
document.getElementById('freestylers-list').innerHTML = html;



// get searchbar 
var search = document.querySelector('#inputname');

// get all names
var allnames = document.querySelectorAll('#name');

// get all freestyler cards
var freestylercards = document.querySelectorAll('.freestyler');

// get male checkbox
var malecheckbox = document.querySelector('#male-checkbox');

// get female checkbox
var femalecheckbox = document.querySelector('#female-checkbox');


// run filter() when typed a letter
search.addEventListener('keyup', filter);


function filter() {
    // filterout females
    filteroutFemales();
    // filterout males
    filteroutMales();
    // run search
    searchFunction();

    // if male checkbox not checked don't show males
    if (malecheckbox.classList.contains("active") == false) {
        var males = document.getElementsByClassName('m');
        for (i = 0; i < males.length; i++) {
            males[i].style.display = "none";
        }
    }

    // if female checkbox not checked don't show females
    if (femalecheckbox.classList.contains("active") == false) {
        var females = document.getElementsByClassName('f');
        for (i = 0; i < females.length; i++) {
            females[i].style.display = "none";
        }
    }
}

function searchFunction() {
    // get input from search bar
    var searchval = search.value;

    // loop through all names and check if typed text matches any one 
    for (i = 0; i < allnames.length; i++) {
        if (allnames[i].innerText.toLowerCase().replace(/ /g, '').replace(/é/g, 'e').indexOf(searchval) > -1) {
            // if matched, show
            freestylercards[i].style.display = "block";

        } else {
            // else don't show
            freestylercards[i].style.display = "none";
        }
    }
}

// attach function to malecheckbox
malecheckbox.addEventListener('click', maleclick);

function filteroutFemales() {
    // if malecheckbox is active, remove females
    if (malecheckbox.classList.contains("active")) {
        var females = document.getElementsByClassName('f');
        for (i = 0; i < females.length; i++) {
            females[i].style.display = "none"
        }
        // if female checkbox is active, show females
    } else if (femalecheckbox.classList.contains("active")) {
        var females = document.getElementsByClassName('f');
        for (i = 0; i < females.length; i++) {
            females[i].style.display = "block";
        }
    }
}

// attach function to femalecheckbox
femalecheckbox.addEventListener('click', femaleclick);

function filteroutMales() {
    // if femalecheckbox is active, remove males
    if (femalecheckbox.classList.contains("active")) {
        var males = document.getElementsByClassName('m');
        for (i = 0; i < males.length; i++) {
            males[i].style.display = "none";
        }
        // if malecheckbox is active, show males
    } else if (malecheckbox.classList.contains("active")) {
        var males = document.getElementsByClassName('m');
        for (i = 0; i < males.length; i++) {
            males[i].style.display = "block";
        }
    }
}

// add class active to malecheckbox
function maleclick() {
    malecheckbox.classList.toggle('active');
    filter();
}

// add class active to malecheckbox
function femaleclick() {
    femalecheckbox.classList.toggle('active');
    filter();
}

// run filter so al names are displayed
filter();


var i = 0;
var j = 0;
var target = document.getElementById('search-prompt');
window.onload = function() {
    // typewriter for title
    typeWriterTitle('Hall of Fame', 100);
    // typewriter for search prompt
    typeWriter('Search your favourite freestyler and discover more about them!', 0.1);
}