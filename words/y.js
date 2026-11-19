(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'yoyo',
      word: 'yoyo',
      translation: 'jojo',
      letter: 'Y',
      category: 'objects',
      difficulty: 1,
      primaryColor: '#ff2a85',
      secondaryColor: '#fde047',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // String rising up
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(0, -16);
        ctx.quadraticCurveTo(3, -10, 0, -4);
        ctx.stroke();
        // Yo-yo disc
        ctx.fillStyle = '#ff2a85';
        ctx.strokeStyle = '#fbcfe8';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(0, 4, 11, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // Swirl star hub
        ctx.fillStyle = '#fde047';
        ctx.beginPath();
        ctx.arc(0, 4, 5.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(0, 4, 1.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'yacht',
      word: 'yacht',
      translation: 'jachta',
      letter: 'Y',
      category: 'objects',
      difficulty: 1,
      primaryColor: '#f8fafc',
      secondaryColor: '#38bdf8',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Main triangular sail
        ctx.fillStyle = '#f8fafc';
        ctx.strokeStyle = '#bae6fd';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(-1, -15);
        ctx.lineTo(12, 4);
        ctx.lineTo(-1, 4);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Front jib sail
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.moveTo(-2, -12);
        ctx.lineTo(-11, 4);
        ctx.lineTo(-2, 4);
        ctx.closePath();
        ctx.fill();
        // Boat hull
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.moveTo(-14, 6);
        ctx.lineTo(14, 6);
        ctx.lineTo(9, 13);
        ctx.lineTo(-10, 13);
        ctx.closePath();
        ctx.fill();
        // Sea wave line
        ctx.strokeStyle = '#00f3ff';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(-15, 14);
        ctx.lineTo(15, 14);
        ctx.stroke();
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['Y'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
