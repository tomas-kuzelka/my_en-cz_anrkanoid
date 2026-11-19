(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'hat',
      word: 'hat',
      translation: 'klobouk',
      letter: 'H',
      category: 'objects',
      difficulty: 1,
      primaryColor: '#c084fc',
      secondaryColor: '#ff2a85',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.rotate(-0.12);
        ctx.fillStyle = '#7e22ce';
        ctx.strokeStyle = '#e9d5ff';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(-9, 5);
        ctx.lineTo(-7, -12);
        ctx.quadraticCurveTo(0, -14, 7, -12);
        ctx.lineTo(9, 5);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ff2a85';
        ctx.fillRect(-8.5, 0, 17, 4.5);

        ctx.fillStyle = '#9333ea';
        ctx.beginPath();
        ctx.ellipse(0, 6, 16, 4.2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }
    },
    {
      id: 'heart',
      word: 'heart',
      translation: 'srdce',
      letter: 'H',
      category: 'objects',
      difficulty: 1,
      primaryColor: '#ff2a85',
      secondaryColor: '#ffb3c6',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#ff2a85';
        ctx.strokeStyle = '#ffd6e7';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(0, 14);
        ctx.bezierCurveTo(-16, 4, -17, -12, -7, -12);
        ctx.bezierCurveTo(-2, -12, 0, -7, 0, -6);
        ctx.bezierCurveTo(0, -7, 2, -12, 7, -12);
        ctx.bezierCurveTo(17, -12, 16, 4, 0, 14);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.strokeStyle = 'rgba(255,255,255,0.75)';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.arc(-6.5, -5.5, 3.8, Math.PI * 1.05, Math.PI * 1.55);
        ctx.stroke();
        ctx.restore();
      }
    },
    {
      id: 'house',
      word: 'house',
      translation: 'dům',
      letter: 'H',
      category: 'objects',
      difficulty: 1,
      primaryColor: '#fb923c',
      secondaryColor: '#ef4444',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#b91c1c';
        ctx.fillRect(6, -14, 4.5, 9);

        ctx.fillStyle = '#fde68a';
        ctx.strokeStyle = '#fffbeb';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.rect(-11, -1, 22, 15);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ef4444';
        ctx.strokeStyle = '#fecaca';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.moveTo(-15, 0);
        ctx.lineTo(0, -14);
        ctx.lineTo(15, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#92400e';
        ctx.beginPath();
        ctx.roundRect(-3, 5, 6, 9, [2, 2, 0, 0]);
        ctx.fill();

        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(-9, 2, 4.5, 4.5);
        ctx.fillRect(4.5, 2, 4.5, 4.5);
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['H'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
