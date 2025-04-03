console.log("Navbar loaded!");
var numberofsections = 3;
const sections = ["Main Menu", "About", "Contact" ];
document.addEventListener("DOMContentLoaded", function() {
    // Create Navbar HTML as a string
    
    var navbarHTML = `
        <nav class="navbar">
            <div class="logo">9 Kings</div>
            <button class="menu-toggle" onclick="toggleMenu()">☰</button>
            <ul class="nav-links">` ;

    // Inject Navbar into the page
    for(var i=0; i<numberofsections; i++){
        var navbarHTML = navbarHTML+`<li><a href="#`+sections[i]+`">`+sections[i]+`</a></li>`
    };
    var navbarHTML = navbarHTML+`
            </ul>
        </nav>
    `;
    document.getElementById("navbar-container").innerHTML = navbarHTML;
});



function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// add this to html where u want the navbar - 
// <div id="navbar-container"></div>
