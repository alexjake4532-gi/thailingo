export const playThaiAudio = (text: string) => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'th-TH'; // Thai language
  utterance.rate = 0.85; // Slightly slower for learning

  window.speechSynthesis.speak(utterance);
};
