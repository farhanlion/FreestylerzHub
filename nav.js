var code = ` <div class="nav-bar">
                <div class="nav-logo">
                <span class="sketch-highlight">
                    <a href="index.html">
                        <img src="icons/logo.png">
                    </a>
                    </span>
                </div>
                <div class="nav-items">
                    <div class="nav-item-links">
                        <a class="laptop-navbtn" href="competitions.html">
                            <div class="nav-btn"><span class="sketch-highlight">Competitions</span></div>
                        </a>
                        <a class="laptop-navbtn" href="skills.html">
                            <div class="nav-btn"><span class="sketch-highlight">Skills</span></div>
                        </a>
                        <a class="laptop-navbtn" href="freestylers.html">
                            <div class="nav-btn"><span class="sketch-highlight">Freestylers</span></div>
                        </a>
                        
                    </div>
                    <div class="icon checked">
                    <i class="fa fa-bars"></i>
                    </div>
                </div>
            </div>`



Handlebars.registerPartial('navbar', code);
var templatesrc = document.getElementById("nav").innerHTML;
var template = Handlebars.compile(templatesrc);
document.getElementById("nav-bar").innerHTML = template();

var menubar = document.querySelector(".icon")
var x = document.querySelector('.nav-item-links').querySelectorAll('a')

menubar.addEventListener('click', function toggleMenu() {
    if (menubar.classList[1] == "checked") {
        menubar.classList.toggle('checked');
        x[0].style.display = 'block'
        x[1].style.display = 'block'
        x[2].style.display = 'block'

    } else {
        menubar.classList.toggle('checked');
        x[0].style.display = 'none'
        x[1].style.display = 'none'
        x[2].style.display = 'none'
    }
})