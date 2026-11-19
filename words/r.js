(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'robot',
      word: 'robot',
      translation: 'robot',
      letter: 'R',
      category: 'objects',
      difficulty: 2,
      primaryColor: '#00f3ff',
      secondaryColor: '#fbbf24',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, -10);
        ctx.lineTo(0, -15);
        ctx.stroke();
        ctx.fillStyle = '#ff3b5c';
        ctx.beginPath();
        ctx.arc(0, -16.5, 2.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#38bdf8';
        ctx.strokeStyle = '#e0f2fe';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.roundRect(-10, -10, 20, 14, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#fde047';
        ctx.beginPath();
        ctx.arc(-4.2, -4.5, 2.3, 0, Math.PI * 2);
        ctx.arc(4.2, -4.5, 2.3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#0f172a';
        ctx.fillRect(-5.5, -0.5, 11, 2.8);

        ctx.fillStyle = '#0284c7';
        ctx.beginPath();
        ctx.roundRect(-12, 6, 24, 9, 3);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#00ff9d';
        ctx.fillRect(-4, 9, 8, 3);
        ctx.restore();
      }
    },
    {
      id: 'rocket',
      word: 'rocket',
      translation: 'raketa',
      letter: 'R',
      category: 'space',
      difficulty: 2,
      primaryColor: '#f8fafc',
      secondaryColor: '#ff3b5c',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#ff9f1c';
        ctx.beginPath();
        ctx.moveTo(-4, 10);
        ctx.lineTo(0, 19);
        ctx.lineTo(4, 10);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = '#fde047';
        ctx.beginPath();
        ctx.moveTo(-2, 10);
        ctx.lineTo(0, 15);
        ctx.lineTo(2, 10);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#ff3b5c';
        ctx.beginPath();
        ctx.moveTo(-6, 3);
        ctx.lineTo(-13, 12);
        ctx.lineTo(-5, 10);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(6, 3);
        ctx.lineTo(13, 12);
        ctx.lineTo(5, 10);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#f8fafc';
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(0, -16);
        ctx.quadraticCurveTo(8, -5, 6, 10);
        ctx.lineTo(-6, 10);
        ctx.quadraticCurveTo(-8, -5, 0, -16);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ff3b5c';
        ctx.beginPath();
        ctx.moveTo(0, -16);
        ctx.quadraticCurveTo(4.5, -10, 4.8, -7);
        ctx.lineTo(-4.8, -7);
        ctx.quadraticCurveTo(-4.5, -10, 0, -16);
        ctx.fill();

        ctx.fillStyle = '#00f3ff';
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(0, 0, 3.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }
    },
    {
      id: 'rainbow',
      word: 'rainbow',
      translation: 'duha',
      letter: 'R',
      category: 'nature',
      difficulty: 2,
      primaryColor: '#ff3b5c',
      secondaryColor: '#00f3ff',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        const bands = [
          { r: 14, col: '#ff3b5c' },
          { r: 11.5, col: '#fbbf24' },
          { r: 9, col: '#22c55e' },
          { r: 6.5, col: '#38bdf8' }
        ];
        ctx.lineWidth = 2.6;
        ctx.lineCap = 'round';
        for (const b of bands) {
          ctx.strokeStyle = b.col;
          ctx.beginPath();
          ctx.arc(0, 6, b.r, Math.PI, 0);
          ctx.stroke();
        }
        // Fluffy clouds at ends
        ctx.fillStyle = '#f8fafc';
        for (const cx of [-12, 12]) {
          ctx.beginPath();
          ctx.arc(cx, 7, 3.5, 0, Math.PI * 2);
          ctx.arc(cx - 2.5, 8.5, 2.5, 0, Math.PI * 2);
          ctx.arc(cx + 2.5, 8.5, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['R'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
