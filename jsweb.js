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
    }
}
