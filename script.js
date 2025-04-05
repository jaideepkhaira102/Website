// Global Variables/Constants

var state = 'no-state';

const kings = [
    { id: 1, name: "King of Nothing", image: "pictures/king_of_nothing.png" , link: gotokingsdescription, tagname: "king_of_nothing",
        description: "<br>King of Nothing is a versatile and well-rounded monarch, with its core strengths revolving around the Archer, Knight, and Farms. Most strategies for this king involve either troop recruitment via Farms or relying heavily on high-impact troops like Archers and Knights to carry battles. <br><br> Other cards like Soldier, Blacksmith, and Steel Coat provide a reliable secondary lineup. The Wild Card plays a pivotal role as a flexible utility tool, acting as a weaker but valuable alternative to Clone, especially since the king with Clone card has yet to be released. <br><br> While the Scout Tower offers decent damage, it tends to be the least impactful option in this deck due to its limited scaling and synergy. <br><br> Overall, King of Nothing is a strong and adaptable choice, particularly when built around Archers and enhanced by Wild Cards, which often become the backbone of its most successful strategies." },
    { id: 2, name: "King of Spells", image: "pictures/king_of_spells.png" , link: gotokingsdescription, tagname: "king_of_spells", 
        description: "bla bla bla bla" },
    { id: 3, name: "King of Blood", image: "pictures/king_of_blood.png" , link: gotokingsdescription, tagname: "king_of_blood", 
        description: "bla bla bla bla" },
    { id: 4, name: "King of Greed", image: "pictures/king_of_greed.png" , link: gotokingsdescription, tagname: "king_of_greed", 
        description: "bla bla bla bla" },
    { id: 5, name: "Coming Soon", image: "pictures/kings_coming_soon_1.png" , link: gotomainmenu, tagname: "king_of_nothing"},
    { id: 6, name: "Coming Soon", image: "pictures/kings_coming_soon_2.png" , link: gotomainmenu, tagname: "king_of_nothing"},
    { id: 7, name: "Coming Soon", image: "pictures/kings_coming_soon_3.png" , link: gotomainmenu, tagname: "king_of_nothing"},
    { id: 8, name: "Coming Soon", image: "pictures/kings_coming_soon_4.png" , link: gotomainmenu, tagname: "king_of_nothing"},
]

