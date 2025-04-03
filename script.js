// Global Variables/Constants

// Utility Functions

function mainmenuutil(text, image, functionx, mdiv){
    const tempdiv = document.createElement('div');
    const tempa = document.createElement('a');
    tempa.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        functionx();
    });

    const temptext = document.createElement('p');
    temptext.textContent = text;

    const tempimage=document.createElement('img');
    tempimage.src= image;

    tempa.appendChild(tempimage);
    tempa.appendChild(temptext);
    tempdiv.appendChild(tempa);

    mdiv.appendChild(tempdiv);
}

// Main Functions

document.addEventListener("DOMContentLoaded", function() {
    console.log("Base website loaded!");
});

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}

function gotomainmenu(){
    const main = document.getElementById('mainContent');

    const menudiv = document.createElement('div');
    menudiv.classList.add('main-menu');

    const maindiv = document.createElement('div');
    maindiv.classList.add('main-block');

    const emptydiv1 = document.createElement('div');
    const emptydiv2 = document.createElement('div');
    
    maindiv.appendChild(emptydiv1);
    mainmenuutil('Kings', 'king_of_nothing.png', gotomainmenu, maindiv);
    mainmenuutil('Cards', 'demons_altar.png', gotomainmenu, maindiv);
    mainmenuutil('Synergies', 'shaman_blacksmith.png', gotomainmenu, maindiv);
    maindiv.appendChild(emptydiv2);
    menudiv.appendChild(maindiv);
    main.appendChild(menudiv);
}

gotomainmenu();