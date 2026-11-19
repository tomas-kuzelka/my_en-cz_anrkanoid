(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'jewel',
      word: 'jewel',
      translation: 'klenot',
      letter: 'J',
      category: 'objects',
      difficulty: 1,
      primaryColor: '#ec4899',
      secondaryColor: '#fbcfe8',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Emerald-cut ruby hexagon
        ctx.fillStyle = '#db2777';
        ctx.strokeStyle = '#fbcfe8';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(-8, -13);
        ctx.lineTo(8, -13);
        ctx.lineTo(13, -6);
        ctx.lineTo(13, 6);
        ctx.lineTo(8, 13);
        ctx.lineTo(-8, 13);
        ctx.lineTo(-13, 6);
        ctx.lineTo(-13, -6);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Inner bevel table
        ctx.fillStyle = '#f472b6';
        ctx.beginPath();
        ctx.roundRect(-6, -7, 12, 14, 2);
        ctx.fill();
        // Facet lines
        ctx.strokeStyle = '#fce7f3';
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(-8, -13);
        ctx.lineTo(-6, -7);
        ctx.moveTo(8, -13);
        ctx.lineTo(6, -7);
        ctx.moveTo(-8, 13);
        ctx.lineTo(-6, 7);
        ctx.moveTo(8, 13);
        ctx.lineTo(6, 7);
        ctx.stroke();
        ctx.restore();
      }
    },
    {
      id: 'jacket',
      word: 'jacket',
      translation: 'bunda',
      letter: 'J',
      category: 'objects',
      difficulty: 2,
      primaryColor: '#3b82f6',
      secondaryColor: '#fbbf24',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Sleeves & torso
        ctx.fillStyle = '#2563eb';
        ctx.strokeStyle = '#bfdbfe';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.moveTo(-6, -12);
        ctx.lineTo(-15, -3);
        ctx.lineTo(-12, 8);
        ctx.lineTo(-8, 6);
        ctx.lineTo(-8, 13);
        ctx.lineTo(8, 13);
        ctx.lineTo(8, 6);
        ctx.lineTo(12, 8);
        ctx.lineTo(15, -3);
        ctx.lineTo(6, -12);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Collar
        ctx.fillStyle = '#1e3a8a';
        ctx.beginPath();
        ctx.moveTo(-5, -12);
        ctx.lineTo(0, -7);
        ctx.lineTo(5, -12);
        ctx.closePath();
        ctx.fill();
        // Zipper & pockets
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(0, -7);
        ctx.lineTo(0, 13);
        ctx.stroke();
        ctx.fillStyle = '#93c5fd';
        ctx.fillRect(-6, 5, 4, 2);
        ctx.fillRect(2, 5, 4, 2);
        ctx.restore();
      }
    },
    {
      id: 'jellyfish',
      word: 'jellyfish',
      translation: 'medúza',
      letter: 'J',
      category: 'animals',
      difficulty: 3,
      primaryColor: '#c084fc',
      secondaryColor: '#00f3ff',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Flowing tentacles
        ctx.strokeStyle = '#67e8f9';
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        for (const tx of [-8, -3, 2, 7]) {
          ctx.beginPath();
          ctx.moveTo(tx, 1);
          ctx.quadraticCurveTo(tx - 3, 7, tx + 2, 11);
          ctx.quadraticCurveTo(tx + 4, 14, tx, 16);
          ctx.stroke();
        }
        // Translucent bell dome
        ctx.fillStyle = '#a855f7';
        ctx.strokeStyle = '#f3e8ff';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(0, 0, 12, Math.PI, 0);
        ctx.quadraticCurveTo(6, 3, 0, 1);
        ctx.quadraticCurveTo(-6, 3, -12, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Bioluminescent spots
        ctx.fillStyle = '#67e8f9';
        ctx.beginPath();
        ctx.arc(-4, -5, 2, 0, Math.PI * 2);
        ctx.arc(4, -4, 1.6, 0, Math.PI * 2);
        ctx.arc(0, -8, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['J'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
