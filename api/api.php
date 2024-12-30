<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$books = [
    [
        'id' => 1,
        'title' => "Clean Code: A Handbook of Agile Software Craftsmanship",
        'author' => 'Robert C. Martin',
        'image' => 'https://m.media-amazon.com/images/I/41xShlnTZTL.jpg',
        'description' => 'Un guide pratique pour écrire un code propre et maintenable.'
    ],
    [
        'id' => 2,
        'title' => "Design Patterns: Elements of Reusable Object-Oriented Software",
        'author' => 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
        'image' => 'https://m.media-amazon.com/images/I/81gtKoapHFL.jpg',
        'description' => 'Un livre classique sur les modèles de conception en programmation orientée objet.'
    ],
   
    [
        'id' => 3,
        'title' => "JavaScript: The Good Parts",
        'author' => 'Douglas Crockford',
        'image' => 'https://m.media-amazon.com/images/I/81kqrwS1nNL.jpg',
        'description' => 'Un guide concis sur les meilleures pratiques en JavaScript.'
    ]
];


$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        echo json_encode($books);
        break;
    
    case 'POST':
        $data = json_decode(file_get_contents("php://input"));
        if(isset($data->title) && isset($data->author) && isset($data->image) && isset($data->description)) {
            $newBook = [
                'id' => count($books) + 1,
                'title' => $data->title,
                'author' => $data->author,
                'image' => $data->image,
                'description' => $data->description
            ];
            $books[] = $newBook;
            echo json_encode(['message' => 'Livre ajouté avec succès', 'book' => $newBook]);
        } else {
            echo json_encode(['message' => 'Données invalides']);
        }
        break;
    
    default:
        echo json_encode(['message' => 'Méthode non autorisée']);
        break;
}

