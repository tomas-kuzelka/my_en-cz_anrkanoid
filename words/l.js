(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'leaf',
      word: 'leaf',
      translation: 'list',
      letter: 'L',
      category: 'nature',
      difficulty: 1,
      primaryColor: '#4ade80',
      secondaryColor: '#16a34a',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#22c55e';
        ctx.strokeStyle = '#bbf7d0';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(-12, 11);
        ctx.bezierCurveTo(-12, -8, 2, -15, 13, -13);
        ctx.bezierCurveTo(15, 0, 6, 13, -12, 11);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Central vein & stem
        ctx.strokeStyle = '#dcfce7';
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(-15, 14);
        ctx.lineTo(10, -10);
        ctx.moveTo(-3, 2);
        ctx.lineTo(-4, -5);
        ctx.moveTo(2, -2);
        ctx.lineTo(8, 1);
        ctx.stroke();
        ctx.restore();
      }
    },
    {
      id: 'lemon',
      word: 'lemon',
      translation: 'citron',
      letter: 'L',
      category: 'food',
      difficulty: 1,
      primaryColor: '#fde047',
      secondaryColor: '#4ade80',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.rotate(-0.25);
        // Citrus tips + oval body
        ctx.fillStyle = '#fde047';
        ctx.strokeStyle = '#fef9c3';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(-15, 0);
        ctx.quadraticCurveTo(-11, -10, 0, -10);
        ctx.quadraticCurveTo(11, -10, 15, 0);
        ctx.quadraticCurveTo(11, 10, 0, 10);
        ctx.quadraticCurveTo(-11, 10, -15, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Green leaf
        ctx.fillStyle = '#22c55e';
        ctx.beginPath();
        ctx.ellipse(9, -9, 5, 2.5, -0.5, 0, Math.PI * 2);
        ctx.fill();
        // Shine
        ctx.strokeStyle = 'rgba(255,255,255,0.75)';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.arc(-2, -2, 6, Math.PI * 1.15, Math.PI * 1.55);
        ctx.stroke();
        ctx.restore();
      }
    },
    {
      id: 'lightning',
      word: 'lightning',
      translation: 'blesk',
      letter: 'L',
      category: 'nature',
      difficulty: 3,
      primaryColor: '#fde047',
      secondaryColor: '#00f3ff',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#fde047';
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.6;
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(3, -16);
        ctx.lineTo(-9, 1);
        ctx.lineTo(-1, 1);
        ctx.lineTo(-4, 16);
        ctx.lineTo(10, -2);
        ctx.lineTo(1, -2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.strokeStyle = '#00f3ff';
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(-12, -7);
        ctx.lineTo(-9, -9);
        ctx.moveTo(10, 6);
        ctx.lineTo(13, 8);
        ctx.stroke();
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['L'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
