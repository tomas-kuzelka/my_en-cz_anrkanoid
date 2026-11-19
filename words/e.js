(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'egg',
      word: 'egg',
      translation: 'vejce',
      letter: 'E',
      category: 'food',
      difficulty: 1,
      primaryColor: '#fef3c7',
      secondaryColor: '#f59e0b',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#fef3c7';
        ctx.strokeStyle = '#fde68a';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, -15);
        ctx.bezierCurveTo(10, -14, 13, 2, 10, 9);
        ctx.bezierCurveTo(8, 15, -8, 15, -10, 9);
        ctx.bezierCurveTo(-13, 2, -10, -14, 0, -15);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Warm golden highlight & subtle crack stripe
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(-3.5, -5, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.arc(-3, -2, 6, Math.PI * 1.1, Math.PI * 1.45);
        ctx.stroke();
        ctx.restore();
      }
    },
    {
      id: 'eye',
      word: 'eye',
      translation: 'oko',
      letter: 'E',
      category: 'animals',
      difficulty: 1,
      primaryColor: '#38bdf8',
      secondaryColor: '#f8fafc',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Almond sclera
        ctx.fillStyle = '#f8fafc';
        ctx.strokeStyle = '#bae6fd';
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(-16, 0);
        ctx.quadraticCurveTo(0, -14, 16, 0);
        ctx.quadraticCurveTo(0, 14, -16, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Iris
        ctx.fillStyle = '#0284c7';
        ctx.beginPath();
        ctx.arc(0, 0, 6.8, 0, Math.PI * 2);
        ctx.fill();
        // Pupil & glint
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(0, 0, 3.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(-2.2, -2.2, 1.7, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'elephant',
      word: 'elephant',
      translation: 'slon',
      letter: 'E',
      category: 'animals',
      difficulty: 3,
      primaryColor: '#94a3b8',
      secondaryColor: '#f472b6',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#94a3b8';
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.roundRect(-13, -4, 18, 12, 6);
        ctx.fill();
        ctx.stroke();
        ctx.fillRect(-11, 6, 4.5, 7);
        ctx.fillRect(-3, 6, 4.5, 7);

        ctx.beginPath();
        ctx.arc(5, -4, 7.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.lineWidth = 3.8;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#94a3b8';
        ctx.beginPath();
        ctx.moveTo(11, -3);
        ctx.quadraticCurveTo(16, 0, 14, 7);
        ctx.quadraticCurveTo(13, 10, 10, 9);
        ctx.stroke();

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(9, 1);
        ctx.quadraticCurveTo(12, 3, 14, 1);
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.beginPath();
        ctx.ellipse(0, -3, 4.5, 6.5, -0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#f472b6';
        ctx.beginPath();
        ctx.ellipse(0, -3, 2.2, 3.8, -0.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(7.5, -6, 1.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['E'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
