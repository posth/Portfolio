<?php

$toEmail = "posth.marc@gmail.com";

$mailHeaders = "From: " . $_POST["userName"] . "<". $_POST["userEmail"] .">\r\n";

if (mail($toEmail, $_POST["subject"], $_POST["content"], $mailHeaders)) {
    print "<p class='success'>Message sent! </p>";
} else {
    print "<p class='error'>Error :(  Try again</p>";
}

?>




