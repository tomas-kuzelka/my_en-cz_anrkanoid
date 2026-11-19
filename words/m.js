(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'moon',
      word: 'moon',
      translation: 'měsíc',
      letter: 'M',
      category: 'space',
      difficulty: 1,
      primaryColor: '#fde047',
      secondaryColor: '#bae6fd',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#fde047';
        ctx.strokeStyle = '#fef9c3';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(-1, 0, 14, Math.PI * 0.32, Math.PI * 1.68, false);
        ctx.bezierCurveTo(-4, -9, -4, 9, 6.4, 11.8);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#e0f2fe';
        for (const [sx, sy, sr] of [[8, -6, 3], [11, 4, 2]]) {
          ctx.beginPath();
          ctx.moveTo(sx, sy - sr);
          ctx.lineTo(sx + sr * 0.35, sy - sr * 0.35);
          ctx.lineTo(sx + sr, sy);
          ctx.lineTo(sx + sr * 0.35, sy + sr * 0.35);
          ctx.lineTo(sx, sy + sr);
          ctx.lineTo(sx - sr * 0.35, sy + sr * 0.35);
          ctx.lineTo(sx - sr, sy);
          ctx.lineTo(sx - sr * 0.35, sy - sr * 0.35);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      }
    },
    {
      id: 'mountain',
      word: 'mountain',
      translation: 'hora',
      letter: 'M',
      category: 'nature',
      difficulty: 3,
      primaryColor: '#60a5fa',
      secondaryColor: '#f8fafc',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#3b82f6';
        ctx.beginPath();
        ctx.moveTo(-2, 12);
        ctx.lineTo(7, -8);
        ctx.lineTo(16, 12);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#1d4ed8';
        ctx.strokeStyle = '#93c5fd';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.moveTo(-16, 12);
        ctx.lineTo(-3, -13);
        ctx.lineTo(10, 12);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#f8fafc';
        ctx.beginPath();
        ctx.moveTo(-3, -13);
        ctx.lineTo(-8, -3);
        ctx.lineTo(-5, -1);
        ctx.lineTo(-2, -4);
        ctx.lineTo(2, -3);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(7, -8);
        ctx.lineTo(3.5, -1);
        ctx.lineTo(7, -2.5);
        ctx.lineTo(10.5, -1);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'mushroom',
      word: 'mushroom',
      translation: 'houba',
      letter: 'M',
      category: 'nature',
      difficulty: 3,
      primaryColor: '#ff3b5c',
      secondaryColor: '#fef3c7',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#fef3c7';
        ctx.strokeStyle = '#fde68a';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.roundRect(-5.5, 1, 11, 13, [2, 2, 5, 5]);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ff3b5c';
        ctx.strokeStyle = '#fecdd3';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.arc(0, 2, 14, Math.PI, 0);
        ctx.quadraticCurveTo(0, 5, -14, 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        for (const [sx, sy, sr] of [[-6, -4, 2.4], [1, -7.5, 2.8], [7, -3, 2.1], [-1.5, -1, 1.7]]) {
          ctx.beginPath();
          ctx.arc(sx, sy, sr, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['M'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
