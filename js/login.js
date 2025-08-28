document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3306/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(res => {
        if (!res.ok) throw new Error('Login inválido');
        return res.json();
    })
    .then(data => {
        alert(`Bem-vindo, ${data.nome} (${data.tipo})`);
        window })
    .catch(err => {
        alert('Usuário ou senha incorretos');
        console.error(err);
    });
});