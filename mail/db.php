<?php
/**
 * Description of db
 *
 * @author glashenka
 */

class db {
	private static $_password = 'root';
	private static $_user = 'root';
	private static $_host = 'localhost';
	private static $_dbname = 'itss';

	// private static $_password = 'aaasss13[]';
	// private static $_user = 'itsservi_site';
	// private static $_host = 'localhost';
	// private static $_dbname = 'itsservi_itss';

	
	private static $_port = '3306';
	private static $instance;
	private $_dbh;


	static function getInstance() {
		if(!self::$instance) {
			self::$instance = new db();
		}
		return self::$instance;
	}

	protected function __construct() {

		try {  
			$this->_dbh = new PDO('mysql:host='.self::$_host.';dbname='
								.self::$_dbname, self::$_user, self::$_password);
			$this->_dbh->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
			$this->_dbh->exec("SET NAMES 'utf8'");
		}  
		catch(PDOException $e) {  
			echo $e->getMessage();  
		}
		
	}

	public function saveRequest() {  
		$name = $this->html2txt($_POST['name']);
		$email = $this->html2txt($_POST['email']);
		$phone = $this->html2txt($_POST['phone']);
		$request = $this->html2txt($_POST['request']);

		$sql = 'INSERT INTO Request (Name, Email, Phone, Request) values (?, ?, ?, ?)';
		$q = $this->_dbh->prepare($sql);
		$q->execute(array($name, $email, $phone, $request));
	}

	public function html2txt($document){ 
		$search = array('@<script[^>]*?>.*?</script>@si',  // Strip out javascript 
						'@<[\/\!]*?[^<>]*?>@si',            // Strip out HTML tags 
					   '@<style[^>]*?>.*?</style>@siU',    // Strip style tags properly 
					   '@<![\s\S]*?--[ \t\n\r]*>@'         // Strip multi-line comments including CDATA 
						); 
		$text = preg_replace($search, '', $document); 
		return $text; 
	}

}

?>
