(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'tree',
      word: 'tree',
      translation: 'strom',
      letter: 'T',
      category: 'nature',
      difficulty: 1,
      primaryColor: '#22c55e',
      secondaryColor: '#a16207',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#a16207';
        ctx.strokeStyle = '#fde68a';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-3.5, 16);
        ctx.lineTo(-2.5, 2);
        ctx.lineTo(2.5, 2);
        ctx.lineTo(3.5, 16);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#16a34a';
        ctx.beginPath();
        ctx.arc(-6, -1, 7.5, 0, Math.PI * 2);
        ctx.arc(6, -1, 7.5, 0, Math.PI * 2);
        ctx.arc(0, -8, 9, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#4ade80';
        ctx.beginPath();
        ctx.arc(-2, -9, 5, 0, Math.PI * 2);
        ctx.arc(4, -3, 3.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'train',
      word: 'train',
      translation: 'vlak',
      letter: 'T',
      category: 'objects',
      difficulty: 1,
      primaryColor: '#ef4444',
      secondaryColor: '#fbbf24',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Smokestack & steam puff
        ctx.fillStyle = '#475569';
        ctx.fillRect(6, -13, 4.5, 7);
        ctx.fillStyle = '#e2e8f0';
        ctx.beginPath();
        ctx.arc(5, -15, 2.5, 0, Math.PI * 2);
        ctx.arc(1, -17, 2.2, 0, Math.PI * 2);
        ctx.fill();
        // Cab
        ctx.fillStyle = '#dc2626';
        ctx.strokeStyle = '#fecaca';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.roundRect(-14, -10, 13, 18, 2);
        ctx.fill();
        ctx.stroke();
        // Boiler
        ctx.fillStyle = '#2563eb';
        ctx.beginPath();
        ctx.roundRect(-1, -6, 15, 14, [0, 4, 2, 0]);
        ctx.fill();
        ctx.stroke();
        // Cab window
        ctx.fillStyle = '#bae6fd';
        ctx.fillRect(-11, -7, 7, 5.5);
        // Wheels
        for (const wx of [-9, 1, 9]) {
          ctx.fillStyle = '#1e293b';
          ctx.beginPath();
          ctx.arc(wx, 10, 3.6, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#fbbf24';
          ctx.beginPath();
          ctx.arc(wx, 10, 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    },
    {
      id: 'telescope',
      word: 'telescope',
      translation: 'dalekohled',
      letter: 'T',
      category: 'space',
      difficulty: 3,
      primaryColor: '#fbbf24',
      secondaryColor: '#38bdf8',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2.2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(0, 1);
        ctx.lineTo(-8, 15);
        ctx.moveTo(0, 1);
        ctx.lineTo(8, 15);
        ctx.moveTo(0, 1);
        ctx.lineTo(0, 15);
        ctx.stroke();

        ctx.save();
        ctx.translate(0, -1);
        ctx.rotate(-0.48);
        ctx.fillStyle = '#f59e0b';
        ctx.strokeStyle = '#fef3c7';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.roundRect(-13, -2.5, 16, 5, 1.5);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.roundRect(2, -4, 11, 8, 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#00f3ff';
        ctx.fillRect(12, -3.5, 2.5, 7);
        ctx.restore();
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['T'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
