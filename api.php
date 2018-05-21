<?php 
	// session_start();
	include ('include/library/simple_html_dom.php');

	$htmlOut = new simple_html_dom();

	$data = array();

	$htmlOut = file_get_html('http://logoshop.zzz.com.ua/');

	foreach($htmlOut->find('.tov_name') as $element_name) { 
       // echo $element_name;
		$array_elents_name[] = $element_name->innertext;
	}

	foreach($htmlOut->find('.price') as $element_price) { 
       // echo $element_name;
		$array_elents_price[] = $element_price->innertext;
	}

	for ($i=0; $i < count($array_elents_name); $i++) { 
		if($i < 5){
			$data[] = array("name" => $array_elents_name[$i], "price" => $array_elents_price[$i]);
		} else {
			$array_different_name[] = array("name" => $array_elents_name[$i], "price" => $array_elents_price[$i]);
			$_SESSION['check_many_tov'] = "true";
		}
	}

	// if(isset($_SESSION['check_many_tov'])){
	// 	echo "<a href='#'>next page</a>"."<br>";
	// }

	echo json_encode($data);

?>