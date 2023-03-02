console.log('from background');
chrome.runtime.onMessage.addListener((msg) => {
  console.log(msg.text);
});
