const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sistema_escolar'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao MySQL');
});

// Cadastro de professor
app.post('/cadastro-professor', (req, res) => {
    const { nome, email, senha } = req.body;
    db.query('INSERT INTO professores (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], (err) => {
        if (err) return res.status(500).send(err);
        res.send('Professor cadastrado com sucesso');
    });
});

// Cadastro de aluno
app.post('/cadastro-aluno', (req, res) => {
    const { nome, email, senha } = req.body;
    db.query('INSERT INTO alunos (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], (err) => {
        if (err) return res.status(500).send(err);
        res.send('Aluno cadastrado com sucesso');
    });
});

// Registro de ocorrência
app.post('/ocorrencia', (req, res) => {
    const { aluno_id, data, horario, motivo, observacoes } = req.body;
    db.query('INSERT INTO ocorrencias (aluno_id, data, horario, motivo, observacoes) VALUES (?, ?, ?, ?, ?)',
        [aluno_id, data, horario, motivo, observacoes], (err) => {
            if (err) return res.status(500).send(err);
            res.send('Ocorrência registrada com sucesso');
        });
});

// Autenticação de login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM professores WHERE email = ? AND senha = ?', [username, password], (err, results) => {
        if (err) return res.status(500).send('Erro no servidor');
        if (results.length > 0) {
            return res.send({ tipo: 'professor', nome: results[0].nome });
        }

        db.query('SELECT * FROM alunos WHERE email = ? AND senha = ?', [username, password], (err, results) => {
            if (err) return res.status(500).send('Erro no servidor');
            if (results.length > 0) {
                return res.send({ tipo: 'aluno', nome: results[0].nome });
            }

            res.status(401).send('Usuário ou senha inválidos');
        });
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});