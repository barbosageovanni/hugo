<?php
// Configurações do Banco de Dados
$host = '127.0.0.1'; // ou 'localhost'
$dbname = 'nome_do_seu_banco';
$username = 'seu_usuario';
$password = 'sua_senha';
$charset = 'utf8mb4';

// String de Conexão
$dsn = "mysql:host=$host;dbname=$dbname;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, // Ativa o modo de erro de exceção
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, // Define o modo padrão de busca como associativo
    PDO::ATTR_EMULATE_PREPARES => false, // Desabilita a emulação de statements preparados
];

try {
    // Cria a conexão PDO
    $pdo = new PDO($dsn, $username, $password, $options);
    echo "Conexão estabelecida com sucesso!";
} catch (PDOException $e) {
    // Trata o erro capturado
    throw new PDOException($e->getMessage(), (int)$e->getCode());
}
?>
