function understandDOM(){
    var h = document.head;
    var b = document.body;
    console.log(h);
    console.log(b);
}
//understandDOM();

/*
 Exercice : afficher l'enfant d'un objet du DOM
*/

// Affiche un enfant d'un objet du DOM
// Le paramètre noeud est l'objet du DOM
// Le paramètre indice est l'indice de l'enfant à afficher
function afficherEnfant(noeud, indice) {
    // TODO : compléter la fonction

    if(noeud.nodeType !== document.ELEMENT_NODE){
        console.error("Type de noeud incorrect");
        return;
    }
    else if((indice !== Number(indice)) || (indice < 0) || (indice > noeud.childNodes.length)){
        console.error("Indice incorrect");
        return;
    }
    else {
        console.log(noeud.childNodes[indice]);
        return;
    }
}

function exoChap1(){
    // Doit afficher le noeud h1
    afficherEnfant(document.body, 1);

    // Doit afficher l'erreur "Indice incorrect"
    // L'indice demandé est négatif
    afficherEnfant(document.body, -1);

    // Doit afficher l'erreur "Indice incorrect"
    // Le noeud body a moins de 9 noeuds enfants
    afficherEnfant(document.body, 8);

    // Doit afficher l'erreur "Type de noeud incorrect"
    // Le premier noeud enfant de body est textuel et n'a donc pas d'enfants
    afficherEnfant(document.body.childNodes[0], 0);

}
//
function compterElements(node){
    return (document.querySelectorAll(node).length);
}

function exoChap2_1(){
    console.log(compterElements("p")); // Doit afficher 4
    console.log(compterElements(".adjectif")); // Doit afficher 3
    console.log(compterElements("p .adjectif")); // Doit afficher 3
    console.log(compterElements("p > .adjectif")); // Doit afficher 2
}
//exoChap2_1();

function infosLiens(){
    var liensPage = document.querySelectorAll("a");
//    return [liensPage.length, 0, 0];
    return [liensPage.length, liensPage[0].href, liensPage[liensPage.length-1].href];
}

function exoChap2_2(){
    console.log(infosLiens()[0]);
    console.log(infosLiens()[1]);
    console.log(infosLiens()[2]);
}

function possede(id, classe){
    if(document.getElementById(id)){
        var element = document.getElementById(id);
        if(element.classList.contains(classe)){
            console.log('true');
        }
        else{
            console.log('false');
        }
    }
    else{
        console.log('Aucun élément ne possède l\'identifiant '+ id);
    }
}

function exoChap2_3(){
    possede("saxophone", "bois"); // Doit afficher true
    possede("saxophone", "cuivre"); // Doit afficher false
    possede("trompette", "cuivre"); // Doit afficher true
    possede("contrebasse", "cordes"); // Doit afficher une erreur
}

function exoChap3_1(){
    var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];
    var EltDiv = document.getElementById('contenu');
    journaux.forEach(function(currentVal, index){
        var link = document.createElement("a");
        link.textContent = currentVal;
        link.href = currentVal;
        EltDiv.appendChild(link);
        EltDiv.appendChild(document.createElement("br"));
    });
}

function exoChap3_2(){
    // Liste des mots du dictionnaire
    var mots = [
        {
            terme: "Procrastination",
            definition: "Tendance pathologique à remettre systématiquement au lendemain"
        },
        {
            terme: "Tautologie",
            definition: "Phrase dont la formulation ne peut être que vraie"
        },
        {
            terme: "Oxymore",
            definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
        }
    ];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
    var contenu = document.getElementById('contenu');
    var EltDL = document.createElement('dl');
    mots.forEach(function(currentVal, index){
        var strong = document.createElement('strong');
        strong.textContent = currentVal['terme'];
        var dt = document.createElement('dt');
        dt.appendChild(strong);
        var dd = document.createElement('dd');
        dd.textContent = currentVal['definition'];

        EltDL.appendChild(dt);
        EltDL.appendChild(dd);
    });
    contenu.appendChild(EltDL);

}

function rgb(r, g, b){
    return "rgb("+r+", "+g+", "+b+")";
}

function exoChap4_1(){
    var chosenTextColour = prompt(String("Veuillez entrer une nouvelle couleur de texte (nom anglais ou au format RGB : rgb(0, 0, 0) pour du noir) :"));
    var chosenBgColour = prompt(String("Veuillez entrer une nouvelle couleur de fond (nom anglais ou au format RGB : rgb(0, 0, 0) pour du noir) :"));
    var divElts = document.querySelectorAll('div');
    divElts.forEach(function(currentVal){
        currentVal.style.color = chosenTextColour;
        currentVal.style.backgroundColor = chosenBgColour;
    });
}

