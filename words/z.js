(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'zebra',
      word: 'zebra',
      translation: 'zebra',
      letter: 'Z',
      category: 'animals',
      difficulty: 1,
      primaryColor: '#f8fafc',
      secondaryColor: '#64748b',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Striped mane
        ctx.fillStyle = '#1e293b';
        ctx.beginPath();
        ctx.moveTo(-8, -11);
        ctx.lineTo(-13, -3);
        ctx.lineTo(-11, 9);
        ctx.lineTo(-5, 6);
        ctx.closePath();
        ctx.fill();
        // Zebra head & neck profile
        ctx.fillStyle = '#f8fafc';
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.moveTo(-8, 13);
        ctx.lineTo(-8, -10);
        ctx.lineTo(-4, -15);
        ctx.lineTo(0, -10);
        ctx.lineTo(13, -2);
        ctx.lineTo(12, 4);
        ctx.lineTo(2, 4);
        ctx.lineTo(1, 13);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Black zebra stripes
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(-7, -3);
        ctx.lineTo(-1, -1);
        ctx.moveTo(-7, 3);
        ctx.lineTo(-1, 5);
        ctx.moveTo(2, -7);
        ctx.lineTo(4, -3);
        ctx.stroke();
        // Eye & muzzle
        ctx.fillStyle = '#334155';
        ctx.beginPath();
        ctx.arc(11.5, 1, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(3, -3.5, 1.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    },
    {
      id: 'zeppelin',
      word: 'zeppelin',
      translation: 'vzducholoď',
      letter: 'Z',
      category: 'objects',
      difficulty: 3,
      primaryColor: '#cbd5e1',
      secondaryColor: '#fbbf24',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Tail fins
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.moveTo(-10, -2);
        ctx.lineTo(-16, -9);
        ctx.lineTo(-15, 0);
        ctx.lineTo(-16, 9);
        ctx.lineTo(-10, 2);
        ctx.closePath();
        ctx.fill();
        // Gondola cabin
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.roundRect(-5, 6, 10, 4.5, 2);
        ctx.fill();
        // Airship envelope
        ctx.fillStyle = '#e2e8f0';
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.ellipse(0, 0, 15, 7.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // Structural ribs & red stripe
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-14, 0);
        ctx.lineTo(14, 0);
        ctx.stroke();
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['Z'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
