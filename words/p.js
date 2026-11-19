(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'pencil',
      word: 'pencil',
      translation: 'tužka',
      letter: 'P',
      category: 'objects',
      difficulty: 2,
      primaryColor: '#fbbf24',
      secondaryColor: '#f472b6',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.rotate(Math.PI / 4);
        // Pink eraser & ferrule
        ctx.fillStyle = '#f472b6';
        ctx.beginPath();
        ctx.roundRect(-4, -16, 8, 5, [3, 3, 0, 0]);
        ctx.fill();
        ctx.fillStyle = '#cbd5e1';
        ctx.fillRect(-4, -11, 8, 3);
        // Yellow pencil shaft
        ctx.fillStyle = '#fbbf24';
        ctx.strokeStyle = '#fef3c7';
        ctx.lineWidth = 1.1;
        ctx.fillRect(-4, -8, 8, 17);
        ctx.strokeRect(-4, -8, 8, 17);
        // Wooden cone & graphite tip
        ctx.fillStyle = '#fde68a';
        ctx.beginPath();
        ctx.moveTo(-4, 9);
        ctx.lineTo(4, 9);
        ctx.lineTo(0, 17);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = '#1e293b';
        ctx.beginPath();
        ctx.moveTo(-1.5, 14);
        ctx.lineTo(1.5, 14);
        ctx.lineTo(0, 17);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'planet',
      word: 'planet',
      translation: 'planeta',
      letter: 'P',
      category: 'space',
      difficulty: 2,
      primaryColor: '#a855f7',
      secondaryColor: '#00f3ff',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.strokeStyle = '#00f3ff';
        ctx.lineWidth = 2.6;
        ctx.beginPath();
        ctx.ellipse(0, 0, 17, 5.5, -0.35, Math.PI, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#9333ea';
        ctx.strokeStyle = '#e9d5ff';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.strokeStyle = '#f472b6';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-8.5, -3);
        ctx.quadraticCurveTo(0, 0, 8.5, -3);
        ctx.stroke();

        ctx.strokeStyle = '#67e8f9';
        ctx.lineWidth = 2.8;
        ctx.beginPath();
        ctx.ellipse(0, 0, 17, 5.5, -0.35, 0, Math.PI);
        ctx.stroke();
        ctx.restore();
      }
    },
    {
      id: 'pineapple',
      word: 'pineapple',
      translation: 'ananas',
      letter: 'P',
      category: 'food',
      difficulty: 3,
      primaryColor: '#fbbf24',
      secondaryColor: '#22c55e',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#22c55e';
        for (const [dx, dy] of [[-7, -11], [0, -17], [7, -11], [-4, -14], [4, -14]]) {
          ctx.beginPath();
          ctx.moveTo(-3, -3);
          ctx.lineTo(dx, dy);
          ctx.lineTo(3, -3);
          ctx.closePath();
          ctx.fill();
        }

        ctx.fillStyle = '#f59e0b';
        ctx.strokeStyle = '#fde68a';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.ellipse(0, 5, 9, 11, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.strokeStyle = '#92400e';
        ctx.lineWidth = 1.1;
        for (const off of [-4, 0, 4]) {
          ctx.beginPath();
          ctx.moveTo(off - 4, -2);
          ctx.lineTo(off + 4, 12);
          ctx.moveTo(off + 4, -2);
          ctx.lineTo(off - 4, 12);
          ctx.stroke();
        }
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['P'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
