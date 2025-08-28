CREATE DATABASE sistema_escolar;
USE sistema_escolar;

CREATE TABLE professores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    senha VARCHAR(100)
);

CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    senha VARCHAR(100)
);

CREATE TABLE ocorrencias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT,
    data DATE,
    horario TIME,
    motivo VARCHAR(100),
    observacoes TEXT,
    FOREIGN KEY (aluno_id) REFERENCES alunos(id)
);
