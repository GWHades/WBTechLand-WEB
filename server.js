const express = require('express');
const path = require('path');
const app = express();

// Porta padrão que a SquareCloud usa
const PORT = process.env.PORT || 80;

// Permite que o servidor mostre as suas imagens, CSS e HTML
app.use(express.static(path.join(__dirname, '')));

// Lógica de Resposta do Bot
app.get('/bot-response', (req, res) => {
    const choice = req.query.choice;
    let reply = "";

    if (choice === 'Sistemas') {
        reply = "Nós desenvolvemos ERPs, automações e sistemas próprios sob medida para acabar com a dependência de licenças caras. <br><br> <a href='/contato.html' style='color:#00D2FF; font-weight:bold;'>Clique aqui para agendar uma consultoria de software.</a>";
    } else if (choice === 'Hardware') {
        reply = "Atuamos com precisão cirúrgica no hardware. Desde o diagnóstico avançado em componentes eletrônicos até à montagem de estações de alto desempenho. <br><br> <a href='/contato.html' style='color:#00D2FF; font-weight:bold;'>Fale com um especialista.</a>";
    } else if (choice === 'Redes') {
        reply = "A sua operação não pode parar. Projetamos ambientes de rede estruturados, servidores seguros (Windows/Linux) e rotinas de backup. <br><br> <a href='/contato.html' style='color:#00D2FF; font-weight:bold;'>Vamos estruturar o seu servidor?</a>";
    } else {
        reply = "Por favor, selecione uma das opções abaixo para eu entender como posso ajudar a sua empresa.";
    }

    res.json({ reply: reply });
});

// Entrega a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Liga o servidor
app.listen(PORT, () => {
    console.log(`WB Techland operando na porta ${PORT}`);
});
