(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'car',
      word: 'car',
      translation: 'auto',
      letter: 'C',
      category: 'objects',
      difficulty: 1,
      primaryColor: '#00d4ff',
      secondaryColor: '#ffd166',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#00b4d8';
        ctx.strokeStyle = '#caf0f8';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.roundRect(-16, -2, 32, 10, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#0096c7';
        ctx.beginPath();
        ctx.moveTo(-10, -2);
        ctx.lineTo(-6, -10);
        ctx.lineTo(7, -10);
        ctx.lineTo(12, -2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#bae6fd';
        ctx.beginPath();
        ctx.moveTo(-8, -3);
        ctx.lineTo(-5, -8.2);
        ctx.lineTo(0, -8.2);
        ctx.lineTo(0, -3);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(2, -3);
        ctx.lineTo(2, -8.2);
        ctx.lineTo(6.2, -8.2);
        ctx.lineTo(9.5, -3);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#ffd166';
        ctx.fillRect(13, 0, 3, 3.5);
        ctx.fillStyle = '#ff3b5c';
        ctx.fillRect(-16, 0, 2.5, 3.5);

        for (const wx of [-9, 9]) {
          ctx.fillStyle = '#1e293b';
          ctx.beginPath();
          ctx.arc(wx, 9, 4.8, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#cbd5e1';
          ctx.beginPath();
          ctx.arc(wx, 9, 2.1, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    },
    {
      id: 'cup',
      word: 'cup',
      translation: 'hrnek',
      letter: 'C',
      category: 'objects',
      difficulty: 1,
      primaryColor: '#38bdf8',
      secondaryColor: '#f8fafc',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.strokeStyle = '#e0f2fe';
        ctx.lineWidth = 2.8;
        ctx.beginPath();
        ctx.arc(9, 2, 5.5, -Math.PI / 2, Math.PI / 2);
        ctx.stroke();

        ctx.fillStyle = '#38bdf8';
        ctx.strokeStyle = '#e0f2fe';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.roundRect(-11, -5, 20, 18, [2, 2, 7, 7]);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#78350f';
        ctx.beginPath();
        ctx.ellipse(-1, -5, 9, 2.5, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(248, 250, 252, 0.85)';
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';
        for (const x of [-4, 2]) {
          ctx.beginPath();
          ctx.moveTo(x, -9);
          ctx.quadraticCurveTo(x - 2, -12, x + 1, -15);
          ctx.stroke();
        }
        ctx.restore();
      }
    },
    {
      id: 'castle',
      word: 'castle',
      translation: 'hrad',
      letter: 'C',
      category: 'objects',
      difficulty: 2,
      primaryColor: '#94a3b8',
      secondaryColor: '#f43f5e',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#94a3b8';
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1.2;
        ctx.fillRect(-10, -3, 20, 16);
        ctx.strokeRect(-10, -3, 20, 16);

        ctx.fillStyle = '#64748b';
        ctx.fillRect(-14, -7, 6, 20);
        ctx.fillRect(8, -7, 6, 20);

        ctx.fillStyle = '#f43f5e';
        for (const cx of [-11, 11]) {
          ctx.beginPath();
          ctx.moveTo(cx - 4.5, -7);
          ctx.lineTo(cx, -15);
          ctx.lineTo(cx + 4.5, -7);
          ctx.closePath();
          ctx.fill();
        }

        ctx.fillStyle = '#cbd5e1';
        for (const bx of [-6, -1.5, 3]) {
          ctx.fillRect(bx, -6.5, 3, 3.5);
        }

        ctx.fillStyle = '#451a03';
        ctx.beginPath();
        ctx.arc(0, 7, 4, Math.PI, 0);
        ctx.lineTo(4, 13);
        ctx.lineTo(-4, 13);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'camera',
      word: 'camera',
      translation: 'fotoaparát',
      letter: 'C',
      category: 'objects',
      difficulty: 2,
      primaryColor: '#38bdf8',
      secondaryColor: '#e2e8f0',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#cbd5e1';
        ctx.beginPath();
        ctx.roundRect(-6, -12, 12, 5, 2);
        ctx.fill();
        ctx.fillStyle = '#ff3b5c';
        ctx.fillRect(9, -10, 4, 2.5);

        ctx.fillStyle = '#334155';
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.roundRect(-15, -8, 30, 20, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#e2e8f0';
        ctx.beginPath();
        ctx.arc(0, 2, 7.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#0284c7';
        ctx.beginPath();
        ctx.arc(0, 2, 5.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#bae6fd';
        ctx.beginPath();
        ctx.arc(-1.8, 0.2, 1.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['C'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