const cards = [
    { id: 1, name: "Castle", image: "pictures/bases/castle.png" , link: gotocardsdescription , tags: ["king_of_nothing", "base"], 
        description: "bla bla bla bla" },
    { id: 2, name: "Citadel", image: "pictures/bases/citadel.png" , link: gotomainmenu , tags: ["king_of_spells", "base"] , 
        description: "bla bla bla bla" },
    { id: 3, name: "Palace", image: "pictures/bases/palace.png" , link: gotomainmenu , tags: ["king_of_greed", "base"] , 
        description: "bla bla bla bla" },
    { id: 4, name: "Ziggurat", image: "pictures/bases/ziggurat.png" , link: gotomainmenu , tags: ["king_of_blood", "base"] , 
        description: "bla bla bla bla" },
    { id: 5, name: "Blacksmith", image: "pictures/buildings/blacksmith.png" , link: gotomainmenu , tags: ["king_of_nothing", "building"] },
    { id: 6, name: "Cemetry", image: "pictures/buildings/cemetry.png" , link: gotomainmenu , tags: ["king_of_blood", "building"] },
    { id: 7, name: "Demons Altar", image: "pictures/buildings/demons_altar.png" , link: gotomainmenu , tags: ["king_of_blood", "building"] },
    { id: 8, name: "Farm", image: "pictures/buildings/farm.png" , link: gotomainmenu , tags: ["king_of_nothing", "building"] },
    { id: 9, name: "Library", image: "pictures/buildings/library.png" , link: gotomainmenu , tags: ["king_of_spells", "building"] },
    { id: 10, name: "Vault", image: "pictures/buildings/vault.png" , link: gotomainmenu , tags: ["king_of_greed", "building"] },
    { id: 11, name: "Carnage", image: "pictures/enchantments/carnage.png" , link: gotomainmenu , tags: ["king_of_blood", "enchantments"] },
    { id: 12, name: "Combustion", image: "pictures/enchantments/combustion.png" , link: gotomainmenu , tags: ["king_of_spells", "enchantments"] },
    { id: 13, name: "Midas Touch", image: "pictures/enchantments/midas_touch.png" , link: gotomainmenu , tags: ["king_of_greed", "enchantments"] },
    { id: 14, name: "Static", image: "pictures/enchantments/static.png" , link: gotomainmenu , tags: ["king_of_spells", "enchantments"] },
    { id: 15, name: "Steel Coat", image: "pictures/enchantments/steel_coat.png" , link: gotomainmenu , tags: ["king_of_nothing", "enchantments"] },
    { id: 16, name: "Vampirism", image: "pictures/enchantments/vampirism.png" , link: gotomainmenu , tags: ["king_of_blood", "enchantments"] },
    { id: 17, name: "Mortgage", image: "pictures/tomes/mortgage.png" , link: gotomainmenu , tags: ["king_of_greed", "tomes"] },
    { id: 18, name: "Offering", image: "pictures/tomes/offering.png" , link: gotomainmenu , tags: ["king_of_spells", "tomes"] },
    { id: 19, name: "Overinvest", image: "pictures/tomes/overinvest.png" , link: gotomainmenu , tags: ["king_of_greed", "tomes"] },
    { id: 20, name: "Sacrifice", image: "pictures/tomes/sacrifice.png" , link: gotomainmenu , tags: ["king_of_blood", "tomes"] },
    { id: 21, name: "Wildcard", image: "pictures/tomes/wildcard.png" , link: gotomainmenu , tags: ["king_of_nothing", "tomes"] },
    { id: 22, name: "Beacon", image: "pictures/towers/beacon.png" , link: gotomainmenu , tags: ["king_of_greed", "towers"] },
    { id: 23, name: "Dispenser", image: "pictures/towers/dispenser.png" , link: gotomainmenu , tags: ["king_of_greed", "towers"] },
    { id: 24, name: "Mangler", image: "pictures/towers/mangler.png" , link: gotomainmenu , tags: ["king_of_blood", "towers"] },
    { id: 25, name: "Scout Tower", image: "pictures/towers/scout_tower.png" , link: gotomainmenu , tags: ["king_of_nothing", "towers"] },
    { id: 26, name: "Spire", image: "pictures/towers/spire.png" , link: gotomainmenu , tags: ["king_of_spells", "towers"] },
    { id: 27, name: "Archer", image: "pictures/troops/archer.png" , link: gotomainmenu , tags: ["king_of_nothing", "troops"] },
    { id: 28, name: "bomber", image: "pictures/troops/bomber.png" , link: gotomainmenu , tags: ["king_of_blood", "troops"] },
    { id: 29, name: "Imp", image: "pictures/troops/imp.png" , link: gotomainmenu , tags: ["king_of_blood", "troops"] },
    { id: 30, name: "Knight", image: "pictures/troops/knight.png" , link: gotomainmenu , tags: ["king_of_nothing", "troops"] },
    { id: 31, name: "Mercenary", image: "pictures/troops/mercenary.png" , link: gotomainmenu , tags: ["king_of_greed", "troops"] },
    { id: 32, name: "Shaman", image: "pictures/troops/shaman.png" , link: gotomainmenu , tags: ["king_of_spells", "troops"] },
    { id: 33, name: "Soldier", image: "pictures/troops/soldier.png" , link: gotomainmenu , tags: ["king_of_nothing", "troops"] },
    { id: 34, name: "Thief", image: "pictures/troops/thief.png" , link: gotomainmenu , tags: ["king_of_greed", "troops"] },
    { id: 35, name: "Warlock", image: "pictures/troops/warlock.png" , link: gotomainmenu , tags: ["king_of_spells", "troops"] },
    { id: 36, name: "Wizard", image: "pictures/troops/wizard.png" , link: gotomainmenu , tags: ["king_of_spells", "troops"] },
  ];
console.log(cards[0].name)
// Utility Functions

