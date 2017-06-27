<?php
if(isset($_GET['exo'])){
    $exo = (string)$_GET['exo'];
}
else{
    $exo = '1';
}
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
<?php

switch ($exo) {
    case '1':
        ?>
            <title>Fonction afficherEnfant</title>
        </head>

        <body>
            <h1>Un titre</h1>
            <div>Du texte avec <a href="#">un lien</a>.</div>
        <?php
        break;

    case '2':
        ?>
            <title>Mon rêve familier</title>
        </head>

        <body>
            <h1>Mon rêve familier (Paul Verlaine)</h1>
            <p>Je fais souvent ce rêve <span class="adjectif">étrange</span> et <span class="adjectif">pénétrant</span></p>
            <p>D'une <span>femme <span class="adjectif">inconnue</span></span>, et que j'aime, et qui m'aime</p>
            <p>Et qui n'est, chaque fois, ni tout à fait la même</p>
            <p>Ni tout à fait une autre, et m'aime et me comprend.</p>
        <?php
        break;
    case '3':
    case '4':
        ?>
            <title>Quelques instruments de musique</title>
        </head>

        <body>
            <h1>Quelques instruments de musique</h1>
            <ul>
                <li id="clarinette" class="vent bois">
                    La <a href="https://fr.wikipedia.org/wiki/Clarinette">clarinette</a>
                </li>
                <li id="saxophone" class="vent bois">
                    Le <a href="https://fr.wikipedia.org/wiki/Saxophone">saxophone</a>
                </li>
                <li id="trompette" class="vent cuivre">
                    La <a href="https://fr.wikipedia.org/wiki/Trompette">trompette</a>
                </li>
                <li id="violon" class="cordes frottees">
                    Le <a href="https://fr.wikipedia.org/wiki/Violon">violon</a>
                </li>
                <li id="clavecin" class="cordes pincees">
                    Le <a href="https://fr.wikipedia.org/wiki/Clavecin">clavecin</a>
                </li>
            </ul>
        <?php
        break;
    case '5':
        ?>
            <title>Quelques journaux en ligne</title>
        </head>

        <body>
            <h1>Quelques journaux en ligne</h1>
            <div id="contenu"></div>
        <?php
        break;
    case '6':
        ?>
                <title>Mini-dictionnaire</title>
        </head>

        <body>
            <h1>Un mini-dictionnaire</h1>
            <div id="contenu"></div>
        <?php
        break;
}
?>
        <script src="jsweb.js"></script>
        <script>
            dispatcher(String(<?php echo $exo; ?>));
        </script>
    </body>

</html>
