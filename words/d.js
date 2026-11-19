(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'dog',
      word: 'dog',
      translation: 'pes',
      letter: 'D',
      category: 'animals',
      difficulty: 1,
      primaryColor: '#d97706',
      secondaryColor: '#fde68a',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Floppy ears
        ctx.fillStyle = '#92400e';
        ctx.beginPath();
        ctx.ellipse(-9.5, -2, 3.6, 8, 0.25, 0, Math.PI * 2);
        ctx.ellipse(9.5, -2, 3.6, 8, -0.25, 0, Math.PI * 2);
        ctx.fill();
        // Head
        ctx.fillStyle = '#f59e0b';
        ctx.strokeStyle = '#fef3c7';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.arc(0, -1, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // Muzzle
        ctx.fillStyle = '#fde68a';
        ctx.beginPath();
        ctx.ellipse(0, 4.5, 6, 4.5, 0, 0, Math.PI * 2);
        ctx.fill();
        // Nose & tongue
        ctx.fillStyle = '#1e293b';
        ctx.beginPath();
        ctx.ellipse(0, 2.6, 2.8, 1.8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fb7185';
        ctx.beginPath();
        ctx.arc(0, 8.2, 2.1, 0, Math.PI);
        ctx.fill();
        // Eyes
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(-4, -3, 1.7, 0, Math.PI * 2);
        ctx.arc(4, -3, 1.7, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'drum',
      word: 'drum',
      translation: 'buben',
      letter: 'D',
      category: 'objects',
      difficulty: 1,
      primaryColor: '#ef4444',
      secondaryColor: '#fde047',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Drumsticks
        ctx.strokeStyle = '#fde68a';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(-12, -14);
        ctx.lineTo(-2, -6);
        ctx.moveTo(12, -14);
        ctx.lineTo(2, -6);
        ctx.stroke();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(-2, -6, 1.8, 0, Math.PI * 2);
        ctx.arc(2, -6, 1.8, 0, Math.PI * 2);
        ctx.fill();
        // Drum cylinder
        ctx.fillStyle = '#ef4444';
        ctx.strokeStyle = '#fecaca';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.roundRect(-12, -4, 24, 15, [2, 2, 6, 6]);
        ctx.fill();
        ctx.stroke();
        // Zigzag tension ropes
        ctx.strokeStyle = '#fde047';
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(-10, -2);
        ctx.lineTo(-5, 9);
        ctx.lineTo(0, -2);
        ctx.lineTo(5, 9);
        ctx.lineTo(10, -2);
        ctx.stroke();
        // Top drumhead
        ctx.fillStyle = '#fef9c3';
        ctx.beginPath();
        ctx.ellipse(0, -4, 12, 3.6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }
    },
    {
      id: 'dragon',
      word: 'dragon',
      translation: 'drak',
      letter: 'D',
      category: 'animals',
      difficulty: 2,
      primaryColor: '#10b981',
      secondaryColor: '#ff5722',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#ff5722';
        ctx.beginPath();
        ctx.moveTo(7, -1);
        ctx.lineTo(17, -6);
        ctx.lineTo(16, 4);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = '#fde047';
        ctx.beginPath();
        ctx.moveTo(7, -1);
        ctx.lineTo(14, -3.5);
        ctx.lineTo(13.5, 1.5);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.moveTo(-6, -8);
        ctx.lineTo(-12, -15);
        ctx.lineTo(-2, -10);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#10b981';
        ctx.strokeStyle = '#a7f3d0';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.moveTo(-12, 13);
        ctx.quadraticCurveTo(-13, 0, -7, -9);
        ctx.lineTo(6, -6);
        ctx.lineTo(9, -1);
        ctx.lineTo(1, 2);
        ctx.lineTo(7, 5);
        ctx.lineTo(-2, 6);
        ctx.quadraticCurveTo(-4, 10, -4, 13);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#fde047';
        ctx.beginPath();
        ctx.arc(-1, -4.5, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'diamond',
      word: 'diamond',
      translation: 'diamant',
      letter: 'D',
      category: 'objects',
      difficulty: 3,
      primaryColor: '#00f3ff',
      secondaryColor: '#e0f2fe',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#06b6d4';
        ctx.strokeStyle = '#e0f2fe';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(-9, -10);
        ctx.lineTo(9, -10);
        ctx.lineTo(15, -2);
        ctx.lineTo(0, 15);
        ctx.lineTo(-15, -2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#67e8f9';
        ctx.beginPath();
        ctx.moveTo(-9, -10);
        ctx.lineTo(9, -10);
        ctx.lineTo(5, -2);
        ctx.lineTo(-5, -2);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = '#cffafe';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(-15, -2);
        ctx.lineTo(15, -2);
        ctx.moveTo(-5, -2);
        ctx.lineTo(0, 15);
        ctx.lineTo(5, -2);
        ctx.stroke();
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['D'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
