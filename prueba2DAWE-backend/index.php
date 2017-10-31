<?php
header("access-control-allow-origin: *");
require_once 'vendor/autoload.php';

$app = new \Slim\Slim();

$db = new mysqli('localhost','root','','dawe');

$app->get("/pruebas",function() use($app,$db){
	echo "Hola mundo";
	var_dump($db);
});

//GUARDAR UNA NOTICIA
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

//OBTENER LAS NOTICIAS DE LA BASE DE DATOS
$app->get("/favoritos",function() use($app,$db){
    $sql = 'SELECT * FROM noticia ORDER BY id DESC;';
    $query = $db->query($sql);

    $productos = array();
    while ($producto = $query->fetch_assoc()) {
        $productos[] = $producto;
    }

    echo json_encode($productos);
});

// DEVOLVER UNA SOLA NOTICIA
$app->get('/favorito/:id', function($id) use($db, $app){
    $sql = 'SELECT * FROM noticia WHERE id = '.$id;
    $query = $db->query($sql);

    $result = array(
        'status' 	=> 'error',
        'code'		=> 404,
        'message' 	=> 'Producto no disponible'
    );

    if($query->num_rows == 1){
        $producto = $query->fetch_assoc();

        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'data' 	=> $producto
        );
    }

    echo json_encode($result);
});

$app->run();