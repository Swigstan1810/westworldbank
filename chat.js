async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const messagesDiv = document.getElementById('messages');
    
    // Display user's message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = userInput;
    messagesDiv.appendChild(userMessage);
    
    // Clear input field
    document.getElementById('userInput').value = '';

    // Send user's message to backend
    const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
    });

    const data = await response.json();

    // Display ChatGPT's response
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot-message';
    botMessage.textContent = data.reply;
    messagesDiv.appendChild(botMessage);
}
