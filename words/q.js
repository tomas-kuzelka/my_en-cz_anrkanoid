(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'queen',
      word: 'queen',
      translation: 'královna',
      letter: 'Q',
      category: 'objects',
      difficulty: 1,
      primaryColor: '#c084fc',
      secondaryColor: '#fde047',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Tiara / Queen crown
        ctx.fillStyle = '#fde047';
        ctx.strokeStyle = '#fef9c3';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.moveTo(-12, 9);
        ctx.lineTo(-14, -4);
        ctx.lineTo(-6, 2);
        ctx.lineTo(0, -12);
        ctx.lineTo(6, 2);
        ctx.lineTo(14, -4);
        ctx.lineTo(12, 9);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Pearl tips
        ctx.fillStyle = '#f8fafc';
        for (const [px, py] of [[-14, -5], [0, -13], [14, -5]]) {
          ctx.beginPath();
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
        // Amethyst center gem
        ctx.fillStyle = '#a855f7';
        ctx.beginPath();
        ctx.arc(0, 3, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'quill',
      word: 'quill',
      translation: 'ptačí brk',
      letter: 'Q',
      category: 'objects',
      difficulty: 1,
      primaryColor: '#f8fafc',
      secondaryColor: '#38bdf8',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Inkpot
        ctx.fillStyle = '#1e293b';
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.roundRect(-12, 5, 11, 10, 3);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(-10, 2, 7, 3);
        // Feather plume
        ctx.fillStyle = '#f8fafc';
        ctx.strokeStyle = '#bae6fd';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(-6, 3);
        ctx.bezierCurveTo(-2, -9, 6, -15, 14, -14);
        ctx.bezierCurveTo(13, -4, 6, 3, -4, 4);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Central shaft
        ctx.strokeStyle = '#0284c7';
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(-6, 5);
        ctx.quadraticCurveTo(3, -5, 12, -12);
        ctx.stroke();
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['Q'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
