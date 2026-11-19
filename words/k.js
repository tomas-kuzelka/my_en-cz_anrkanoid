(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'key',
      word: 'key',
      translation: 'klíč',
      letter: 'K',
      category: 'objects',
      difficulty: 1,
      primaryColor: '#fbbf24',
      secondaryColor: '#fef08a',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.rotate(-Math.PI / 8);
        ctx.strokeStyle = '#fbbf24';
        ctx.fillStyle = '#f59e0b';
        ctx.lineWidth = 3.2;
        ctx.beginPath();
        ctx.arc(-8, 0, 6.5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.arc(-8, 0, 2.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 3.4;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(-1.5, 0);
        ctx.lineTo(15, 0);
        ctx.moveTo(9, 0);
        ctx.lineTo(9, 6);
        ctx.moveTo(14, 0);
        ctx.lineTo(14, 5);
        ctx.stroke();
        ctx.restore();
      }
    },
    {
      id: 'king',
      word: 'king',
      translation: 'král',
      letter: 'K',
      category: 'objects',
      difficulty: 1,
      primaryColor: '#ffd166',
      secondaryColor: '#ff3b5c',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Royal golden crown
        ctx.fillStyle = '#fbbf24';
        ctx.strokeStyle = '#fef3c7';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(-13, 9);
        ctx.lineTo(-14, -6);
        ctx.lineTo(-7, 1);
        ctx.lineTo(0, -11);
        ctx.lineTo(7, 1);
        ctx.lineTo(14, -6);
        ctx.lineTo(13, 9);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Crown band & gems
        ctx.fillStyle = '#b45309';
        ctx.fillRect(-13, 5, 26, 4);
        ctx.fillStyle = '#ff3b5c';
        ctx.beginPath();
        ctx.arc(0, 1, 2.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#00f3ff';
        ctx.beginPath();
        ctx.arc(-8, 2.5, 1.7, 0, Math.PI * 2);
        ctx.arc(8, 2.5, 1.7, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'kite',
      word: 'kite',
      translation: 'létající drak',
      letter: 'K',
      category: 'objects',
      difficulty: 1,
      primaryColor: '#ff2a85',
      secondaryColor: '#00f3ff',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Flowing tail string
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, 8);
        ctx.quadraticCurveTo(6, 13, -3, 17);
        ctx.stroke();
        // Kite diamond panels
        ctx.fillStyle = '#ff2a85';
        ctx.beginPath();
        ctx.moveTo(0, -15);
        ctx.lineTo(11, -3);
        ctx.lineTo(0, 8);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = '#00f3ff';
        ctx.beginPath();
        ctx.moveTo(0, -15);
        ctx.lineTo(-11, -3);
        ctx.lineTo(0, 8);
        ctx.closePath();
        ctx.fill();
        // Cross spars
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(0, -15);
        ctx.lineTo(0, 8);
        ctx.moveTo(-11, -3);
        ctx.lineTo(11, -3);
        ctx.stroke();
        // Tail bow
        ctx.fillStyle = '#fde047';
        ctx.fillRect(1, 11, 4, 2.5);
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['K'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
