"use client";
import { useState } from 'react';
import Button from '../ui/Button';
import { Mic, Volume2 } from 'lucide-react';
import { playThaiAudio } from '@/utils/audio';

export default function SpeakingPractice({ targetPhrase, romanization, translation }: { targetPhrase: string, romanization: string, translation: string }) {
  const [isRecording, setIsRecording] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleRecord = () => {
    setIsRecording(true);
    setFeedback(null);

    // Simulate recording delay and analysis
    setTimeout(() => {
      setIsRecording(false);
      setFeedback('Great pronunciation! (Demo mode)');
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-6">
        <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">{targetPhrase}</h3>
        <p className="text-lg text-brand-600 dark:text-brand-400 mb-1">{romanization}</p>
        <p className="text-gray-500">{translation}</p>
      </div>

      <div className="flex gap-4 mb-4">
        <Button
          variant="secondary"
          onClick={() => playThaiAudio(targetPhrase)}
          className="rounded-full w-14 h-14 p-0 flex items-center justify-center"
        >
          <Volume2 className="w-6 h-6" />
        </Button>
        <Button
          onClick={handleRecord}
          variant={isRecording ? 'danger' : 'primary'}
          className="rounded-full w-14 h-14 p-0 flex items-center justify-center animate-pulse-if-recording"
        >
          <Mic className={`w-6 h-6 ${isRecording ? 'animate-bounce' : ''}`} />
        </Button>
      </div>

      {feedback && (
        <p className="text-green-600 font-medium">{feedback}</p>
      )}
    </div>
  );
}
