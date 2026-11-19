(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'book',
      word: 'book',
      translation: 'kniha',
      letter: 'B',
      category: 'objects',
      difficulty: 1,
      primaryColor: '#38bdf8',
      secondaryColor: '#f8fafc',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#0284c7';
        ctx.strokeStyle = '#bae6fd';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.roundRect(-15, -10, 30, 21, 3);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#f8fafc';
        ctx.beginPath();
        ctx.roundRect(-13, -8, 12, 17, 1.5);
        ctx.roundRect(1, -8, 12, 17, 1.5);
        ctx.fill();

        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1.3;
        for (const y of [-4, 0, 4]) {
          ctx.beginPath();
          ctx.moveTo(-10.5, y);
          ctx.lineTo(-3.5, y);
          ctx.moveTo(3.5, y);
          ctx.lineTo(10.5, y);
          ctx.stroke();
        }

        ctx.fillStyle = '#ff3b5c';
        ctx.beginPath();
        ctx.moveTo(5, 9);
        ctx.lineTo(5, 16);
        ctx.lineTo(7, 14);
        ctx.lineTo(9, 16);
        ctx.lineTo(9, 9);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'banana',
      word: 'banana',
      translation: 'banán',
      letter: 'B',
      category: 'food',
      difficulty: 2,
      primaryColor: '#fde047',
      secondaryColor: '#a16207',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#fde047';
        ctx.strokeStyle = '#fef08a';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.moveTo(10, -13);
        ctx.bezierCurveTo(16, -2, 8, 13, -13, 12);
        ctx.bezierCurveTo(-2, 7, 5, -2, 7, -12);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(7, -8);
        ctx.quadraticCurveTo(5, 4, -8, 10);
        ctx.stroke();

        ctx.fillStyle = '#78350f';
        ctx.fillRect(6.5, -15, 3.5, 3);
        ctx.beginPath();
        ctx.arc(-13, 12, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'bridge',
      word: 'bridge',
      translation: 'most',
      letter: 'B',
      category: 'objects',
      difficulty: 2,
      primaryColor: '#ef4444',
      secondaryColor: '#38bdf8',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-16, 12);
        ctx.lineTo(16, 12);
        ctx.stroke();

        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(-16, 5);
        ctx.quadraticCurveTo(-12, -2, -8, -11);
        ctx.quadraticCurveTo(0, 3, 8, -11);
        ctx.quadraticCurveTo(12, -2, 16, 5);
        ctx.stroke();

        ctx.lineWidth = 1;
        for (const vx of [-4, 0, 4]) {
          ctx.beginPath();
          ctx.moveTo(vx, -2);
          ctx.lineTo(vx, 5);
          ctx.stroke();
        }

        ctx.fillStyle = '#ef4444';
        ctx.fillRect(-9.5, -12, 3, 22);
        ctx.fillRect(6.5, -12, 3, 22);
        ctx.fillStyle = '#fca5a5';
        ctx.fillRect(-16, 4, 32, 3.2);
        ctx.restore();
      }
    },
    {
      id: 'butterfly',
      word: 'butterfly',
      translation: 'motýl',
      letter: 'B',
      category: 'animals',
      difficulty: 3,
      primaryColor: '#c084fc',
      secondaryColor: '#ff2a85',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        for (const side of [-1, 1]) {
          ctx.fillStyle = '#c084fc';
          ctx.strokeStyle = '#f5d0fe';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(side * 1.5, -2);
          ctx.bezierCurveTo(side * 14, -15, side * 18, 0, side * 2, 2);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#ff2a85';
          ctx.beginPath();
          ctx.moveTo(side * 1.5, 2);
          ctx.bezierCurveTo(side * 14, 4, side * 11, 15, side * 1.5, 7);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#fde047';
          ctx.beginPath();
          ctx.arc(side * 8.5, -4, 2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = '#1e293b';
        ctx.beginPath();
        ctx.roundRect(-1.8, -7, 3.6, 15, 2);
        ctx.fill();
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(-1, -7);
        ctx.quadraticCurveTo(-4, -13, -6, -12);
        ctx.moveTo(1, -7);
        ctx.quadraticCurveTo(4, -13, 6, -12);
        ctx.stroke();
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['B'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
