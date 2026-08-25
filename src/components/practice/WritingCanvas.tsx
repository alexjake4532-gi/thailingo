"use client";
import { useRef, useEffect } from 'react';
import Button from '../ui/Button';
import { RotateCcw } from 'lucide-react';

export default function WritingCanvas({ targetCharacter }: { targetCharacter: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw target character faintly in background
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '120px "Noto Sans Thai", sans-serif';
    ctx.fillStyle = 'rgba(156, 163, 175, 0.2)'; // Faint gray
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(targetCharacter, canvas.width / 2, canvas.height / 2);
  }, [targetCharacter]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '120px "Noto Sans Thai", sans-serif';
    ctx.fillStyle = 'rgba(156, 163, 175, 0.2)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(targetCharacter, canvas.width / 2, canvas.height / 2);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl mb-4 bg-gray-50 dark:bg-gray-800 touch-none">
        <canvas
          ref={canvasRef}
          width={200}
          height={200}
          className="cursor-crosshair"
          onMouseDown={(e) => {
            const ctx = canvasRef.current?.getContext('2d');
            if(ctx) { ctx.beginPath(); ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); }
          }}
          onMouseMove={(e) => {
            if (e.buttons !== 1) return;
            const ctx = canvasRef.current?.getContext('2d');
            if (ctx) {
              ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
              ctx.strokeStyle = '#059669'; // Primary color
              ctx.lineWidth = 4;
              ctx.lineCap = 'round';
              ctx.stroke();
            }
          }}
        />
      </div>
      <Button variant="secondary" onClick={clearCanvas} className="w-full flex items-center justify-center gap-2">
        <RotateCcw className="w-4 h-4" /> Clear
      </Button>
    </div>
  );
}
