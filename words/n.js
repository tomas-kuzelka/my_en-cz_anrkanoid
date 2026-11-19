(function (global) {
  'use strict';

  global.VOCAB_BY_LETTER = global.VOCAB_BY_LETTER || {};
  global.OBJECT_DATABASE = global.OBJECT_DATABASE || [];

  /** @type {VocabObjectDef[]} */
  const ITEMS = [
    {
      id: 'nest',
      word: 'nest',
      translation: 'hnízdo',
      letter: 'N',
      category: 'nature',
      difficulty: 1,
      primaryColor: '#d97706',
      secondaryColor: '#7dd3fc',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Two speckled blue eggs inside
        for (const [ex, ey] of [[-4, -2], [4, -1.5]]) {
          ctx.fillStyle = '#7dd3fc';
          ctx.strokeStyle = '#e0f2fe';
          ctx.lineWidth = 1.1;
          ctx.beginPath();
          ctx.ellipse(ex, ey, 4, 5.2, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
        // Woven twig bowl
        ctx.fillStyle = '#92400e';
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.arc(0, 1, 13, 0, Math.PI);
        ctx.quadraticCurveTo(0, 5, -13, 1);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Twig strands
        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(-11, 4);
        ctx.quadraticCurveTo(0, 9, 11, 4);
        ctx.moveTo(-8, 8);
        ctx.quadraticCurveTo(0, 12, 8, 8);
        ctx.stroke();
        ctx.restore();
      }
    },
    {
      id: 'notebook',
      word: 'notebook',
      translation: 'zápisník',
      letter: 'N',
      category: 'objects',
      difficulty: 3,
      primaryColor: '#10b981',
      secondaryColor: '#fef3c7',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Spiral cover
        ctx.fillStyle = '#059669';
        ctx.strokeStyle = '#a7f3d0';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.roundRect(-10, -14, 22, 28, 3);
        ctx.fill();
        ctx.stroke();
        // Label patch
        ctx.fillStyle = '#fef3c7';
        ctx.beginPath();
        ctx.roundRect(-4, -8, 12, 8, 2);
        ctx.fill();
        // Spiral binding rings
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 2;
        for (const ry of [-10, -5, 0, 5, 10]) {
          ctx.beginPath();
          ctx.arc(-10, ry, 2.5, Math.PI * 0.4, Math.PI * 1.6);
          ctx.stroke();
        }
        ctx.restore();
      }
    },
    {
      id: 'necklace',
      word: 'necklace',
      translation: 'náhrdelník',
      letter: 'N',
      category: 'objects',
      difficulty: 3,
      primaryColor: '#fde047',
      secondaryColor: '#00f3ff',
      draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        // Golden chain arc
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.arc(0, -4, 12, Math.PI * 0.12, Math.PI * 0.88);
        ctx.stroke();
        // Pearl beads
        ctx.fillStyle = '#fef3c7';
        for (const a of [0.55, 0.9, 2.24, 2.59]) {
          ctx.beginPath();
          ctx.arc(Math.cos(a) * 12, -4 + Math.sin(a) * 12, 2, 0, Math.PI * 2);
          ctx.fill();
        }
        // Cyan diamond pendant
        ctx.fillStyle = '#00f3ff';
        ctx.strokeStyle = '#e0f2fe';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(0, 7);
        ctx.lineTo(5, 12);
        ctx.lineTo(0, 17);
        ctx.lineTo(-5, 12);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }
    }
  ];

  global.VOCAB_BY_LETTER['N'] = ITEMS;
  global.OBJECT_DATABASE.push(...ITEMS);
})(typeof window !== 'undefined' ? window : globalThis);
