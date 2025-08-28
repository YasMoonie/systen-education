
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express(); 

app.use(cors());
app.use(bodyParser.json());



app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Verifica se é professor
    db.query('SELECT * FROM professores WHERE email = ? AND senha = ?', [username, password], (err, results) => {
        if (err) return res.status(500).send('Erro no servidor');
        if (results.length > 0) {
            return res.send({ tipo: 'professor', nome: results[0].nome });
        }

        // Verifica se é aluno
        db.query('SELECT * FROM alunos WHERE email = ? AND senha = ?', [username, password], (err, results) => {
            if (err) return res.status(500).send('Erro no servidor');
            if (results.length > 0) {
                return res.send({ tipo: 'aluno', nome: results[0].nome });
            }

            // Nenhum usuário encontrado
            res.status(401).send('Usuário ou senha inválidos');
        });
    });
});