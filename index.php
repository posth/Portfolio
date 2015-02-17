<?php

$default_language = "en";
$file = "index.php";

if (($_SERVER["HTTP_ACCEPT_LANGUAGE"] != "") && ($_SERVER["HTTP_ACCEPT_LANGUAGE"] != $default_language)) {
   $redirects = array(
      $_SERVER["HTTP_ACCEPT_LANGUAGE"] . "/" . $file,
      substr($_SERVER["HTTP_ACCEPT_LANGUAGE"], 0, 2) . "/" . $file,
   );
   foreach ($redirects as $redirect) {
      if(@file_exists($redirect)) {
         header("Location: ".$redirect);
         exit;
      }
   }
} 

// No index for specific language specified
header("Location: ".$default_language."/".$file);  
