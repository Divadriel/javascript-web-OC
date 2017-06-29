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
    }
}
