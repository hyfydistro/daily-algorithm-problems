
function displayMessage(msgText, msgType) {
  // setup: message box container
  const html = document.querySelector('html');

  const panel = document.createElement('div');
  panel.setAttribute('class', 'msgBox');
  html.appendChild(panel);

  const msg = document.createElement('p');
  msg.textContent = msgText;
  panel.appendChild(msg);

  // setup: close button
  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'x';
  panel.appendChild(closeBtn);

  // add event listener or similar
  closeBtn.onclick = function() {
    panel.parentNode.removeChild(panel);
  }

// If message type is set to 'warning', the background color would be red and display the warnign icon
// If the message type is set to 'chat', the background color would be set to aqua blue and display the chat icon
// If none of the above, there would be no icon and the paragraph is given default padding
// This is OPTIONAL, whether the user decides to input  a 'msgType' or not
  if (msgType === 'warning') {
    msg.style.backgroundImage = ''; // icon url / source
    panel.style.backgroundColor = 'red';
  } else if (msgType === 'chat') {
    msg.style.backgroundImage = ''; // icon url / source
    panel.style.backgroundColor = 'aqua';
  } else {
    msg.style.paddingLeft = '20px';
  }
}

const btn = document.querySelector('button');
btn.onclick = function() {
  // you may call displayMessage() in the console and write different messages
  displayMessage('Woo, this is a different message!')
};

// displayMessage('Your inbox is almost full - delete some mail', 'warning');
// displayMessage('Brian: Hi there! How was your day today?', 'chat');
