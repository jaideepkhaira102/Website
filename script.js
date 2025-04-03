// Global Variables/Constants

var state = 'no-state';

// Utility Functions

function creatorutil(text, image, functionx, mdiv){
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
    remover();
    state = 'main-menu';
    const main = document.getElementById('mainContent');

    const menudiv = document.createElement('div');
    menudiv.id = 'main-outer';

    const maindiv = document.createElement('div');
    maindiv.id = 'main-inner';

    const emptydiv1 = document.createElement('div');
    const emptydiv2 = document.createElement('div');
    
    maindiv.appendChild(emptydiv1);
    creatorutil('Kings', 'pictures/king_of_nothing.png', gotokings, maindiv);
    creatorutil('Cards', 'pictures/buildings/demons_altar.png', gotomainmenu, maindiv);
    creatorutil('Synergies', 'pictures/shaman_blacksmith.png', gotomainmenu, maindiv);


    maindiv.appendChild(emptydiv2);
    menudiv.appendChild(maindiv);
    main.appendChild(menudiv);
}

function gotokings(){
    remover();
    state = 'kings';
    const main = document.getElementById('mainContent');

    const menudiv = document.createElement('div');
    menudiv.id = 'main-outer';

    const maindiv = document.createElement('div');
    maindiv.id = 'main-inner-small';

    const emptydiv1 = document.createElement('div');
    const emptydiv2 = document.createElement('div');
    
    maindiv.appendChild(emptydiv1);
    creatorutil('King of Nothing', 'pictures/king_of_nothing.png', gotomainmenu, maindiv);
    creatorutil('King of Spells', 'pictures/king_of_spells.png', gotomainmenu, maindiv);
    creatorutil('King of Blood', 'pictures/king_of_blood.png', gotomainmenu, maindiv);
    creatorutil('King of Greed', 'pictures/king_of_greed.png', gotomainmenu, maindiv);
    maindiv.appendChild(emptydiv2);
    menudiv.appendChild(maindiv);
    main.appendChild(menudiv);
}


function remover(parent, child){
    if(state == 'no-state'){
        console.log('Nothing to remove at the start');
    }
    else if(state == 'main-menu'){
        const parent = document.getElementById('mainContent');
        const child = document.getElementById('main-outer');
        parent.removeChild(child);
    }
    else{
        const parent = document.getElementById('mainContent');
        const child = document.getElementById('main-outer');
        parent.removeChild(child);
    }
}

gotomainmenu();