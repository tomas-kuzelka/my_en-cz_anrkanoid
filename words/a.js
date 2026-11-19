(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'apple',
      word: 'apple',
      translation: 'jablko',
      letter: 'A',
      category: 'food',
      difficulty: 1,
      primaryColor: '#ff3b5c',
      secondaryColor: '#4ade80',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#ff3b5c';
        ctx.strokeStyle = '#ffd1dc';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(0, -8);
        ctx.bezierCurveTo(9, -14, 17, -6, 14, 5);
        ctx.bezierCurveTo(12, 13, 5, 16, 0, 14);
        ctx.bezierCurveTo(-5, 16, -12, 13, -14, 5);
        ctx.bezierCurveTo(-17, -6, -9, -14, 0, -8);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.arc(-6, -2, 5, Math.PI * 1.05, Math.PI * 1.48);
        ctx.stroke();

        ctx.strokeStyle = '#92400e';
        ctx.lineWidth = 2.6;
        ctx.beginPath();
        ctx.moveTo(0, -8);
        ctx.quadraticCurveTo(1, -14, 3, -16);
        ctx.stroke();

        ctx.fillStyle = '#4ade80';
        ctx.beginPath();
        ctx.moveTo(1, -11);
        ctx.quadraticCurveTo(9, -17, 12, -10);
        ctx.quadraticCurveTo(7, -7, 1, -11);
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'ant',
      word: 'ant',
      translation: 'mravenec',
      letter: 'A',
      category: 'animals',
      difficulty: 1,
      primaryColor: '#ef4444',
      secondaryColor: '#fbbf24',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Six legs
        ctx.strokeStyle = '#fca5a5';
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';
        for (const lx of [-4, 0, 4]) {
          ctx.beginPath();
          ctx.moveTo(lx, 0);
          ctx.lineTo(lx - 2, -9);
          ctx.moveTo(lx, 0);
          ctx.lineTo(lx - 2, 9);
          ctx.stroke();
        }
        // Abdomen, thorax, head
        ctx.fillStyle = '#dc2626';
        ctx.strokeStyle = '#fecaca';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.ellipse(-8, 0, 6, 4.6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, 3.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(7, 0, 4.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // Antennae & eye
        ctx.strokeStyle = '#fde68a';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(10, -2);
        ctx.quadraticCurveTo(14, -6, 16, -5);
        ctx.moveTo(10, 2);
        ctx.quadraticCurveTo(14, 6, 16, 5);
        ctx.stroke();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(8.5, -1.6, 1.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'anchor',
      word: 'anchor',
      translation: 'kotva',
      letter: 'A',
      category: 'objects',
      difficulty: 2,
      primaryColor: '#38bdf8',
      secondaryColor: '#e2e8f0',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.strokeStyle = '#e2e8f0';
        ctx.fillStyle = '#38bdf8';
        ctx.lineWidth = 2.8;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.arc(0, -13, 3.2, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, -9.5);
        ctx.lineTo(0, 12);
        ctx.moveTo(-7, -4);
        ctx.lineTo(7, -4);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 2, 11.5, Math.PI * 0.14, Math.PI * 0.86);
        ctx.stroke();

        ctx.fillStyle = '#38bdf8';
        for (const [fx, dir] of [[-11, -1], [11, 1]]) {
          ctx.beginPath();
          ctx.moveTo(fx, 5.5);
          ctx.lineTo(fx - dir * 3, 9.5);
          ctx.lineTo(fx + dir * 2.5, 10.5);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      }
    },
    {
      id: 'airplane',
      word: 'airplane',
      translation: 'letadlo',
      letter: 'A',
      category: 'objects',
      difficulty: 3,
      primaryColor: '#38bdf8',
      secondaryColor: '#f8fafc',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.rotate(-Math.PI / 6);
        ctx.fillStyle = '#0284c7';
        ctx.beginPath();
        ctx.moveTo(2, -3);
        ctx.lineTo(-6, -16);
        ctx.lineTo(-9, -16);
        ctx.lineTo(-4, -3);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(2, 3);
        ctx.lineTo(-6, 16);
        ctx.lineTo(-9, 16);
        ctx.lineTo(-4, 3);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.moveTo(-10, -2);
        ctx.lineTo(-15, -7);
        ctx.lineTo(-16, -7);
        ctx.lineTo(-13, 0);
        ctx.lineTo(-16, 7);
        ctx.lineTo(-15, 7);
        ctx.lineTo(-10, 2);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#f8fafc';
        ctx.strokeStyle = '#bae6fd';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.ellipse(0, 0, 15, 3.6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#00f3ff';
        ctx.beginPath();
        ctx.arc(10, 0, 2, -Math.PI / 2, Math.PI / 2);
        ctx.fill();
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['A'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
