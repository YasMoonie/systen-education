document.getElementById('cadastroAlunoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    //  lógica para salvar no banco de dados
    fetch('http://localhost:3306/cadastro-aluno', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, senha })
})
.then(res => res.text())
.then(msg => {
    alert(msg);
    window.location.href = 'login.html';
});
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html';
});