function exoChap4_2(){
    var stylePara = getComputedStyle(document.getElementById('contenu'));
    var divSuppl = document.createElement('div');
    divSuppl.innerHTML = "<p>Informations sur l'élément<br />";
    divSuppl.innerHTML += "<ul><li>Hauteur : "+stylePara.height+"</li>";
    divSuppl.innerHTML += "<li>Longueur : "+stylePara.width+"</li></ul></p>";

    document.getElementById('contenu').insertAdjacentHTML("beforeBegin", divSuppl.innerHTML);
}

function exoChap5_1(){
    var clickedButton = document.getElementById('clic');
    var stopButton = document.getElementById('desactiver');
    var displayClicks = document.getElementById('compteurClics');
    var clickNb = 0;
    clickedButton.addEventListener('click', function(event){
        clickNb++;
        displayClicks.textContent = clickNb;
    });
    stopButton.addEventListener('click', function(event){
        clickNb = 0;
        clickedButton.setAttribute('disabled', 'true');
    });
}

function exoChap5_2(){
    var divs = document.querySelectorAll('div');
    document.addEventListener('keydown', function(event){
        divs.forEach(function(currentVal){
            switch (event.keyCode) {
                case 82:
                    currentVal.style.backgroundColor = 'red';
                    break;
                case 74:
                    currentVal.style.backgroundColor = 'yellow';
                    break;
                case 86:
                    currentVal.style.backgroundColor = 'green';
                    break;
                case 66:
                    currentVal.style.backgroundColor = 'white';
                    break;
                default:
                    currentVal.style.backgroundColor = 'blue';
                    break;
            }
        });
    });
}

function exoChap5_3(){
    var addButton = document.getElementsByTagName('button')[0];
    var dessertList = document.getElementById('desserts');

    function setDessertToLi(li){
        var dessert = prompt(String("Quel est le nouveau dessert ?"));
        li.textContent = dessert;
    }
    addButton.addEventListener('click', function(event){
        var newLi = document.createElement('li');
        setDessertToLi(newLi);

        newLi.addEventListener('click', function(event){
            setDessertToLi(newLi);
        });
        dessertList.appendChild(newLi);
    });
}

function exoChap5_4(){
    // Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
    var questions = [
        {
            enonce: "Combien font 2+2 ?",
            reponse: "2+2 = 4"
        },
        {
            enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
            reponse: "1492"
        },
        {
            enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
            reponse: "La lettre N"
        }
    ];
    questions.forEach(function(currentVal, index){
        var contenu = document.getElementById('contenu');
        var para = document.createElement('p');
        var strong = document.createElement('strong');
        var spanItalic = document.createElement('span');
        var br1 = document.createElement('br');
        var br2 = document.createElement('br');
        var spanAnswer = document.createElement('span');
        var button = document.createElement('button');

        strong.textContent = 'Question ' + String(index+1) + ' : ';
        spanItalic.textContent = currentVal['enonce'];
        spanItalic.style.fontStyle = 'italic';
        spanAnswer.textContent = currentVal['reponse'];
        spanAnswer.style.display = 'none';
        button.textContent = 'Afficher la réponse !';

        para.appendChild(strong);
        para.appendChild(spanItalic);
        para.appendChild(br1);
        para.appendChild(spanAnswer);
        para.appendChild(br2);
        para.appendChild(button);
        contenu.appendChild(para);

        button.addEventListener('click', function(event){
            spanAnswer.style.display = 'block';
        });
    });
}

function exoChap6_1(){
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        var infoMdp = document.getElementById('infoMdp');
        var regex = /.*[0-9]+.*/g;
        var mdp1 = form.elements.mdp1.value;
        var mdp2 = form.elements.mdp2.value;

        event.preventDefault();

        if (mdp1 === mdp2) {
            if (mdp1.length >= 6) {
                if (!(regex.test(mdp1))){
                    infoMdp.textContent = 'Erreur : le mot de passe ne contient pas de chiffre';
                }
                else {
                    infoMdp.textContent = 'Mots de passe OK';
                }
            }
            else {
                infoMdp.textContent = 'Erreur : la longueur minimale du mot de passe est de 6 caractères';
            }
        }
        else {
            infoMdp.textContent = 'Erreur : les mots de passe ne sont pas identiques';
        }
    });
}



function dispatcher(exoNb){
    switch (exoNb) {
        case '1':
            exoChap1();
            break;
        case '2':
            exoChap2_1();
            break;
        case '3':
            exoChap2_2();
            break;
        case '4':
            exoChap2_3();
            break;
        case '5':
            exoChap3_1();
            break;
        case '6':
            exoChap3_2();
            break;
        case '7':
            exoChap4_1();
            break;
        case '8':
            exoChap4_2();
            break;
        case '9':
            exoChap5_1();
            break;
        case '10':
            exoChap5_2();
            break;
        case '11':
            exoChap5_3();
            break;
        case '12':
            exoChap5_4();
            break;
        case '13':
            exoChap6_1();
            break;
        case '14':
            exoChap6_2();
            break;
        case '15':
            exoChap6_3();
            break;
    }
}
