(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'xray',
      word: 'xray',
      translation: 'rentgen',
      letter: 'X',
      category: 'objects',
      difficulty: 1,
      primaryColor: '#00f3ff',
      secondaryColor: '#e0f2fe',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // X-ray film sheet
        ctx.fillStyle = '#0f172a';
        ctx.strokeStyle = '#00f3ff';
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.roundRect(-12, -14, 24, 28, 3);
        ctx.fill();
        ctx.stroke();
        // Glowing cyan ribcage spine & ribs
        ctx.strokeStyle = '#bae6fd';
        ctx.lineWidth = 2.2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(0, -10);
        ctx.lineTo(0, 10);
        ctx.stroke();
        ctx.lineWidth = 1.8;
        for (const ry of [-6, -2, 2, 6]) {
          ctx.beginPath();
          ctx.moveTo(-7, ry + 1);
          ctx.quadraticCurveTo(0, ry - 2, 7, ry + 1);
          ctx.stroke();
        }
        ctx.restore();
      }
    },
    {
      id: 'xylophone',
      word: 'xylophone',
      translation: 'xylofon',
      letter: 'X',
      category: 'objects',
      difficulty: 3,
      primaryColor: '#ff3b5c',
      secondaryColor: '#fde047',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Wooden frame rails
        ctx.strokeStyle = '#92400e';
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(-14, -7);
        ctx.lineTo(14, -4);
        ctx.moveTo(-14, 7);
        ctx.lineTo(14, 4);
        ctx.stroke();
        // Rainbow tone bars
        const bars = [
          { x: -12, h: 20, col: '#ff3b5c' },
          { x: -6, h: 17, col: '#f97316' },
          { x: 0, h: 14, col: '#fde047' },
          { x: 6, h: 11, col: '#22c55e' },
          { x: 12, h: 8.5, col: '#38bdf8' }
        ];
        for (const b of bars) {
          ctx.fillStyle = b.col;
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.roundRect(b.x - 2.3, -b.h / 2, 4.6, b.h, 1.5);
          ctx.fill();
          ctx.stroke();
        }
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['X'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
