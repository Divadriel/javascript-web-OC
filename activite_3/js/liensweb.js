/**
 * Activité 3
 *
 * "ajaxGet" and "ajaxPost" are in the file 'ajax.js'. Those two functions were
 * directly taken from the course of openclassrooms.com, without modification
 * at all.
 *
 * @author {David Rei}
 */

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)

// getting div contenu
var contenu = document.getElementById('contenu');
// getting body
var body = document.getElementsByTagName('body')[0];
// creating the new element here so I can use it later (after it has been filled)
var newElt;

/**
 * This function clears div of all its content. Better than .innerHTML = '',
 * because it also clears all event handlers, if there are.
 * @param  {text} divID The ID of the div to clear
 * @return {none}
 */
function clearDiv(divID){
    var div = document.getElementById(divID);
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
}

/**
 * This function clear div 'contenu' before an ajax call to fill it again.
 * @return {none}
 */
function getLinks(){
    clearDiv('contenu');
    ajaxGet("https://oc-jswebsrv.herokuapp.com/api/liens", displayLinks);
}

/**
 * A function that displays links on an HTML page.
 * @param  {array} linkList a multidimensionnal array containing links and attributes
 * @return {none}
 */
function displayLinks(linkList){
    // linkList is a JSON string --> I need a Javascript Object
    linkList = JSON.parse(linkList);
    linkList.forEach(function(currentVal){
        var para = createPara(currentVal);
        // adding a paragraph to contenu, for each item in the list
        contenu.appendChild(para);
    });
}

/**
 * This function creates a paragraph containing the new link to be added
 * @param  {object} currentVal link object is supposed to have three props: 'url',
 *                             'titre' and 'auteur'
 * @return {object} para       the paragraph created
 */
function createPara(currentVal){
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

    return para;
}

/**
 * This function creates the form and adds it to HTML body. Event Listeners
 * added to both form and button.
 * @return {none}
 */
function createAddLinkForm(){
    // a div wraps up the form
    var divForm = document.createElement('div');
    divForm.id = "divForm";
    // the form is not displayed at first
    var form = document.createElement('form');
    form.style.display = "none";
    form.id = "addLinkForm";

    // creating form elements
    var inputAuthor = document.createElement('input');
    inputAuthor.type = "text";
    inputAuthor.name = "auteur";
    inputAuthor.id = "auteur";
    inputAuthor.placeholder = "Votre nom";
    inputAuthor.style.marginRight = "15px";
    inputAuthor.setAttribute('required', 'true');

    var inputTitle = document.createElement('input');
    inputTitle.type = "text";
    inputTitle.name = "titre";
    inputTitle.id = "titre";
    inputTitle.placeholder = "Titre du lien";
    inputTitle.style.marginRight = "15px";
    inputTitle.setAttribute('required', 'true');

    var inputLink = document.createElement('input');
    inputLink.type = "text";
    inputLink.name = "url";
    inputLink.id = "url";
    inputLink.placeholder = "URL du lien";
    inputLink.style.marginRight = "15px";
    inputLink.setAttribute('required', 'true');

    var inputSubmit = document.createElement('input');
    inputSubmit.type = "submit";
    inputSubmit.id = "add";
    inputSubmit.value = "Ajouter";
    inputSubmit.form = "addLinkForm";

    // creating original button
    var buttonAddLink = document.createElement('button');
    buttonAddLink.id = "addLink";
    buttonAddLink.textContent = "Ajouter un lien";

    // adding form elements to form
    form.appendChild(inputAuthor);
    form.appendChild(inputTitle);
    form.appendChild(inputLink);
    form.appendChild(inputSubmit);

    // adding elements to wrapping div
    divForm.appendChild(form);
    divForm.appendChild(buttonAddLink);

    // and finally adding div to HTML body
    body.insertBefore(divForm, contenu);

    // event listener for original button
    buttonAddLink.addEventListener('click', function(e){
        showForm();
    });

    // event listener for form
    form.addEventListener('submit', function(e){
        e.preventDefault();
        addNewLink();
    });
}

/**
 * This function displays the form and hides the original button.
 * @return {none}
 */
function showForm(){
    var form = document.getElementById('addLinkForm');
    // purging the form
    form.reset();
    var buttonAddLink = document.getElementById('addLink');
    form.style.display = "block";
    buttonAddLink.style.display = "none";
}

/**
 * This function retrieves data from the form, and creates a new link in the list.
 */
function addNewLink(){
    // vars creation: we retrieve needed data
    var form = document.getElementById('addLinkForm');

    var buttonAddLink = document.getElementById('addLink');
    var url = form.elements.url.value;

    // checking if URL has 'http://' or 'https://' first
    if((url.indexOf("http://") === -1) && (url.indexOf("https://") === -1)){
        url = "http://" + url;
    }

    // filling the new element
    newElt = {
        titre: form.elements.titre.value,
        url: url,
        auteur: form.elements.auteur.value
    };

    ajaxPost("https://oc-jswebsrv.herokuapp.com/api/lien", newElt, createMessage, true);

    // we reverse displays: original button shown while form hidden
    form.style.display = "none";
    buttonAddLink.style.display = "block";
}

/**
 * This function creates a paragraph containing the message to be displayed
 * @param  {object} newElt      link object is supposed to have three props: 'titre',
 *                              'url' and 'auteur'
 * @return {object} messagePara the paragraph created
 */
function createMessage(rep){
    var divForm = document.getElementById('divForm');
    var messagePara = document.createElement('p');
    messagePara.id = "messagePara";
    messagePara.style.backgroundColor = "#a4e5fc";
    messagePara.style.color = "#0691c2";
    messagePara.style.fontWeight = "bold";
    messagePara.style.padding = "20px";
    messagePara.style.left = "50px";

    // being there means sending the link to server succeeded. So I get all the
    // links again, including the new one.
    getLinks();
    // newElt was created at first so I could use its 'titre' prop here.
    messagePara.textContent = "Le lien '" + newElt['titre'] + "' a bien été ajouté.";
    body.insertBefore(messagePara, divForm);

    // we wait 2 sec, and we remove the message
    setTimeout(function(){
        body.removeChild(messagePara);
    }, 2000);
}

// executing init functions (getting the links, and creating the hidden form)
getLinks();
createAddLinkForm();
