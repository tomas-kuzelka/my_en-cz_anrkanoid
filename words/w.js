(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'watch',
      word: 'watch',
      translation: 'hodinky',
      letter: 'W',
      category: 'objects',
      difficulty: 1,
      primaryColor: '#38bdf8',
      secondaryColor: '#fbbf24',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Watch straps
        ctx.fillStyle = '#334155';
        ctx.fillRect(-4.5, -16, 9, 32);
        // Watch bezel & dial
        ctx.fillStyle = '#fbbf24';
        ctx.strokeStyle = '#fef3c7';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.arc(0, 0, 9.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#f8fafc';
        ctx.beginPath();
        ctx.arc(0, 0, 7.2, 0, Math.PI * 2);
        ctx.fill();
        // Hands & crown button
        ctx.fillStyle = '#fbbf24';
        ctx.fillRect(9.5, -1.5, 2.5, 3);
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(0, -4.5);
        ctx.lineTo(0, 0);
        ctx.lineTo(4, 2);
        ctx.stroke();
        ctx.restore();
      }
    },
    {
      id: 'whale',
      word: 'whale',
      translation: 'velryba',
      letter: 'W',
      category: 'animals',
      difficulty: 1,
      primaryColor: '#38bdf8',
      secondaryColor: '#e0f2fe',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Water spout
        ctx.strokeStyle = '#bae6fd';
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(-2, -7);
        ctx.quadraticCurveTo(-5, -14, -8, -12);
        ctx.moveTo(-1, -7);
        ctx.quadraticCurveTo(2, -14, 5, -12);
        ctx.stroke();
        // Tail fluke
        ctx.fillStyle = '#0284c7';
        ctx.beginPath();
        ctx.moveTo(8, 3);
        ctx.lineTo(16, -4);
        ctx.lineTo(14, 3);
        ctx.lineTo(16, 8);
        ctx.closePath();
        ctx.fill();
        // Whale body
        ctx.fillStyle = '#0ea5e9';
        ctx.strokeStyle = '#bae6fd';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.ellipse(-2, 2, 12, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // Light belly & eye
        ctx.fillStyle = '#e0f2fe';
        ctx.beginPath();
        ctx.ellipse(-4, 6.5, 8.5, 3.2, 0, 0, Math.PI);
        ctx.fill();
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(-8.5, 0.5, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'watermelon',
      word: 'watermelon',
      translation: 'meloun',
      letter: 'W',
      category: 'food',
      difficulty: 3,
      primaryColor: '#ff3b5c',
      secondaryColor: '#22c55e',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Outer green rind arc
        ctx.fillStyle = '#16a34a';
        ctx.strokeStyle = '#bbf7d0';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.arc(0, -4, 15, 0, Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // White inner rind + sweet red flesh
        ctx.fillStyle = '#dcfce7';
        ctx.beginPath();
        ctx.arc(0, -4, 12.6, 0, Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = '#ff3b5c';
        ctx.beginPath();
        ctx.arc(0, -4, 11, 0, Math.PI);
        ctx.closePath();
        ctx.fill();
        // Black seeds
        ctx.fillStyle = '#0f172a';
        for (const [sx, sy] of [[-5, 0], [0, 2.5], [5, 0], [-2, -1], [3, 3]]) {
          ctx.beginPath();
          ctx.arc(sx, sy, 1, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['W'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
