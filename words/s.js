(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'sun',
      word: 'sun',
      translation: 'slunce',
      letter: 'S',
      category: 'space',
      difficulty: 1,
      primaryColor: '#ffd166',
      secondaryColor: '#ff8c42',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#ff9f1c';
        for (let i = 0; i < 8; i++) {
          ctx.save();
          ctx.rotate((i * Math.PI) / 4);
          ctx.beginPath();
          ctx.moveTo(-3, -11);
          ctx.lineTo(0, -18);
          ctx.lineTo(3, -11);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }

        ctx.fillStyle = '#ffd166';
        ctx.strokeStyle = '#fff3b0';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#fff8d6';
        ctx.beginPath();
        ctx.arc(-3, -3, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'star',
      word: 'star',
      translation: 'hvězda',
      letter: 'S',
      category: 'space',
      difficulty: 1,
      primaryColor: '#ffd166',
      secondaryColor: '#fff3b0',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#ffd166';
        ctx.strokeStyle = '#fff8d6';
        ctx.lineWidth = 1.5;
        ctx.lineJoin = 'round';
        ctx.beginPath();
        for (let i = 0; i < 10; i++) {
          const r = i % 2 === 0 ? 16 : 7;
          const a = (i * Math.PI) / 5 - Math.PI / 2;
          const x = Math.cos(a) * r;
          const y = Math.sin(a) * r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#fffbeb';
        ctx.beginPath();
        ctx.arc(-2, -2, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'scissors',
      word: 'scissors',
      translation: 'nůžky',
      letter: 'S',
      category: 'objects',
      difficulty: 3,
      primaryColor: '#e2e8f0',
      secondaryColor: '#ef4444',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.fillStyle = '#cbd5e1';
        ctx.strokeStyle = '#f8fafc';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(-2, 0);
        ctx.lineTo(13, -11);
        ctx.lineTo(11, -5);
        ctx.lineTo(-2, 3);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-2, 0);
        ctx.lineTo(13, 11);
        ctx.lineTo(11, 5);
        ctx.lineTo(-2, -3);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#475569';
        ctx.beginPath();
        ctx.arc(-1, 0, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 2.8;
        ctx.beginPath();
        ctx.ellipse(-9, -6, 5, 3.8, -0.3, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.ellipse(-9, 6, 5, 3.8, 0.3, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
    },
    {
      id: 'submarine',
      word: 'submarine',
      translation: 'ponorka',
      letter: 'S',
      category: 'objects',
      difficulty: 3,
      primaryColor: '#facc15',
      secondaryColor: '#00f3ff',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-1, -6);
        ctx.lineTo(-1, -13);
        ctx.lineTo(3, -13);
        ctx.stroke();

        ctx.fillStyle = '#eab308';
        ctx.beginPath();
        ctx.roundRect(-5, -8, 9, 6, 2);
        ctx.fill();

        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(-16, -4, 3, 8);

        ctx.fillStyle = '#facc15';
        ctx.strokeStyle = '#fef08a';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.ellipse(0, 3, 14, 7.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#00f3ff';
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 1.2;
        for (const px of [-5, 1, 7]) {
          ctx.beginPath();
          ctx.arc(px, 3, 2.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['S'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
