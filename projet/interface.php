<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Dancing+Script" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.1.1.js" integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA=" crossorigin="anonymous">
    </script>

</head>

<body>

    <div id="gros_titre">
        <div id="groupe">
            <p id="nom">Ibtissem Menai</p>
            <p id="back"> Back Office</p>
        </div>
    </div>

    <div id="les_trois">
        <div class="ajout">
            <h1>Ajout d'un projet</h1>
            <form action="http://menai.chalon.codeur.online/api/api.php" method="post" enctype="multipart/form-data">


                <input id="name" type="text" name="name" placeholder="Titre">
                <br>
                <input id="name" type="text" name="sous" placeholder="Sous titre">
                <br>
                <textarea id="desc" type="text" name="desc" rows="7" placeholder="Description"></textarea>
                <br>
                <input type="file" name="img" id="img">
                <br>

                <!--        <input  class="bouton_ajout" type="submit" value="Valider"  name="submit" onclick="return(confirm('Etes-vous sûr de vouloir Ajouter un projet'));" >-->

                <button class="bouton_ajout" name="envoyer" onclick="return(confirm('Etes-vous sûr de vouloir Ajouter un projet'));"> Ajouter</button>

            </form>
        </div>

        <div class="ajout">
            <h1>Suppression d'un projet</h1>
            <form>


                <select id="titre_suppr" name="supprimer">

                </select>
                <br>


                <button id="supp" class="bouton_ajout" name="envoyer">Supprimer</button>
            </form>
            <div id="resultat"></div>
        </div>


        <div class="ajout">
            <h1>Modification d'un projet</h1>
            <form action="http://menai.chalon.codeur.online/api/api.php" method="post" >


                <select id="titre_modi" name="supprimer">

                </select>
                <br>

                <input id="titre_modification" type="text" name="name" value="" placeholder="Titre">
                <br>
                <input id="sous_titre_modi" type="text" name="sous_titre_modi" placeholder="Sous titre">
                <br>
                <textarea name="desc_modi" id="desc_modi" rows="7" placeholder="Description"></textarea>
                <br>

                <button class="bouton_ajout" id="modification" name="envoyer" onclick="return(confirm('Etes-vous sûr de vouloir modifier un projet'));">Modifier</button>
            </form>
        </div>
    </div>
    <script>
        $('#titre_modi').on('change', function (e) {

            e.preventDefault();

            var titre = document.getElementById('titre_modi').value;
            var modification = true;

            //            console.log(titre);

            $.ajax({
                type: "GET",
                url: "http://menai.chalon.codeur.online/api/api.php",
                //            url:"api.php",
                contentType: 'application/json',

                data: {
                    'titre': titre,
                    'modification': modification
                },

                success: function (msg) {
                    var myObj = JSON.parse(msg);

                    console.log(myObj[0].description);

                    $('#titre_modification').attr('value', myObj[0].titre);
                    $('#sous_titre_modi').attr('value', myObj[0].sous_titre);
                    $('#desc_modi').text(myObj[0].description);

                }
            });

        })
        $(document).ready(function () {
            $.ajax({
                method: "GET",
                //url: "api.php", 
                url: "http://menai.chalon.codeur.online/api/api.php",
                contentType: 'application/json',
                dataType: "json",

                success: function (msg) {

                    for (var i = 0; i < msg.length; i++) {

                        // $('#resultat').append(msg[i].id); 

                        //console.log(msg[i].nom);
                        document.getElementById('titre_suppr').innerHTML += ('<option value="' + msg[i].titre + '">' + msg[i].titre + '</option>');
                        document.getElementById('titre_modi').innerHTML += ('<option value="' + msg[i].titre + '">' + msg[i].titre + '</option>');

                    }

                }
            });
        });

        $('#supp').on('click', function (e) {

            var name = document.getElementById('titre_suppr').value;
            console.log(name);

            e.preventDefault();

            if (confirm('Etes-vous sûr de vouloir supprimer le projet ' + name)) {


                console.log(name);
                //        
                var infos = {
                    //            table : "table",
                    infos: {
                        name: name
                    }
                }

                $.ajax({
                    method: "DELETE",
                    //url: "api.php", 
                    url: "http://menai.chalon.codeur.online/api/api.php",
                    contentType: 'application/json',
                    data: JSON.stringify(infos),
                    success: function (msg) {

                    }
                });

            };

        })
    </script>

</body>

</html>