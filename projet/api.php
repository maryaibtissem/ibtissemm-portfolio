<?php

ini_set('display_errors', 1);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: content-type, x-xsrf-token');

header('Access-Control-Allow-Methods: OPTIONS,DELETE,POST,GET,PUT');



$serveur = "localhost";
$user = "menai";
$password ="wYmg3DMdXuhi9Lms";
$name_bdd ="menai";

//$serveur = "localhost";
//$user = "root";
//$password ="";
//$name_bdd ="mes_projets";

$method = $_SERVER['REQUEST_METHOD'];

//echo $method;


 try{
        $connexion= new PDO('mysql:host='.$serveur.';dbname='.$name_bdd.';charset=utf8', $user, $password);
        $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
    }
    catch (Exception $e){
        die('Erreur : ' . $e->getMessage());
    }

if($method == 'GET'){
    
    if(isset($_GET['contact'])){
        
        if( !empty ($_GET['mail']) && !empty($_GET['sujet']) && !empty($_GET['message'])){

            $expediteur= $_GET['mail'];
            $message= $_GET['message'];
            $sujet= $_GET['sujet'];
            $mon_mail ="menaiibtissem19@gmail.com";

            $headers  = 'MIME-Version: 1.0'."\r\n";
            $headers .= 'From:'.$expediteur."\r\n";
            $headers .= 'Content-type: text/html;charset=UTF-8'."\r\n";
            $headers.='Content-Transfer-Encoding: 8bit';
          
            
            //echo (json_encode($expediteur));
            $envoi = mail($mon_mail,$sujet,$message,$headers);
            if($envoi){
                    echo (json_encode('Votre message a bien été envoyé.'));    
            }   else{
                    echo (json_encode('votre message n\'a pas pu être envoyé.'));
                }
        } else{
            echo (json_encode('Il faut remplir tout les champs'));
        }  
        
        
    } else {
        
        if(isset($_GET['modification'])){
        
            $name = $_GET['titre'];
            $req= $connexion->prepare("SELECT * FROM api_projets WHERE titre=?");
            $req->execute(array($name));
            $resultat = $req->fetchAll(PDO::FETCH_ASSOC);
            echo (json_encode($resultat));

           
            
        }   else{
   
            $req= $connexion->prepare("SELECT * FROM api_projets ");
            $req->execute();

            $resultat = $req->fetchAll(PDO::FETCH_ASSOC);
            echo (json_encode($resultat));
            }   

    
    
    }
    
    
    
  

}else if ($method == 'POST'){
    
    if(isset($_POST['sous_titre_modi'])){
        
        $titre =$_POST['name'];
        $sous_titre =$_POST['sous_titre_modi'];
        $desc =$_POST['desc_modi'];
        
        
        $req = $connexion->prepare('UPDATE api_projets
            SET  titre = ?,
            sous_titre= ?,
            description = ?
            
            WHERE titre=?');
            $req->execute(array($titre,$sous_titre,$desc,$titre));
        
    }
    else{
        $input = file_get_contents('php://input');
        $input = json_decode($input);


        $img_nom = $_FILES["img"]["name"];
        $img_chemin  = $_FILES['img']['tmp_name'];
            
            $chemin = realpath("api.php");
//            $chemin = str_replace("api.php","image\\",$chemin);
            $chemin = str_replace("api.php","img/",$chemin);
//            echo  $chemin.$img_nom;
         
            $img_taille = $_FILES['img']['size'];
          
   
            $check = getimagesize($img_chemin); 
            $taille_max = 2500000;
 
            if($check == true){
                
                if ($img_taille < $taille_max){
                        var_dump (move_uploaded_file ($img_chemin, $chemin.$img_nom));
               } 
  
            }
        
            $name = $_POST['name'];
            $desc = $_POST['desc'];      
            $sous = $_POST['sous'];      
            $req = $connexion->prepare('INSERT INTO api_projets (img_nom2,titre, description,img_nom,sous_titre) VALUES(?,?,?,?,?)');
            $req->execute(array( $img_nom,$name,$desc,'card-saopaolo.png' ,$sous ));       
    
    }
}

else if($method == 'DELETE'){
    
    $input = file_get_contents('php://input');
    $input = json_decode($input);

    
            $name = $input->infos->name;
//    echo $name;  
            $req= $connexion->query("DELETE FROM api_projets WHERE titre= '$name'  ");       
}




?>