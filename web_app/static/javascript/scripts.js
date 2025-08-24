document.addEventListener('DOMContentLoaded', () => {
    console.log("Pista 1: Script iniciado, página carregada.");

    const chatForm = document.getElementById('chat-form');
    const messageInput = document.getElementById('message-input');
    const messagesList = document.getElementById('messages-list');
    
    console.log("Pista 2: Elementos capturados:", { chatForm, messageInput, messagesList });

    // Verificação importante: O formulário foi encontrado?
    if (chatForm) {
            chatForm.addEventListener('submit', (event) => {
 

            console.log("Pista 3: Formulário enviado! Ação detectada.");
            
            event.preventDefault();
            const messageText = messageInput.value.trim();

            if (messageText !== '') {
                addMessage(messageText, 'user-message');
                messageInput.value = '';
            }
                fetch('/chat', { // Atenção: a rota tem que ser a mesma do seu Python
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: messageText }),
        })
        .then(response => response.json())
        .then(data => {
            // Quando o Python responder, pega na resposta e mostra no ecrã
            addMessage(data.response, 'bot-message');
        });
        });
    } else {
        console.error("Erro Crítico: O elemento com id 'chat-form' não foi encontrado!");
    }

    function addMessage(text, className) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', className);
        if (className === 'bot-message') {
            const botIcon = document.createElement('img');
            botIcon.src = "/static/images/bot-icon.png"; // Caminho para o seu ícone
            botIcon.classList.add('bot-icon');
            messageDiv.appendChild(botIcon);}

        const messageP = document.createElement('p');
        messageP.innerHTML = marked.parse(text); // Usando a biblioteca marked

        messageDiv.appendChild(messageP);
        messagesList.appendChild(messageDiv);
        //messagesList.scrollTop = messagesList.scrollHeight;
    };
});