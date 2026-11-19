(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'fish',
      word: 'fish',
      translation: 'ryba',
      letter: 'F',
      category: 'animals',
      difficulty: 1,
      primaryColor: '#ff7b54',
      secondaryColor: '#ffd166',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#ffd166';
        ctx.beginPath();
        ctx.moveTo(-7, 0);
        ctx.lineTo(-16, -8);
        ctx.lineTo(-13, 0);
        ctx.lineTo(-16, 8);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(-3, -7);
        ctx.quadraticCurveTo(2, -14, 6, -7);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#ff7b54';
        ctx.strokeStyle = '#ffe5d4';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.ellipse(2, 0, 12, 8.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.strokeStyle = '#ffd166';
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(0, -7);
        ctx.quadraticCurveTo(-2, 0, 0, 7);
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(8, -2, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(8.6, -2, 1.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'fire',
      word: 'fire',
      translation: 'oheň',
      letter: 'F',
      category: 'nature',
      difficulty: 1,
      primaryColor: '#ff5722',
      secondaryColor: '#fde047',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Outer orange flame
        ctx.fillStyle = '#ff5722';
        ctx.strokeStyle = '#fed7aa';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.moveTo(0, -16);
        ctx.bezierCurveTo(10, -8, 13, 4, 8, 12);
        ctx.quadraticCurveTo(0, 17, -8, 12);
        ctx.bezierCurveTo(-13, 4, -8, -6, -3, -10);
        ctx.quadraticCurveTo(-2, -5, 0, -16);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Inner yellow flame
        ctx.fillStyle = '#fde047';
        ctx.beginPath();
        ctx.moveTo(0, -5);
        ctx.bezierCurveTo(6, 1, 6, 9, 0, 13);
        ctx.bezierCurveTo(-6, 9, -6, 1, 0, -5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'flower',
      word: 'flower',
      translation: 'květina',
      letter: 'F',
      category: 'nature',
      difficulty: 2,
      primaryColor: '#ff2a85',
      secondaryColor: '#fde047',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.strokeStyle = '#22c55e';
        ctx.lineWidth = 2.6;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 16);
        ctx.stroke();
        ctx.fillStyle = '#4ade80';
        ctx.beginPath();
        ctx.ellipse(5, 10, 5, 2.5, -0.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ff2a85';
        ctx.strokeStyle = '#fbcfe8';
        ctx.lineWidth = 1;
        for (let i = 0; i < 6; i++) {
          const a = (i * Math.PI) / 3;
          ctx.beginPath();
          ctx.ellipse(Math.cos(a) * 6.5, -4 + Math.sin(a) * 6.5, 4.6, 3.2, a, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }

        ctx.fillStyle = '#fde047';
        ctx.beginPath();
        ctx.arc(0, -4, 4.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['F'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
