(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'ghost',
      word: 'ghost',
      translation: 'duch',
      letter: 'G',
      category: 'objects',
      difficulty: 1,
      primaryColor: '#e2e8f0',
      secondaryColor: '#00f3ff',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#f1f5f9';
        ctx.strokeStyle = '#67e8f9';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(0, -3, 11, Math.PI, 0);
        ctx.lineTo(11, 13);
        ctx.quadraticCurveTo(7.5, 9, 4, 13);
        ctx.quadraticCurveTo(0, 9, -4, 13);
        ctx.quadraticCurveTo(-7.5, 9, -11, 13);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Spooky friendly eyes & mouth
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(-4.2, -4, 2.1, 0, Math.PI * 2);
        ctx.arc(4.2, -4, 2.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(0, 2, 2.4, 3.2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'guitar',
      word: 'guitar',
      translation: 'kytara',
      letter: 'G',
      category: 'objects',
      difficulty: 2,
      primaryColor: '#f97316',
      secondaryColor: '#fde047',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.rotate(Math.PI / 4);
        ctx.fillStyle = '#78350f';
        ctx.fillRect(-1.8, -16, 3.6, 16);
        ctx.fillStyle = '#451a03';
        ctx.beginPath();
        ctx.roundRect(-3, -19, 6, 4.5, 1.5);
        ctx.fill();

        ctx.fillStyle = '#f97316';
        ctx.strokeStyle = '#fed7aa';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.arc(0, 2, 6, 0, Math.PI * 2);
        ctx.arc(0, 9.5, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#291509';
        ctx.beginPath();
        ctx.arc(0, 3.5, 2.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fde047';
        ctx.fillRect(-3.5, 11, 7, 1.8);
        ctx.restore();
      }
    },
    {
      id: 'grapes',
      word: 'grapes',
      translation: 'hrozny',
      letter: 'G',
      category: 'food',
      difficulty: 2,
      primaryColor: '#a855f7',
      secondaryColor: '#4ade80',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Stem & leaf
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(0, -15);
        ctx.lineTo(0, -7);
        ctx.stroke();
        ctx.fillStyle = '#22c55e';
        ctx.beginPath();
        ctx.ellipse(5.5, -11, 5, 2.6, -0.35, 0, Math.PI * 2);
        ctx.fill();
        // Grape cluster
        const berries = [
          [-5.5, -5], [0, -5], [5.5, -5],
          [-4.5, 0.5], [1, 0.5], [5.5, 0.5],
          [-2.5, 6], [3, 6],
          [0, 11.5]
        ];
        for (const [bx, by] of berries) {
          ctx.fillStyle = '#9333ea';
          ctx.strokeStyle = '#e9d5ff';
          ctx.lineWidth = 1.1;
          ctx.beginPath();
          ctx.arc(bx, by, 3.8, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = 'rgba(255,255,255,0.5)';
          ctx.beginPath();
          ctx.arc(bx - 1.1, by - 1.1, 1, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['G'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
