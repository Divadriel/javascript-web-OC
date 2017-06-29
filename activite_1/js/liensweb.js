/*
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web
/**
 * A function that displays links on an HTML page.
 * @param  {array} linkList a multidimensionnal array containing links and attributes
 * @return {none}
 * @author {David Rei}
 */
function displayLinks(linkList){
    // getting div contenu
    var contenu = document.getElementById('contenu');

    linkList.forEach(function(currentVal){
        // variables creation
        var para = document.createElement("p");
        var link = document.createElement("a");
        var strong = document.createElement("strong");
        var span1 = document.createElement("span");
        var span2 = document.createElement("span");

        // strong tag
        strong.textContent = currentVal["titre"];

        // link tag
        link.appendChild(strong);
        link.href = currentVal["url"];
        link.style.color = "#428bca";
        link.style.textDecoration = "none";

        // span tag
        span1.textContent = " "+currentVal["url"];
        span2.textContent = "Ajouté par "+currentVal["auteur"];

        // paragraph tag
        para.classList.add("lien");
        para.appendChild(link);
        para.appendChild(span1);
        para.appendChild(document.createElement("br"));
        para.appendChild(span2);

        // adding a paragraph to contenu, for each item in the list
        contenu.appendChild(para);
    });
}

displayLinks(listeLiens);
