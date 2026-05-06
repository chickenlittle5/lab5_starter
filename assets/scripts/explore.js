// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const face = document.querySelector('#explore img');
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');

  let voices = [];

  function loadVoices() {
    voices = speechSynthesis.getVoices();

    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');

      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;

      voiceSelect.appendChild(option);
    });
  }

  loadVoices();

  speechSynthesis.addEventListener('voiceschanged', loadVoices);

  talkButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textArea.value);
    const selectedVoice = voices[voiceSelect.value];

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.addEventListener('start', () => {
      face.src = 'assets/images/smiling-open.png';
      face.alt = 'Smiling face speaking';
    });

    utterance.addEventListener('end', () => {
      face.src = 'assets/images/smiling.png';
      face.alt = 'Smiling face';
    });

    speechSynthesis.speak(utterance);
  });
}
