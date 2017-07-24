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
    <meta charset="utf-8" />
    <link type="text/css" rel="stylesheet" href="styles.css" />
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
    case '7':
        ?>
                <title>Couleurs</title>
        </head>

        <body>
            <h1>Paragraphe 1</h1>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim fringilla dapibus. Curabitur placerat efficitur molestie. Quisque quis consequat nibh. Aenean feugiat, eros eget aliquam vulputate, leo augue luctus lectus, non lobortis libero quam non sem. Aliquam sit amet tincidunt ex, mollis interdum massa. Sed vulputate mi id accumsan scelerisque. Nam interdum iaculis ipsum, non convallis mauris faucibus et. Pellentesque in imperdiet lorem, in condimentum neque. Nullam auctor sem eu sapien pulvinar, non ultricies ipsum hendrerit. Aliquam at magna convallis, ultrices enim vitae, mollis lacus.</div>

            <h1>Paragraphe 2</h1>
            <div>Vivamus at justo blandit, ornare leo id, vehicula urna. Fusce sed felis eget magna viverra feugiat eget nec orci. Duis non massa nibh. Aenean vehicula velit a magna lobortis tempor ut quis felis. Proin vitae dui a eros facilisis fringilla ut ut ante. Curabitur eu magna dui. Ut hendrerit suscipit metus, id vehicula velit. Pellentesque ac nisl rutrum, efficitur velit dictum, cursus odio.</div>

            <h1>Paragraphe 3</h1>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet pharetra massa. Nulla blandit erat nulla, et scelerisque libero varius ut. Praesent bibendum eu magna ullamcorper venenatis. Sed ut pellentesque leo. Sed ultrices sapien consequat odio posuere gravida. Nunc lorem tortor, volutpat nec maximus in, suscipit a ex. Praesent efficitur ex ut viverra placerat. Vivamus eu sapien sed enim vehicula sodales.</div>

    <?php
        break;
    case '8':
        ?>
            <title>Informations</title>
        </head>

        <body>
            <div id="contenu">ABC
                <br />Easy as
                <br />One, two, three
            </div>
            <div id="infos"></div>
        <?php
        break;
    case '9':
        ?>
            <title>Compteur de clics</title>
        </head>

        <body>
            <button id="clic">Cliquez-moi !</button>
            <p>Vous avez cliqué <span id="compteurClics">0</span> fois</p>
            <button id="desactiver">Désactiver le comptage</button>
        <?php
        break;
    case '10':
        ?>
            <title>Changement de couleur</title>
        </head>

        <body>
            <p>Appuyez sur les touches R, J, V et B pour changer la couleur des paragraphes</p>

            <h1>Paragraphe 1</h1>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim fringilla dapibus. Curabitur placerat efficitur molestie. Quisque quis consequat nibh. Aenean feugiat, eros eget aliquam vulputate, leo augue luctus lectus, non lobortis libero quam non sem. Aliquam sit amet tincidunt ex, mollis interdum massa. Sed vulputate mi id accumsan scelerisque. Nam interdum iaculis ipsum, non convallis mauris faucibus et. Pellentesque in imperdiet lorem, in condimentum neque. Nullam auctor sem eu sapien pulvinar, non ultricies ipsum hendrerit. Aliquam at magna convallis, ultrices enim vitae, mollis lacus.</div>

            <h1>Paragraphe 2</h1>
            <div>Vivamus at justo blandit, ornare leo id, vehicula urna. Fusce sed felis eget magna viverra feugiat eget nec orci. Duis non massa nibh. Aenean vehicula velit a magna lobortis tempor ut quis felis. Proin vitae dui a eros facilisis fringilla ut ut ante. Curabitur eu magna dui. Ut hendrerit suscipit metus, id vehicula velit. Pellentesque ac nisl rutrum, efficitur velit dictum, cursus odio.</div>

            <h1>Paragraphe 3</h1>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet pharetra massa. Nulla blandit erat nulla, et scelerisque libero varius ut. Praesent bibendum eu magna ullamcorper venenatis. Sed ut pellentesque leo. Sed ultrices sapien consequat odio posuere gravida. Nunc lorem tortor, volutpat nec maximus in, suscipit a ex. Praesent efficitur ex ut viverra placerat. Vivamus eu sapien sed enim vehicula sodales.</div>
        <?php
        break;
    case '11':
        ?>
            <title>Mes desserts préférés</title>
        </head>

        <body>
            <h1>Mes desserts préférés</h1>

            <ul id="desserts">
            </ul>
            <button>Ajouter un dessert</button>
        <?php
        break;
    case '12':
        ?>
            <title>Quiz interactif</title>
        </head>

        <body>
            <div id="contenu"></div>
        <?php
        break;
    case '13':
        ?>
            <title>Vérification de mots de passe</title>
        </head>

        <body>
            <form>
                <p>
                    <label for="mdp1">Saisissez le mot de passe</label> :
                    <input type="password" name="mdp1" id="mdp1" required>
                </p>
                <p>
                    <label for="mdp2">Confirmez le mot de passe</label> :
                    <input type="password" name="mdp2" id="mdp2" required>
                </p>

                <input type="submit" value="Envoyer">
            </form>

            <p id="infoMdp"></p>
        <?php
        break;
    case '14':
        ?>
            <!--link rel="stylesheet" href="../css/personnages.css"-->
            <title>Maisons et personnages</title>
        </head>

        <body>
            <h1>Quelques personnages de Game of Thrones</h1>
            <form>
                <label for="maison">Maison</label> :
                <select name="maison" id="maison">
                    <option value="" selected>Choisissez une maison</option>
                </select>
            </form>

            <p>
                <ul id="persos"></ul>
            </p>
        <?php
        break;
    case '15':
        ?>
        <?php
        break;
    case '16':
        ?>
            <title>Chronomètre</title>
        </head>
        <body>
            <form>
                <button type="button" name="start" id="actionButton">Démarrer</button>
            </form>
            <p>
                <span id="chrono">0</span> seconde(s) écoulée(s)
            </p>

        <?php
        break;
    case '17':
        ?>
            <title>Ballon rebondissant</title>
        </head>

        <body>
            <p>
                <button id="demarrer">Démarrer</button>
                <button id="arreter" disabled>Arrêter</button>
            </p>

            <div id="cadre">
                <img id="ballon" src="img/basketball.jpg">
            </div>
        <?php
        break;
    default:
        ?>
            <title>Erreur : page vide</title>
        </head>
        <body>
            <h1>Erreur : mauvaise requête</h1>
            <p>
                Il semblerait que vous vous soyez trompés de liens. <a href="index.php" target="_self">Retour à la page d'accueil</a>.
            </p>
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