function creatorutil(text, image, functionx, mdiv){
    const tempdiv = document.createElement('div');
    const tempa = document.createElement('a');
    tempa.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        console.log("You clicked:", event.target.id);
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

function creatorutilwithpara(text, image, functionx, mdiv, idx){

    const tempdiv = document.createElement('div');
    const tempa = document.createElement('a');
    tempa.id = idx;
    tempa.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        console.log("You clicked:", event.target.id);
        console.log("state is:", state);
        if(state == "kings" || state == "cards" || state == "kings-description" || state == "cards-description"){
            functionx(event.target.id);
        }
        else{
            functionx();
        }

    });

    const temptext = document.createElement('p');
    temptext.textContent = text;
    temptext.id = idx;

    const tempimage=document.createElement('img');
    tempimage.id=idx;
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
    creatorutilwithpara('Kings', 'pictures/king_of_nothing.png', gotokings, maindiv, 'kings');
    creatorutil('Cards', 'pictures/buildings/demons_altar.png', gotocards, maindiv);
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
    
    for(var i=0; i< kings.length; i++){
        creatorutilwithpara(kings[i].name, kings[i].image, kings[i].link, maindiv, kings[i].tagname);
    }

    menudiv.appendChild(maindiv);
    main.appendChild(menudiv);
}
function gotokingsdescription(kingsname){
    remover();
    state = 'kings-description';
    const main = document.getElementById('mainContent');

    const menudiv = document.createElement('div');
    menudiv.id = 'main-outer';

    const description = document.createElement('div');
    var tempking = kings.find(kings => kings.tagname == kingsname);
    console.log("kingname is  : ", kingsname);
    description.innerHTML = tempking.description;

    const descdiv = document.createElement('div');
    descdiv.id = 'main-inner-desc';
    descdiv.appendChild(description);

    creatorutilwithpara(tempking.name, tempking.image, tempking.link, descdiv, tempking.tagname);

    const maindiv = document.createElement('div');
    maindiv.id = 'main-inner-small';
    console.log(kingsname)

    var tempcards = cards.filter(cards => cards.tags.includes(kingsname));
    console.log(tempcards);
    for(var i=0; i<tempcards.length; i++){
        creatorutilwithpara(tempcards[i].name, tempcards[i].image, tempcards[i].link, maindiv, kingsname);
    }
    menudiv.appendChild(descdiv);
    menudiv.appendChild(maindiv);
    
    main.appendChild(menudiv);
}

function gotokingcards(kingsname){
    remover();
    state = 'kingcards';
    const main = document.getElementById('mainContent');

    const menudiv = document.createElement('div');
    menudiv.id = 'main-outer';

    const maindiv = document.createElement('div');
    maindiv.id = 'main-inner-small';
    console.log(kingsname)

    var tempcards = cards.filter(cards => cards.tags.includes(kingsname));
    console.log(tempcards);
    for(var i=0; i<tempcards.length; i++){
        creatorutilwithpara(tempcards[i].name, tempcards[i].image, tempcards[i].link, maindiv, kingsname);
    }
    menudiv.appendChild(maindiv);
    main.appendChild(menudiv);
}


function gotocards(){
    console.log('Inside gotcards atleast')
    remover();

    state = 'cards';
    const main = document.getElementById('mainContent');

    const menudiv = document.createElement('div');
    menudiv.id = 'main-outer';

    const maindiv = document.createElement('div');
    maindiv.id = 'main-inner-small';
    
    for(var i=0; i<cards.length; i++){
        creatorutilwithpara(cards[i].name, cards[i].image, cards[i].link, maindiv, "Castle");
    }

    menudiv.appendChild(maindiv);
    main.appendChild(menudiv);
}

function gotocardsdescription(cardsname){
    remover();
    state = 'cards-description';
    const main = document.getElementById('mainContent');

    const menudiv = document.createElement('div');
    menudiv.id = 'main-outer';

    const description = document.createElement('div');
    description.innerHTML = cards[0].description;

    const descdiv = document.createElement('div');
    descdiv.id = 'main-inner-desc';
    descdiv.appendChild(description);
    var tempcards = cards.find(cards => cards.name == cardsname);
    var tempkings = tempcards.tags.some(tag => kings.some(king => king.tagname == tag));
    console.log('tempking is : ', tempkings)
    
    creatorutilwithpara(tempcards.name, tempcards.image, tempcards.link, descdiv, tempkings.tagname);


    const maindiv = document.createElement('div');
    maindiv.id = 'main-inner-small';
    console.log(cardsname)

    
    console.log(tempcards);
    creatorutilwithpara(tempkings.name, tempkings.image, tempkings.link, maindiv, tempkings.tagname);

    menudiv.appendChild(descdiv);
    menudiv.appendChild(maindiv);
    main.appendChild(menudiv);
}


function remover(){
    const parent = document.getElementById('mainContent');
    const child = document.getElementById('main-outer');
    if(state == 'no-state'){
        console.log('Nothing to remove at the start');
    }
    else if(state == 'main-menu'){
        parent.removeChild(child);
    }
    else if(state == 'kings-description'){
        const child2 = document.getElementById('main-outer');
        parent.removeChild(child2);
    }
    else{
        parent.removeChild(child);
    }
}

gotomainmenu();