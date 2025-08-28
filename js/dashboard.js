document.getElementById('occurrenceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const data = {
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        reason: document.getElementById('reason').value,
        notes: document.getElementById('notes').value
    };
    //  dados para o banco de dados
    fetch('http://localhost:3306/dashboard', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, senha })
})
.then(res => res.text())
.then(msg => {
    alert(msg);
    window.location.href = 'login.html';
});
    alert('Ocorrência registrada com sucesso!');
});

//  gráfico de desempenho
const ctx = document.createElement('canvas');
document.getElementById('studentPerformance').appendChild(ctx);
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Matemática', 'Português', 'História', 'Ciências'],
        datasets: [{
            label: 'Desempenho (%)',
            data: [85, 70, 90, 75],
            backgroundColor: 'rgba(54, 162, 235, 0.6)'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});