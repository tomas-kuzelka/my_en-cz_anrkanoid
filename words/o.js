(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'owl',
      word: 'owl',
      translation: 'sova',
      letter: 'O',
      category: 'animals',
      difficulty: 1,
      primaryColor: '#a16207',
      secondaryColor: '#fde047',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Ear tufts
        ctx.fillStyle = '#92400e';
        ctx.beginPath();
        ctx.moveTo(-9, -7);
        ctx.lineTo(-11, -15);
        ctx.lineTo(-3, -10);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(9, -7);
        ctx.lineTo(11, -15);
        ctx.lineTo(3, -10);
        ctx.closePath();
        ctx.fill();
        // Owl body
        ctx.fillStyle = '#b45309';
        ctx.strokeStyle = '#fde68a';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.ellipse(0, 2, 11, 13, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // Belly chest
        ctx.fillStyle = '#fef3c7';
        ctx.beginPath();
        ctx.ellipse(0, 7, 6.5, 6.5, 0, 0, Math.PI * 2);
        ctx.fill();
        // Big golden eyes
        for (const ex of [-4.5, 4.5]) {
          ctx.fillStyle = '#fde047';
          ctx.beginPath();
          ctx.arc(ex, -4, 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#0f172a';
          ctx.beginPath();
          ctx.arc(ex, -4, 1.9, 0, Math.PI * 2);
          ctx.fill();
        }
        // Beak
        ctx.fillStyle = '#f97316';
        ctx.beginPath();
        ctx.moveTo(-2, -1.5);
        ctx.lineTo(2, -1.5);
        ctx.lineTo(0, 2);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'orange',
      word: 'orange',
      translation: 'pomeranč',
      letter: 'O',
      category: 'food',
      difficulty: 2,
      primaryColor: '#fb923c',
      secondaryColor: '#22c55e',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Citrus orb
        ctx.fillStyle = '#f97316';
        ctx.strokeStyle = '#fed7aa';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(0, 2, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // Green leaf & stem
        ctx.fillStyle = '#22c55e';
        ctx.beginPath();
        ctx.ellipse(4, -11, 5.5, 2.7, -0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, -10);
        ctx.lineTo(0, -14);
        ctx.stroke();
        // Dimple pores & gloss
        ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
        ctx.beginPath();
        ctx.arc(-5, -2, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#c2410c';
        for (const [px, py] of [[4, 4], [6, -1], [2, 8]]) {
          ctx.beginPath();
          ctx.arc(px, py, 0.9, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    },
    {
      id: 'octopus',
      word: 'octopus',
      translation: 'chobotnice',
      letter: 'O',
      category: 'animals',
      difficulty: 2,
      primaryColor: '#ec4899',
      secondaryColor: '#fbcfe8',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Tentacles
        ctx.strokeStyle = '#db2777';
        ctx.lineWidth = 3.2;
        ctx.lineCap = 'round';
        for (const [sx, cx, ex] of [[-7, -14, -12], [-3, -6, -6], [3, 6, 6], [7, 14, 12]]) {
          ctx.beginPath();
          ctx.moveTo(sx, 2);
          ctx.quadraticCurveTo(cx, 10, ex, 14);
          ctx.stroke();
        }
        // Bulbous head
        ctx.fillStyle = '#ec4899';
        ctx.strokeStyle = '#fbcfe8';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(0, -4, 9.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // Eyes
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(-3.8, -3, 2.5, 0, Math.PI * 2);
        ctx.arc(3.8, -3, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(-3.5, -3, 1.2, 0, Math.PI * 2);
        ctx.arc(4.1, -3, 1.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['O'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
