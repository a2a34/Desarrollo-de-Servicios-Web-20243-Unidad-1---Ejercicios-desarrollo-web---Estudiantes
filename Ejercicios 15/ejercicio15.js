const sendButton = document.getElementById('sendButton');
const messageInput = document.getElementById('messageInput');
const chatWindow = document.getElementById('chatWindow');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
  const userMessage = messageInput.value.trim();
  if (userMessage) {
    addMessage(userMessage, 'user');
    messageInput.value = ''; 
    setTimeout(() => {
      simulateBotResponse();
    }, 2000); 
  }
}

function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.textContent = text;
  chatWindow.appendChild(messageDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight; 
}

function simulateBotResponse() {
  const responses = [
    "Interesante, cuéntame más.",
    "No estoy seguro, ¿puedes explicar mejor?",
    "Déjame pensar en ello.",
    "Eso suena genial.",
    "Voy a investigar más sobre eso.",
    "Asi es efectivamente",
    "No tengo informacion del asunto camarada",
    "¡Qué curioso! Me encantaría saber más."
  ];
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  addMessage(randomResponse, 'bot');
}
