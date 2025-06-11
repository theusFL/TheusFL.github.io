const telaInicial = document.getElementById('tela-inicial');
const telaMensagem = document.getElementById('tela-mensagem');
const abrirMensagemBtn = document.getElementById('abrir-mensagem');
const voltarBtn = document.getElementById('voltar');
const irParaSurpresaBtn = document.getElementById('ir-para-surpresa');

const REPOSITORIO_URL = "https://drive.google.com/drive/folders/13VfF_MPKyCz5Tq-jJ1uuplitTg0bhmR2";

abrirMensagemBtn.addEventListener('click', () => {
    telaInicial.classList.add('hidden');
    telaMensagem.classList.remove('hidden');
    updateCountdown();
});

voltarBtn.addEventListener('click', () => {
    telaMensagem.classList.add('hidden');
    telaInicial.classList.remove('hidden');
});

irParaSurpresaBtn.addEventListener('click', () => {
    window.open(REPOSITORIO_URL, '_blank');
});

// --- Código para a contagem de tempo ---
// AQUI ESTÁ A DATA DE INÍCIO DA CONTAGEM CORRIGIDA (17 de março de 2024 às 00:00:00)
const startDateRaw = "2024-03-17T00:00:00"; // DATA CORRIGIDA PARA 17/03/2024!
const startDate = new Date(startDateRaw);

function updateCountdown() {
    const now = new Date();
    const diff = now.getTime() - startDate.getTime();

    if (diff < 0) {
        document.getElementById('days').textContent = "00";
        document.getElementById('hours').textContent = "00";
        document.getElementById('minutes').textContent = "00";
        document.getElementById('seconds').textContent = "00";
        return;
    }

    const secondsTotal = Math.floor(diff / 1000);
    const minutesTotal = Math.floor(secondsTotal / 60);
    const hoursTotal = Math.floor(minutesTotal / 60);
    const days = Math.floor(hoursTotal / 24);

    const displaySeconds = secondsTotal % 60;
    const displayMinutes = minutesTotal % 60;
    const displayHours = hoursTotal % 24;

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(displayHours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(displayMinutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(displaySeconds).padStart(2, '0');
}

let countdownInterval;
abrirMensagemBtn.addEventListener('click', () => {
    telaInicial.classList.add('hidden');
    telaMensagem.classList.remove('hidden');
    updateCountdown();
    if (!countdownInterval) {
        countdownInterval = setInterval(updateCountdown, 1000);
    }
});

voltarBtn.addEventListener('click', () => {
    telaMensagem.classList.add('hidden');
    telaInicial.classList.remove('hidden');
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
});

// Se a tela de mensagem não começar oculta
if (!telaMensagem.classList.contains('hidden')) {
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
}
