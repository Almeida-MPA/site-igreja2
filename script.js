// Textos pré-definidos
const textos = [
    "Jr 29:11: Porque eu sei os pensamentos que tenho sobre vós, diz o Senhor, pensamentos de paz, e não de mal, para vos dar o fim que esperais.",
    "2Co 1:3-4: Bendito seja o Deus e Pai de nosso Senhor Jesus Cristo, o Pai das misericórdias, e o Deus de toda consolação; que nos conforta em toda a nossa tribulação, para que também possamos confortar os que estiverem em alguma tribulação, por meio do consolo com o qual nós mesmos somos confortados por Deus."

];

// Função para carregar texto aleatório
function carregarTextoAleatorio() {
    // Seleciona um índice aleatório
    const indice = Math.floor(Math.random() * textos.length);
    
    // Atualiza o texto exibido na página
    document.getElementById('textoAleatorio').textContent = textos[indice];
}

// Carrega um texto aleatório ao carregar a página
document.addEventListener('DOMContentLoaded', carregarTextoAleatorio);
