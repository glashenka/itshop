
<?php
/**
 * @author <nikolay.terentyev@gmail.com> Nikolay Terentyev
 * @version 1.2
 */

require_once("db.php");

$db = db::getInstance();
if (isset($_POST['email']) && isset($_POST['request']))	$db->saveRequest();

?>
