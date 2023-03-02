document.querySelector("#btn").addEventListener('click', () => {
  chrome.runtime.sendMessage({ text: "Popup" });
});
chrome.runtime.onMessage.addListener((msg) => {
  document.body.innerHTML += `<div>${msg.text}</div>`;
});
console.log('Hello from the popup!');
