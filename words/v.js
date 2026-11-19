(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'vase',
      word: 'vase',
      translation: 'váza',
      letter: 'V',
      category: 'objects',
      difficulty: 1,
      primaryColor: '#38bdf8',
      secondaryColor: '#ff2a85',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Flower stem & blossom inside vase
        ctx.strokeStyle = '#22c55e';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, -13);
        ctx.lineTo(0, -3);
        ctx.stroke();
        ctx.fillStyle = '#ff2a85';
        ctx.beginPath();
        ctx.arc(0, -13, 3.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fde047';
        ctx.beginPath();
        ctx.arc(0, -13, 1.5, 0, Math.PI * 2);
        ctx.fill();
        // Ceramic vase silhouette
        ctx.fillStyle = '#0284c7';
        ctx.strokeStyle = '#bae6fd';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(-6, -5);
        ctx.lineTo(6, -5);
        ctx.lineTo(4.5, -1);
        ctx.bezierCurveTo(12, 3, 10, 12, 6, 15);
        ctx.lineTo(-6, 15);
        ctx.bezierCurveTo(-10, 12, -12, 3, -4.5, -1);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Decorative stripe
        ctx.strokeStyle = '#7dd3fc';
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(-7.5, 6);
        ctx.lineTo(7.5, 6);
        ctx.stroke();
        ctx.restore();
      }
    },
    {
      id: 'violin',
      word: 'violin',
      translation: 'housle',
      letter: 'V',
      category: 'objects',
      difficulty: 2,
      primaryColor: '#d97706',
      secondaryColor: '#fde68a',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.rotate(Math.PI / 6);
        // Neck & scroll
        ctx.fillStyle = '#78350f';
        ctx.fillRect(-1.5, -16, 3, 14);
        ctx.beginPath();
        ctx.arc(0, -16.5, 2.5, 0, Math.PI * 2);
        ctx.fill();
        // Violin wooden figure-8 body
        ctx.fillStyle = '#b45309';
        ctx.strokeStyle = '#fde68a';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.ellipse(0, 1, 5.5, 5, 0, 0, Math.PI * 2);
        ctx.ellipse(0, 8.5, 7.2, 6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // Strings & tailpiece
        ctx.strokeStyle = '#fef3c7';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-0.8, -14);
        ctx.lineTo(-0.8, 12);
        ctx.moveTo(0.8, -14);
        ctx.lineTo(0.8, 12);
        ctx.stroke();
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(-2, 10, 4, 3.5);
        ctx.restore();
      }
    },
    {
      id: 'volcano',
      word: 'volcano',
      translation: 'sopka',
      letter: 'V',
      category: 'nature',
      difficulty: 2,
      primaryColor: '#ff5722',
      secondaryColor: '#fde047',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Lava eruption plume
        ctx.fillStyle = '#ff5722';
        ctx.beginPath();
        ctx.moveTo(-4, -3);
        ctx.quadraticCurveTo(-10, -14, -13, -11);
        ctx.quadraticCurveTo(-5, -16, 0, -11);
        ctx.quadraticCurveTo(5, -16, 13, -11);
        ctx.quadraticCurveTo(10, -14, 4, -3);
        ctx.closePath();
        ctx.fill();
        // Mountain cone
        ctx.fillStyle = '#475569';
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.moveTo(-16, 14);
        ctx.lineTo(-5, -4);
        ctx.lineTo(5, -4);
        ctx.lineTo(16, 14);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Molten lava streams
        ctx.fillStyle = '#fde047';
        ctx.beginPath();
        ctx.moveTo(-4, -4);
        ctx.lineTo(4, -4);
        ctx.lineTo(2, 6);
        ctx.lineTo(-1, 3);
        ctx.lineTo(-4, 8);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['V'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
