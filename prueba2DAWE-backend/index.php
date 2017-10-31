<?php
header("access-control-allow-origin: *");
require_once 'vendor/autoload.php';

$app = new \Slim\Slim();

$db = new mysqli('localhost','root','','dawe');

$app->get("/pruebas",function() use($app,$db){
	echo "Hola mundo";
	var_dump($db);
});

$app->post("/guardar-noticia",function() use($app,$db){
	$json = file_get_contents('php://input');
	$data = json_decode($json, true);

	$query = "INSERT INTO noticia(titulo,descripcion,urlimagen) VALUES(
	'".$data['titulo']."',
	'".$data['descripcion']."',
	'".$data['urlimagen']."'
	)";

	$insert = $db->query($query);

	$result = array(
		'status' => 'error',
		'code'	 => 404,
		'message' => $data['titulo']
	);

	if($insert){
		$result = array(
			'status' => 'success',
			'code'	 => 200,
			'message' => 'Se ha guardado la noticia correctamente'
		);
	}

	echo json_encode($result);
});

$app->run();