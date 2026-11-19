(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'igloo',
      word: 'igloo',
      translation: 'iglú',
      letter: 'I',
      category: 'objects',
      difficulty: 1,
      primaryColor: '#bae6fd',
      secondaryColor: '#38bdf8',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Main ice dome
        ctx.fillStyle = '#e0f2fe';
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(-1, 8, 13, Math.PI, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Ice brick seams
        ctx.strokeStyle = '#7dd3fc';
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(-12.5, 2);
        ctx.lineTo(10.5, 2);
        ctx.moveTo(-9, -3);
        ctx.lineTo(7, -3);
        ctx.moveTo(-4, -3);
        ctx.lineTo(-4, 2);
        ctx.moveTo(2, -3);
        ctx.lineTo(2, 2);
        ctx.stroke();
        // Tunnel entrance
        ctx.fillStyle = '#bae6fd';
        ctx.strokeStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(8, 8, 5.5, Math.PI, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#0c4a6e';
        ctx.beginPath();
        ctx.arc(8, 8, 3.3, Math.PI, 0);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'island',
      word: 'island',
      translation: 'ostrov',
      letter: 'I',
      category: 'nature',
      difficulty: 2,
      primaryColor: '#facc15',
      secondaryColor: '#22c55e',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#0284c7';
        ctx.beginPath();
        ctx.roundRect(-16, 8, 32, 6, 3);
        ctx.fill();

        ctx.fillStyle = '#facc15';
        ctx.beginPath();
        ctx.arc(0, 10, 12, Math.PI, 0);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = '#92400e';
        ctx.lineWidth = 3.2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(-2, 3);
        ctx.quadraticCurveTo(-5, -5, 2, -10);
        ctx.stroke();

        ctx.fillStyle = '#22c55e';
        const fronds = [[-9, -12, -3, -14], [11, -12, 5, -15], [-8, -5, -2, -10], [10, -5, 4, -10]];
        for (const [ex, ey, cx, cy] of fronds) {
          ctx.beginPath();
          ctx.moveTo(2, -10);
          ctx.quadraticCurveTo(cx, cy, ex, ey);
          ctx.quadraticCurveTo(cx, cy + 3.5, 2, -10);
          ctx.fill();
        }
        ctx.restore();
      }
    },
    {
      id: 'icecream',
      word: 'icecream',
      translation: 'zmrzlina',
      letter: 'I',
      category: 'food',
      difficulty: 3,
      primaryColor: '#f472b6',
      secondaryColor: '#fde68a',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Waffle cone
        ctx.fillStyle = '#f59e0b';
        ctx.strokeStyle = '#fde68a';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(-7, 0);
        ctx.lineTo(7, 0);
        ctx.lineTo(0, 16);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Scoops
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(4, -3, 5.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#f472b6';
        ctx.beginPath();
        ctx.arc(-4, -3, 5.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fef3c7';
        ctx.beginPath();
        ctx.arc(0, -8.5, 6, 0, Math.PI * 2);
        ctx.fill();
        // Cherry on top
        ctx.fillStyle = '#ff3b5c';
        ctx.beginPath();
        ctx.arc(0, -15, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['I'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
