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
		$data[] = array("name" => $array_elents_name[$i], "price" => $array_elents_price[$i]);
	
	}

	echo json_encode($data);

?>