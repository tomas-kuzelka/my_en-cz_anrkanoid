(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'ufo',
      word: 'ufo',
      translation: 'létající talíř',
      letter: 'U',
      category: 'space',
      difficulty: 1,
      primaryColor: '#00ff9d',
      secondaryColor: '#00f3ff',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Tractor beam
        ctx.fillStyle = 'rgba(0, 255, 157, 0.28)';
        ctx.beginPath();
        ctx.moveTo(-6, 5);
        ctx.lineTo(-11, 16);
        ctx.lineTo(11, 16);
        ctx.lineTo(6, 5);
        ctx.closePath();
        ctx.fill();
        // Glass dome
        ctx.fillStyle = '#67e8f9';
        ctx.strokeStyle = '#e0f2fe';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(0, -1, 7.5, Math.PI, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Saucer hull
        ctx.fillStyle = '#64748b';
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.ellipse(0, 1, 15, 5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // Lights
        for (const lx of [-8, 0, 8]) {
          ctx.fillStyle = lx === 0 ? '#fde047' : '#00ff9d';
          ctx.beginPath();
          ctx.arc(lx, 1.5, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    },
    {
      id: 'unicorn',
      word: 'unicorn',
      translation: 'jednorožec',
      letter: 'U',
      category: 'animals',
      difficulty: 2,
      primaryColor: '#f472b6',
      secondaryColor: '#fde047',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Rainbow mane
        ctx.fillStyle = '#ff2a85';
        ctx.beginPath();
        ctx.moveTo(-6, -8);
        ctx.quadraticCurveTo(-15, -2, -13, 9);
        ctx.lineTo(-5, 6);
        ctx.closePath();
        ctx.fill();
        // Golden spiral horn
        ctx.fillStyle = '#fde047';
        ctx.beginPath();
        ctx.moveTo(0, -8);
        ctx.lineTo(8, -17);
        ctx.lineTo(4, -5);
        ctx.closePath();
        ctx.fill();
        // White horse head profile
        ctx.fillStyle = '#f8fafc';
        ctx.strokeStyle = '#f5d0fe';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.moveTo(-7, 13);
        ctx.quadraticCurveTo(-8, -4, -3, -8);
        ctx.lineTo(4, -6);
        ctx.lineTo(13, 1);
        ctx.quadraticCurveTo(13, 6, 8, 6);
        ctx.lineTo(2, 4);
        ctx.lineTo(1, 13);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Eye
        ctx.fillStyle = '#7e22ce';
        ctx.beginPath();
        ctx.arc(4.5, -1, 1.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'umbrella',
      word: 'umbrella',
      translation: 'deštník',
      letter: 'U',
      category: 'objects',
      difficulty: 3,
      primaryColor: '#ff2a85',
      secondaryColor: '#00f3ff',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2.4;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(0, -14);
        ctx.lineTo(0, 11);
        ctx.arc(-3, 11, 3, 0, Math.PI);
        ctx.stroke();

        ctx.fillStyle = '#ff2a85';
        ctx.strokeStyle = '#fbcfe8';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.arc(0, -1, 14, Math.PI, 0);
        ctx.quadraticCurveTo(9, -4, 5, -1);
        ctx.quadraticCurveTo(0, -4, -5, -1);
        ctx.quadraticCurveTo(-9, -4, -14, -1);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#00f3ff';
        ctx.beginPath();
        ctx.moveTo(0, -15);
        ctx.quadraticCurveTo(-5, -8, -5, -1);
        ctx.quadraticCurveTo(0, -4, 5, -1);
        ctx.quadraticCurveTo(5, -8, 0, -15);
        ctx.fill();
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['U'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
