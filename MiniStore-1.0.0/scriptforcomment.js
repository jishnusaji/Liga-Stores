document.getElementById("sendcomment").addEventListener("click", function() {
    var comment = document.getElementById("yourcomment").value;
    var botToken = '7105460605:AAG9KUuyQrYIgWW5aGJHLDEiSM_-3Ibc4Wg';
    var chatId = '6580559134'; // This is your Telegram chat ID where you want to receive the messages

    var url = 'https://api.telegram.org/bot' + botToken + '/sendMessage';
    var data = {
        chat_id: chatId,
        text: comment
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Comment sent successfully!');
            document.getElementById("yourcomment").value = ''; // Clear the comment box after sending
        } else {
            throw new Error('Comment failed to send');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Comment send successfully');
    });
});
