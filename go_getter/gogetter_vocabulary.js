// Kompletní slovníček GoGetter 2 (Unit 0–8) ve formátu kompatibilním s objektem `apple`
// Výsledné pole objektů je uloženo v konstantě `VOCABULARY` (lze použít i `export const VOCABULARY`).

const CATEGORY_PALETTES = {
    countries: ['#2563eb', '#f59e0b'],
    months: ['#0ea5e9', '#38bdf8'],
    actions: ['#f97316', '#facc15'],
    house: ['#8b5cf6', '#c4b5fd'],
    prepositions: ['#06b6d4', '#67e8f9'],
    clothes: ['#ec4899', '#f9a8d4'],
    animals: ['#d97706', '#fde68a'],
    adjectives: ['#a855f7', '#e9d5ff'],
    school: ['#3b82f6', '#93c5fd'],
    food: ['#ef4444', '#4ade80'],
    technology: ['#475569', '#38bdf8'],
    feelings: ['#f59e0b', '#fef08a'],
    space: ['#312e81', '#818cf8'],
    nature: ['#16a34a', '#38bdf8'],
    places: ['#0d9488', '#5eead4'],
    jobs: ['#1d4ed8', '#fbbf24'],
    transport: ['#dc2626', '#fbbf24'],
    travel: ['#059669', '#fcd34d'],
    events: ['#e11d48', '#fbbf24'],
    music: ['#7c3aed', '#f472b6'],
    ordinals: ['#eab308', '#fef08a'],
    time: ['#0284c7', '#7dd3fc'],
    communication: ['#14b8a6', '#99f6e4'],
    general: ['#6366f1', '#a5b4fc'],
};

const FLAG_COLORS = {
    argentina: ['#74acdf', '#ffffff', '#f6b40e'],
    argentinian: ['#74acdf', '#ffffff', '#f6b40e'],
    china: ['#de2910', '#ffde00', '#de2910'],
    chinese: ['#de2910', '#ffde00', '#de2910'],
    france: ['#0055a4', '#ffffff', '#ef4135'],
    french: ['#0055a4', '#ffffff', '#ef4135'],
    germany: ['#111827', '#dd0000', '#ffce00'],
    german: ['#111827', '#dd0000', '#ffce00'],
    italy: ['#009246', '#ffffff', '#ce2b37'],
    italian: ['#009246', '#ffffff', '#ce2b37'],
    poland: ['#ffffff', '#dc143c', '#dc143c'],
    polish: ['#ffffff', '#dc143c', '#dc143c'],
    spain: ['#aa151b', '#f1bf00', '#aa151b'],
    spanish: ['#aa151b', '#f1bf00', '#aa151b'],
    turkey: ['#e30a17', '#ffffff', '#e30a17'],
    turkish: ['#e30a17', '#ffffff', '#e30a17'],
    'the uk': ['#012169', '#ffffff', '#c8102e'],
    british: ['#012169', '#ffffff', '#c8102e'],
    'the usa': ['#b22234', '#ffffff', '#3c3b6e'],
    american: ['#b22234', '#ffffff', '#3c3b6e'],
    japanese: ['#ffffff', '#bc002d', '#bc002d'],
    mexican: ['#006847', '#ffffff', '#ce1126'],
    african: ['#16a34a', '#facc15', '#dc2626'],
};

const ORDINAL_LABELS = {
    'the first': '1st', 'the second': '2nd', 'the third': '3rd', 'the fourth': '4th',
    'the fifth': '5th', 'the sixth': '6th', 'the seventh': '7th', 'the eighth': '8th',
    'the ninth': '9th', 'the tenth': '10th', 'the eleventh': '11th', 'the twelfth': '12th',
    'the thirteenth': '13th', 'the twentieth': '20th', 'the twenty-first': '21st', 'the thirtieth': '30th',
};

function drawAppleExact(ctx, size) {
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

function createDrawFunction(word, category, primary, secondary) {
    const w = word.toLowerCase();
    if (w === 'apple') return drawAppleExact;

    return function draw(ctx, size) {
        const s = size / 24;
        ctx.save();
        ctx.scale(s, s);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        const drawBadgeText = (label, bg, fg = '#ffffff') => {
            ctx.fillStyle = bg;
            ctx.beginPath();
            ctx.arc(0, 0, 15, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = secondary;
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.fillStyle = fg;
            ctx.font = 'bold 10px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(label, 0, 1);
        };

        if (category === 'countries') {
            const cols = FLAG_COLORS[w] || [primary, '#ffffff', secondary];
            ctx.fillStyle = cols[0];
            ctx.fillRect(-15, -10, 30, 20);
            if (w.includes('france') || w.includes('french') || w.includes('ital') || w.includes('mexic')) {
                ctx.fillStyle = cols[0]; ctx.fillRect(-15, -10, 10, 20);
                ctx.fillStyle = cols[1]; ctx.fillRect(-5, -10, 10, 20);
                ctx.fillStyle = cols[2]; ctx.fillRect(5, -10, 10, 20);
            } else if (w.includes('poland') || w.includes('polish')) {
                ctx.fillStyle = '#ffffff'; ctx.fillRect(-15, -10, 30, 10);
                ctx.fillStyle = '#dc143c'; ctx.fillRect(-15, 0, 30, 10);
            } else if (w.includes('japan')) {
                ctx.fillStyle = '#ffffff'; ctx.fillRect(-15, -10, 30, 20);
                ctx.fillStyle = '#bc002d'; ctx.beginPath(); ctx.arc(0, 0, 5.5, 0, Math.PI * 2); ctx.fill();
            } else if (w.includes('uk') || w.includes('british')) {
                ctx.fillStyle = '#012169'; ctx.fillRect(-15, -10, 30, 20);
                ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 4;
                ctx.beginPath(); ctx.moveTo(-15, -10); ctx.lineTo(15, 10); ctx.moveTo(15, -10); ctx.lineTo(-15, 10); ctx.stroke();
                ctx.strokeStyle = '#c8102e'; ctx.lineWidth = 2;
                ctx.beginPath(); ctx.moveTo(-15, -10); ctx.lineTo(15, 10); ctx.moveTo(15, -10); ctx.lineTo(-15, 10); ctx.stroke();
                ctx.fillStyle = '#ffffff'; ctx.fillRect(-15, -3, 30, 6); ctx.fillRect(-3, -10, 6, 20);
                ctx.fillStyle = '#c8102e'; ctx.fillRect(-15, -1.8, 30, 3.6); ctx.fillRect(-1.8, -10, 3.6, 20);
            } else if (w.includes('usa') || w.includes('american')) {
                for (let i = 0; i < 6; i++) {
                    ctx.fillStyle = i % 2 === 0 ? '#b22234' : '#ffffff';
                    ctx.fillRect(-15, -10 + i * 3.33, 30, 3.4);
                }
                ctx.fillStyle = '#3c3b6e'; ctx.fillRect(-15, -10, 13, 10);
            } else if (w.includes('china') || w.includes('chinese')) {
                ctx.fillStyle = '#de2910'; ctx.fillRect(-15, -10, 30, 20);
                ctx.fillStyle = '#ffde00'; ctx.beginPath(); ctx.arc(-8, -4, 3.2, 0, Math.PI * 2); ctx.fill();
            } else if (w.includes('turk')) {
                ctx.fillStyle = '#e30a17'; ctx.fillRect(-15, -10, 30, 20);
                ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(-3, 0, 5, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#e30a17'; ctx.beginPath(); ctx.arc(-1, 0, 4, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(4, 0, 1.8, 0, Math.PI * 2); ctx.fill();
            } else {
                ctx.fillStyle = cols[0]; ctx.fillRect(-15, -10, 30, 6.7);
                ctx.fillStyle = cols[1]; ctx.fillRect(-15, -3.3, 30, 6.6);
                ctx.fillStyle = cols[2]; ctx.fillRect(-15, 3.3, 30, 6.7);
                if (w.includes('argentin')) {
                    ctx.fillStyle = '#f6b40e'; ctx.beginPath(); ctx.arc(0, 0, 2.6, 0, Math.PI * 2); ctx.fill();
                }
            }
            ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 1.2; ctx.strokeRect(-15, -10, 30, 20);
        } else if (category === 'months') {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(-13, -12, 26, 25);
            ctx.fillStyle = primary;
            ctx.fillRect(-13, -12, 26, 8);
            ctx.strokeStyle = primary; ctx.lineWidth = 1.6;
            ctx.strokeRect(-13, -12, 26, 25);
            ctx.fillStyle = '#0f172a';
            ctx.font = 'bold 9px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(word.slice(0, 3).toUpperCase(), 0, 4);
        } else if (category === 'ordinals') {
            drawBadgeText(ORDINAL_LABELS[w] || '#', primary, '#1e293b');
        } else if (category === 'feelings') {
            ctx.fillStyle = primary;
            ctx.beginPath(); ctx.arc(0, 0, 14, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = '#92400e'; ctx.lineWidth = 1.5; ctx.stroke();
            ctx.fillStyle = '#1e293b';
            ctx.beginPath(); ctx.arc(-5, -3, 1.8, 0, Math.PI * 2); ctx.arc(5, -3, 1.8, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = '#1e293b'; ctx.lineWidth = 2;
            ctx.beginPath();
            if (w.includes('happy')) {
                ctx.arc(0, 1, 6, 0.15 * Math.PI, 0.85 * Math.PI);
            } else if (w.includes('sad') || w.includes('worried') || w.includes('angry')) {
                ctx.arc(0, 9, 5.5, 1.15 * Math.PI, 1.85 * Math.PI);
            } else if (w.includes('surprised') || w.includes('scared')) {
                ctx.arc(0, 5, 3.2, 0, Math.PI * 2);
            } else {
                ctx.moveTo(-5, 5); ctx.lineTo(5, 5);
            }
            ctx.stroke();
        } else if (category === 'food') {
            if (w.includes('water') || w.includes('juice') || w.includes('milk') || w.includes('cola') || w.includes('lemonade') || w.includes('coffee')) {
                ctx.fillStyle = primary;
                ctx.beginPath(); ctx.moveTo(-8, -11); ctx.lineTo(8, -11); ctx.lineTo(6, 13); ctx.lineTo(-6, 13); ctx.closePath(); ctx.fill();
                ctx.fillStyle = 'rgba(255,255,255,0.45)'; ctx.fillRect(-5, -6, 3, 14);
                ctx.strokeStyle = secondary; ctx.lineWidth = 2;
                ctx.beginPath(); ctx.moveTo(2, -11); ctx.lineTo(6, -16); ctx.stroke();
            } else if (w.includes('cheese') || w.includes('pizza')) {
                ctx.fillStyle = '#facc15';
                ctx.beginPath(); ctx.moveTo(-13, 9); ctx.lineTo(13, 9); ctx.lineTo(0, -13); ctx.closePath(); ctx.fill();
                ctx.fillStyle = w.includes('pizza') ? '#ef4444' : '#eab308';
                ctx.beginPath(); ctx.arc(-2, 2, 2.2, 0, Math.PI * 2); ctx.arc(4, 4, 1.8, 0, Math.PI * 2); ctx.arc(0, -4, 1.6, 0, Math.PI * 2); ctx.fill();
            } else if (w.includes('cake') || w.includes('muffin') || w.includes('ice cream')) {
                ctx.fillStyle = primary; ctx.fillRect(-11, -1, 22, 13);
                ctx.fillStyle = secondary;
                ctx.beginPath(); ctx.arc(-6, -2, 5, Math.PI, 0); ctx.arc(0, -3, 5.5, Math.PI, 0); ctx.arc(6, -2, 5, Math.PI, 0); ctx.fill();
                ctx.fillStyle = '#ef4444'; ctx.beginPath(); ctx.arc(0, -10, 2.5, 0, Math.PI * 2); ctx.fill();
            } else if (w.includes('fish') || w.includes('tuna')) {
                ctx.fillStyle = '#0ea5e9';
                ctx.beginPath(); ctx.ellipse(-2, 0, 11, 6.5, 0, 0, Math.PI * 2); ctx.fill();
                ctx.beginPath(); ctx.moveTo(8, 0); ctx.lineTo(15, -6); ctx.lineTo(15, 6); ctx.closePath(); ctx.fill();
                ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(-7, -1.5, 1.6, 0, Math.PI * 2); ctx.fill();
            } else {
                ctx.fillStyle = '#e2e8f0';
                ctx.beginPath(); ctx.arc(0, 2, 13, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = primary;
                ctx.beginPath(); ctx.arc(0, 2, 8.5, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = secondary;
                ctx.beginPath(); ctx.arc(-3, -1, 3, 0, Math.PI * 2); ctx.arc(4, 3, 2.5, 0, Math.PI * 2); ctx.fill();
            }
        } else if (category === 'transport') {
            if (w.includes('plane') || w.includes('air')) {
                ctx.fillStyle = primary;
                ctx.beginPath(); ctx.moveTo(0, -15); ctx.lineTo(3, -3); ctx.lineTo(15, 4); ctx.lineTo(15, 7); ctx.lineTo(3, 4); ctx.lineTo(2, 12); ctx.lineTo(6, 15); ctx.lineTo(-6, 15); ctx.lineTo(-2, 12); ctx.lineTo(-3, 4); ctx.lineTo(-15, 7); ctx.lineTo(-15, 4); ctx.lineTo(-3, -3); ctx.closePath(); ctx.fill();
            } else if (w.includes('boat') || w.includes('ship')) {
                ctx.fillStyle = primary;
                ctx.beginPath(); ctx.moveTo(-14, 4); ctx.lineTo(14, 4); ctx.lineTo(10, 12); ctx.lineTo(-10, 12); ctx.closePath(); ctx.fill();
                ctx.fillStyle = secondary;
                ctx.beginPath(); ctx.moveTo(0, -13); ctx.lineTo(10, 2); ctx.lineTo(0, 2); ctx.closePath(); ctx.fill();
            } else if (w.includes('bike')) {
                ctx.strokeStyle = primary; ctx.lineWidth = 2.2;
                ctx.beginPath(); ctx.arc(-9, 6, 5.5, 0, Math.PI * 2); ctx.arc(9, 6, 5.5, 0, Math.PI * 2); ctx.stroke();
                ctx.strokeStyle = secondary;
                ctx.beginPath(); ctx.moveTo(-9, 6); ctx.lineTo(-2, -4); ctx.lineTo(7, -4); ctx.lineTo(9, 6); ctx.moveTo(-2, -4); ctx.lineTo(1, 6); ctx.stroke();
            } else {
                ctx.fillStyle = primary;
                ctx.fillRect(-14, -6, 28, 14);
                ctx.fillStyle = secondary;
                ctx.fillRect(-10, -4, 7, 5); ctx.fillRect(2, -4, 7, 5);
                ctx.fillStyle = '#1e293b';
                ctx.beginPath(); ctx.arc(-8, 10, 3.8, 0, Math.PI * 2); ctx.arc(8, 10, 3.8, 0, Math.PI * 2); ctx.fill();
            }
        } else if (category === 'technology') {
            ctx.fillStyle = primary;
            if (w.includes('phone') || w.includes('mobile') || w.includes('tablet')) {
                ctx.fillRect(-8, -13, 16, 26);
                ctx.fillStyle = secondary; ctx.fillRect(-6, -10, 12, 19);
                ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(0, 11, 1.3, 0, Math.PI * 2); ctx.fill();
            } else if (w.includes('camera') || w.includes('photo') || w.includes('selfie')) {
                ctx.fillRect(-13, -7, 26, 17);
                ctx.fillRect(-6, -11, 8, 4);
                ctx.fillStyle = secondary; ctx.beginPath(); ctx.arc(0, 1.5, 5.5, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#0f172a'; ctx.beginPath(); ctx.arc(0, 1.5, 3, 0, Math.PI * 2); ctx.fill();
            } else if (w.includes('headphones')) {
                ctx.strokeStyle = primary; ctx.lineWidth = 3;
                ctx.beginPath(); ctx.arc(0, 2, 11, Math.PI, 0); ctx.stroke();
                ctx.fillStyle = secondary; ctx.fillRect(-14, 1, 5, 10); ctx.fillRect(9, 1, 5, 10);
            } else {
                ctx.fillRect(-14, -10, 28, 18);
                ctx.fillStyle = secondary; ctx.fillRect(-11, -7, 22, 12);
                ctx.fillStyle = primary; ctx.fillRect(-6, 10, 12, 3);
            }
        } else if (category === 'space') {
            if (w.includes('rocket') || w.includes('shuttle') || w.includes('launch')) {
                ctx.fillStyle = '#e2e8f0';
                ctx.beginPath(); ctx.moveTo(0, -15); ctx.quadraticCurveTo(8, -6, 6, 8); ctx.lineTo(-6, 8); ctx.quadraticCurveTo(-8, -6, 0, -15); ctx.fill();
                ctx.fillStyle = '#ef4444';
                ctx.beginPath(); ctx.moveTo(-6, 4); ctx.lineTo(-12, 12); ctx.lineTo(-6, 9); ctx.moveTo(6, 4); ctx.lineTo(12, 12); ctx.lineTo(6, 9); ctx.fill();
                ctx.fillStyle = '#38bdf8'; ctx.beginPath(); ctx.arc(0, -3, 3, 0, Math.PI * 2); ctx.fill();
            } else if (w.includes('sun') || w.includes('star')) {
                ctx.fillStyle = '#facc15';
                ctx.beginPath(); ctx.arc(0, 0, 9, 0, Math.PI * 2); ctx.fill();
                ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 2;
                for (let i = 0; i < 8; i++) {
                    const a = (i * Math.PI) / 4;
                    ctx.beginPath(); ctx.moveTo(Math.cos(a) * 11, Math.sin(a) * 11); ctx.lineTo(Math.cos(a) * 15, Math.sin(a) * 15); ctx.stroke();
                }
            } else {
                ctx.fillStyle = primary; ctx.beginPath(); ctx.arc(0, 0, 10, 0, Math.PI * 2); ctx.fill();
                ctx.strokeStyle = secondary; ctx.lineWidth = 2.4;
                ctx.beginPath(); ctx.ellipse(0, 0, 16, 4.5, -0.3, 0, Math.PI * 2); ctx.stroke();
            }
        } else if (category === 'nature') {
            if (w.includes('mountain') || w.includes('volcano')) {
                ctx.fillStyle = w.includes('volcano') ? '#7f1d1d' : '#475569';
                ctx.beginPath(); ctx.moveTo(-15, 12); ctx.lineTo(0, -12); ctx.lineTo(15, 12); ctx.closePath(); ctx.fill();
                ctx.fillStyle = w.includes('volcano') ? '#f97316' : '#f8fafc';
                ctx.beginPath(); ctx.moveTo(-5, -4); ctx.lineTo(0, -12); ctx.lineTo(5, -4); ctx.closePath(); ctx.fill();
            } else if (w.includes('sea') || w.includes('river') || w.includes('lake') || w.includes('waterfall') || w.includes('channel')) {
                ctx.strokeStyle = '#0ea5e9'; ctx.lineWidth = 3;
                for (let y = -6; y <= 6; y += 6) {
                    ctx.beginPath(); ctx.moveTo(-14, y); ctx.quadraticCurveTo(-7, y - 4, 0, y); ctx.quadraticCurveTo(7, y + 4, 14, y); ctx.stroke();
                }
            } else {
                ctx.fillStyle = '#92400e'; ctx.fillRect(-2.5, 4, 5, 10);
                ctx.fillStyle = primary;
                ctx.beginPath(); ctx.arc(0, -3, 9, 0, Math.PI * 2); ctx.arc(-6, 1, 6, 0, Math.PI * 2); ctx.arc(6, 1, 6, 0, Math.PI * 2); ctx.fill();
            }
        } else if (category === 'animals') {
            ctx.fillStyle = primary;
            ctx.beginPath(); ctx.arc(-9, -9, 4.5, 0, Math.PI * 2); ctx.arc(9, -9, 4.5, 0, Math.PI * 2); ctx.fill();
            ctx.beginPath(); ctx.arc(0, 1, 11, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = secondary;
            ctx.beginPath(); ctx.ellipse(0, 5, 6, 4.5, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#1e293b';
            ctx.beginPath(); ctx.arc(-4, -2, 1.7, 0, Math.PI * 2); ctx.arc(4, -2, 1.7, 0, Math.PI * 2); ctx.arc(0, 3, 2, 0, Math.PI * 2); ctx.fill();
        } else if (category === 'house' || category === 'places') {
            ctx.fillStyle = primary;
            ctx.fillRect(-12, -2, 24, 15);
            ctx.fillStyle = secondary;
            ctx.beginPath(); ctx.moveTo(-15, -2); ctx.lineTo(0, -14); ctx.lineTo(15, -2); ctx.closePath(); ctx.fill();
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(-8, 2, 5, 5); ctx.fillRect(3, 2, 5, 5);
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(-2.5, 6, 5, 7);
        } else if (category === 'clothes') {
            ctx.fillStyle = primary;
            ctx.beginPath();
            ctx.moveTo(-6, -12); ctx.lineTo(6, -12); ctx.lineTo(14, -4); ctx.lineTo(10, 2); ctx.lineTo(7, -1);
            ctx.lineTo(7, 13); ctx.lineTo(-7, 13); ctx.lineTo(-7, -1); ctx.lineTo(-10, 2); ctx.lineTo(-14, -4);
            ctx.closePath(); ctx.fill();
            ctx.strokeStyle = secondary; ctx.lineWidth = 2; ctx.stroke();
        } else if (category === 'school') {
            ctx.fillStyle = primary; ctx.fillRect(-12, -12, 24, 24);
            ctx.fillStyle = '#ffffff'; ctx.fillRect(-9, -9, 18, 18);
            ctx.fillStyle = secondary; ctx.fillRect(-12, -12, 5, 24);
            ctx.strokeStyle = primary; ctx.lineWidth = 1.6;
            ctx.beginPath(); ctx.moveTo(-4, -3); ctx.lineTo(6, -3); ctx.moveTo(-4, 2); ctx.lineTo(6, 2); ctx.moveTo(-4, 7); ctx.lineTo(3, 7); ctx.stroke();
        } else if (category === 'music') {
            ctx.fillStyle = primary;
            ctx.beginPath(); ctx.ellipse(-6, 9, 4.5, 3.2, -0.3, 0, Math.PI * 2); ctx.ellipse(7, 6, 4.5, 3.2, -0.3, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = secondary; ctx.lineWidth = 2.6;
            ctx.beginPath(); ctx.moveTo(-2, 8); ctx.lineTo(-2, -10); ctx.lineTo(11, -13); ctx.lineTo(11, 5); ctx.stroke();
        } else if (category === 'events') {
            ctx.fillStyle = primary;
            ctx.beginPath(); ctx.ellipse(-5, -3, 6.5, 8.5, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = secondary;
            ctx.beginPath(); ctx.ellipse(6, -6, 6, 8, 0, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = '#64748b'; ctx.lineWidth = 1.4;
            ctx.beginPath(); ctx.moveTo(-5, 6); ctx.quadraticCurveTo(-8, 11, -4, 15); ctx.moveTo(6, 2); ctx.quadraticCurveTo(9, 8, 5, 14); ctx.stroke();
        } else if (category === 'time') {
            ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(0, 0, 13, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = primary; ctx.lineWidth = 2.5; ctx.stroke();
            ctx.strokeStyle = '#1e293b'; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -8); ctx.moveTo(0, 0); ctx.lineTo(6, 2); ctx.stroke();
        } else if (category === 'prepositions') {
            ctx.fillStyle = primary; ctx.fillRect(-10, -4, 20, 14);
            ctx.fillStyle = secondary;
            const dy = w.includes('under') || w.includes('down') ? 13 : w.includes('on') || w.includes('top') ? -9 : 3;
            const dx = w.includes('left') ? -13 : w.includes('next') || w.includes('right') ? 13 : 0;
            ctx.beginPath(); ctx.arc(dx, dy, 4, 0, Math.PI * 2); ctx.fill();
        } else if (category === 'communication') {
            ctx.fillStyle = primary;
            ctx.beginPath(); ctx.ellipse(0, -2, 14, 10, 0, 0, Math.PI * 2); ctx.fill();
            ctx.beginPath(); ctx.moveTo(-6, 6); ctx.lineTo(-11, 14); ctx.lineTo(1, 7); ctx.closePath(); ctx.fill();
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(word.includes('?') ? '?' : word.includes('!') ? '!' : '...', 0, -2);
        } else if (category === 'jobs') {
            ctx.fillStyle = primary; ctx.beginPath(); ctx.arc(0, -6, 6, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = secondary;
            ctx.beginPath(); ctx.arc(0, 13, 12, Math.PI, 0); ctx.fill();
        } else if (category === 'travel') {
            ctx.fillStyle = primary; ctx.fillRect(-11, -8, 22, 18);
            ctx.strokeStyle = secondary; ctx.lineWidth = 2.5;
            ctx.strokeRect(-5, -13, 10, 5);
            ctx.beginPath(); ctx.moveTo(-11, 1); ctx.lineTo(11, 1); ctx.stroke();
        } else if (category === 'actions') {
            ctx.fillStyle = primary;
            ctx.beginPath(); ctx.moveTo(2, -14); ctx.lineTo(-9, 1); ctx.lineTo(-1, 1); ctx.lineTo(-4, 14); ctx.lineTo(10, -2); ctx.lineTo(2, -2); ctx.closePath(); ctx.fill();
            ctx.strokeStyle = secondary; ctx.lineWidth = 1.4; ctx.stroke();
        } else {
            const ch = (word.replace(/^[^a-zA-Z0-9]+/, '')[0] || 'A').toUpperCase();
            drawBadgeText(ch, primary, '#ffffff');
        }

        ctx.restore();
    };
}

// Všechny záznamy ze slovníčku GoGetter 2 (Unit 0 – Unit 8) roztříděné podle kategorií
const VOCAB_BY_CATEGORY = {
    countries: [
        ["Argentina", "Argentina"],
        ["Argentinian", "argentinský, Argentinec, Argentinka"],
        ["China", "Čína"],
        ["Chinese", "čínský, Číňan, Číňanka"],
        ["France", "Francie"],
        ["French", "francouzský, Francouz, Francouzka"],
        ["Germany", "Německo"],
        ["German", "německý, Němec, Němka"],
        ["Italy", "Itálie"],
        ["Italian", "italský, Ital, Italka"],
        ["Poland", "Polsko"],
        ["Polish", "polský, Polák, Polka"],
        ["Spain", "Španělsko"],
        ["Spanish", "španělský, Španěl, Španělka"],
        ["Turkey", "Turecko"],
        ["Turkish", "turecký, Turek, Turkyně"],
        ["the UK", "Spojené království"],
        ["British", "britský, Brit, Britka"],
        ["the USA", "Spojené státy americké"],
        ["American", "americký, Američan, Američanka"],
        ["Japanese", "japonština"],
        ["African", "africký"],
        ["Mexican", "mexický"],
    ],

    months: [
        ["January", "leden"],
        ["February", "únor"],
        ["March", "březen"],
        ["April", "duben"],
        ["May", "květen"],
        ["June", "červen"],
        ["July", "červenec"],
        ["August", "srpen"],
        ["September", "září"],
        ["October", "říjen"],
        ["November", "listopad"],
        ["December", "prosinec"],
    ],

    time: [
        ["on Monday", "v pondělí"],
        ["after", "po (časově)"],
        ["at the same time", "ve stejnou dobu"],
        ["on weekdays", "ve všední dny"],
        ["tonight", "dnes večer"],
        ["at", "v (hodin)"],
        ["in", "v (měsíc)"],
        ["on", "v (den v týdnu)"],
        ["at lunchtime", "během oběda"],
        ["at the moment", "teď, momentálně"],
        ["(sixteen) times a day", "šestnáctkrát za den"],
        ["minute", "minuta"],
        ["second", "sekunda"],
        ["yesterday", "včera"],
        ["last night", "včera večer"],
        ["last week", "minulý týden"],
        ["last month", "minulý měsíc"],
        ["last year", "minulý rok"],
        ["last Monday", "minulé pondělí"],
        ["last May", "minulý květen"],
        ["later", "později"],
        ["bedtime", "čas, kdy se jde spát/večerka"],
        ["time for bed", "čas jít spát"],
        ["dinnertime", "čas večeře"],
        ["this morning", "dnes ráno"],
        ["free time", "volný čas"],
        ["midnight", "půlnoc"],
        ["every ten minutes", "každých deset minut"],
        ["on time", "načas"],
        ["for eight hours", "osm hodin"],
        ["take 48 days", "trvat 48 dní"],
        ["Christmas Day", "25. prosince"],
        ["tomorrow", "zítra"],
        ["in the 1970s", "v sedmdesátých letech"],
        ["half past six", "půl sedmé"],
        ["aged 7-11", "od 7 do 11 let"],
        ["at midnight", "o půlnoci"],
        ["the past", "minulost"],
    ],

    ordinals: [
        ["the first", "první"],
        ["the second", "druhý"],
        ["the third", "třetí"],
        ["the fourth", "čtvrtý"],
        ["the fifth", "pátý"],
        ["the sixth", "šestý"],
        ["the seventh", "sedmý"],
        ["the eighth", "osmý"],
        ["the ninth", "devátý"],
        ["the tenth", "desátý"],
        ["the eleventh", "jedenáctý"],
        ["the twelfth", "dvanáctý"],
        ["the thirteenth", "třináctý"],
        ["the twentieth", "dvacátý"],
        ["the twenty-first", "dvacátý první"],
        ["the thirtieth", "třicátý"],
    ],

    actions: [
        ["cook", "vařit"],
        ["draw", "kreslit"],
        ["play football", "hrát fotbal"],
        ["play the guitar", "hrát na kytaru"],
        ["ride a bike", "jezdit na kole"],
        ["run", "běhat"],
        ["sing", "zpívat"],
        ["skateboard", "jezdit na skateboardu"],
        ["speak Spanish", "mluvit španělsky"],
        ["swim", "plavat"],
        ["can't", "nemoci, neumět"],
        ["do experiments", "dělat experimenty"],
        ["play the piano", "hrát na klavír"],
        ["bring", "přinést"],
        ["do your homework", "dělat svůj domácí úkol"],
        ["get up", "vstát"],
        ["have breakfast", "snídat"],
        ["listen to music", "poslouchat hudbu"],
        ["play sports", "dělat sporty"],
        ["send text messages", "poslat textovou zprávu"],
        ["study", "studovat"],
        ["walk to school", "jít pěšky do školy"],
        ["watch TV", "dívat se na televizi"],
        ["do ballet", "dělat balet"],
        ["do judo", "dělat judo"],
        ["do karate", "dělat karate"],
        ["do pottery", "dělat keramiku"],
        ["play basketball", "hrát basketbal"],
        ["play chess", "hrát šachy"],
        ["play tennis", "hrát tenis"],
        ["play the drums", "hrát na bubny"],
        ["buy", "koupit"],
        ["paint pictures", "malovat obrazy"],
        ["play an instrument", "hrát na hudební nástroj"],
        ["play in a band", "hrát v kapele"],
        ["rest", "odpočívat"],
        ["sleep", "spát"],
        ["stay in bed", "zůstat v posteli"],
        ["understand", "rozumět"],
        ["join a club", "přidat se do klubu/kroužku"],
        ["describe", "popsat"],
        ["finish", "končit, dokončit"],
        ["miss your parents", "stýskat si po rodičích"],
        ["wake up", "vzbudit se, probudit se"],
        ["go skateboarding", "jít na skateboard"],
        ["wear", "nosit, mít oblečené"],
        ["make", "udělat, vyrobit"],
        ["decorate", "zdobit"],
        ["look", "vypadat"],
        ["put", "dát"],
        ["can't wait", "nemoci se dočkat"],
        ["go for a swim", "jít si zaplavat"],
        ["go to the beach", "jít na pláž"],
        ["go to the park", "jít do parku"],
        ["have a picnic", "mít piknik"],
        ["have fun", "bavit se"],
        ["throw", "hodit"],
        ["use", "použít"],
        ["have a quick breakfast", "dát si rychlou snídani"],
        ["chat online", "povídat si online"],
        ["download a song", "stáhnout píseň"],
        ["send an email", "poslat email"],
        ["surf the Internet", "surfovat po internetu"],
        ["take a photo", "fotit, vyfotit"],
        ["take a selfie", "vyfotit sám sebe"],
        ["talk on the phone", "mluvit po telefonu"],
        ["text a friend", "napsat kamarádovi zprávu"],
        ["go to bed", "jít do postele"],
        ["spend time", "trávit čas"],
        ["ask for", "požádat"],
        ["chat", "bavit se, chatovat"],
        ["laugh", "smát se"],
        ["sit", "sedět"],
        ["sit down", "sednout si"],
        ["take an order", "vzít objednávku"],
        ["dance", "tančit"],
        ["drive", "řídit"],
        ["look (tired)", "vypadat (unaveně)"],
        ["look for", "hledat"],
        ["be sick", "být špatně, zvracet"],
        ["enjoy", "užívat si"],
        ["fly", "letět"],
        ["exercise", "cvičit"],
        ["go on a spacewalk", "jít na procházku vesmírem"],
        ["go round", "obíhat kolem"],
        ["go to sleep", "jít spát"],
        ["have a shower", "sprchovat se"],
        ["have coffee", "dát si kávu"],
        ["imagine", "představit si"],
        ["launch", "zahájení, vypustit"],
        ["travel into space", "cestovat do vesmíru"],
        ["try", "zkusit"],
        ["wash", "umývat"],
        ["go on holiday", "jet na dovolenou/na prázdniny"],
        ["go skiing", "jet lyžovat"],
        ["go swimming", "jít plavat"],
        ["kayak", "kajak, jezdit na kajaku"],
        ["surf", "surfovat"],
        ["agree", "souhlasit"],
        ["climb", "lézt, šplhat"],
        ["climb down", "slézt"],
        ["cycle", "jezdit na kole"],
        ["go cycling", "jít na kolo"],
        ["go kayaking", "jít jezdit na kajaku"],
        ["prefer", "dávat přednost"],
        ["kill", "zabít"],
        ["get", "dostat"],
        ["see a doctor", "navštívit doktora"],
        ["see a film", "vidět film"],
        ["take", "vzít"],
        ["be asleep", "spát"],
        ["tell the truth", "říct pravdu"],
        ["decide", "rozhodnout se"],
        ["hear", "slyšet"],
        ["build", "stavět"],
        ["grow up", "vyrůstat"],
        ["arrive", "přijet, přijít"],
        ["ask", "ptát se, zeptat se"],
        ["babysit", "hlídat dítě"],
        ["be back", "být zpět"],
        ["clean (verb)", "uklízet"],
        ["cry", "plakat"],
        ["jump", "skákat"],
        ["stay at a friend's house", "zůstat u kamaráda"],
        ["walk downstairs", "jít dolů"],
        ["feel bad", "cítit se špatně"],
        ["feel ill", "cítit se nemocný"],
        ["go to work", "jít do práce"],
        ["wash the dishes", "umývat nádobí"],
        ["borrow", "půjčit si"],
        ["forget", "zapomenout"],
        ["go to a party", "jít na večírek"],
        ["leave", "odejít, odjet"],
        ["leave (forget)", "nechat, zapomenout"],
        ["do the shopping", "nakupovat"],
        ["empty the bin", "vynášet koš"],
        ["look after your brother/sister", "starat se o bratra/sestru"],
        ["make your bed", "ustlat postel"],
        ["tidy your room", "uklízet si pokoj"],
        ["walk the dog", "jít se psem na procházku"],
        ["wash the car", "umýt auto"],
        ["give", "dát"],
        ["help around the house", "pomáhat doma"],
        ["save for", "šetřit na"],
        ["get off", "vystoupit"],
        ["get on", "nastoupit"],
        ["carry", "uvézt"],
        ["go by bike", "jet na kole"],
        ["go by boat", "jet loďkou"],
        ["go by car", "jet autem"],
        ["go by motorbike", "jet na motorce"],
        ["go by train", "jet vlakem"],
        ["by tram", "jet tramvají"],
        ["go on foot", "jít pěšky"],
        ["go away for the weekend", "jet pryč na víkend"],
        ["go camping", "jet stanovat"],
        ["go for a walk", "jít na procházku"],
        ["go to the mountains", "jít na hory"],
        ["have a cold", "být nachlazený"],
        ["sleep well", "spát dobře"],
        ["stay in a hostel", "bydlet/pobývat v hostelu"],
        ["tell", "říct"],
        ["buy a souvenir", "kupovat suvenýr"],
        ["eat at a restaurant", "jíst v restauraci"],
        ["go sightseeing", "jít na prohlídku památek"],
        ["make friends", "spřátelit se"],
        ["stay in a hotel", "bydlet/pobývat v hotelu"],
        ["take photos", "fotit"],
        ["visit a museum", "navštívit muzeum"],
        ["have a good time", "mít se dobře/dobře se bavit"],
        ["stay with a friend", "bydlet u kamaráda"],
        ["open", "otevřít"],
        ["travel round London", "cestovat po Londýně"],
        ["work hard", "pracovat tvrdě"],
        ["cook food", "vařit jídlo"],
        ["get presents", "dostat dárky"],
        ["sing 'Happy Birthday'", "zpívat „Všechno nejlepší k narozeninám“"],
        ["take part in a competition", "zúčastnit se soutěže"],
        ["tell a story", "vyprávět příběh"],
        ["wear a costume", "mít oblečený kostým"],
        ["blow up the balloons", "nafouknout balónky"],
        ["download", "stáhnout"],
        ["invite", "pozvat"],
        ["play a concert", "hrát koncert"],
        ["support", "fandit"],
        ["explore", "prozkoumat"],
        ["get ready for", "připravit se na"],
        ["have a tour of the aquarium", "mít prohlídku akvária"],
        ["walk around", "procházet se"],
    ],

    house: [
        ["armchair", "křeslo"],
        ["bath", "vana"],
        ["bed", "postel"],
        ["chair", "židle"],
        ["desk", "psací stůl"],
        ["fridge", "lednice"],
        ["shelves", "police"],
        ["shower", "sprcha"],
        ["sofa", "pohovka"],
        ["table", "stůl"],
        ["wardrobe", "šatní skříň"],
        ["alarm clock", "budík"],
        ["on the floor", "na podlaze"],
        ["home", "domov"],
        ["tree house", "dům ve stromě"],
        ["plate", "talíř"],
        ["money box", "pokladnička"],
        ["toothbrush", "zubní kartáček"],
    ],

    prepositions: [
        ["in (place)", "v"],
        ["next to", "vedle"],
        ["on (place)", "na"],
        ["under", "pod"],
        ["behind", "za"],
        ["between", "mezi"],
        ["in front of", "před"],
        ["opposite", "naproti"],
        ["past", "kolem"],
        ["at school", "ve škole"],
        ["at the café", "v kavárně"],
        ["at home", "doma"],
        ["in class", "ve třídě"],
        ["outside", "venku"],
        ["all over the world", "po celém světě"],
        ["in the air", "ve vzduchu"],
        ["on top", "nahoře, nahoru"],
        ["downstairs", "dole"],
        ["over there", "támhle"],
        ["down (North Street)", "dolů (do North Street)"],
        ["down", "dolů"],
        ["left", "levý"],
        ["in the wild", "v divočině/ve volné přírodě"],
        ["through", "přes, skrz"],
        ["at work", "v práci"],
        ["in the world", "na světě"],
        ["in town", "ve městě"],
        ["on water", "na vodě"],
        ["across", "přes"],
        ["about", "o"],
        ["against", "proti"],
    ],

    clothes: [
        ["coat", "kabát"],
        ["dress", "šaty"],
        ["hat", "klobouk"],
        ["hoodie", "mikina s kapucí"],
        ["jacket", "sako, bunda"],
        ["jeans", "džíny"],
        ["jumper", "svetr"],
        ["shoes", "boty"],
        ["skirt", "sukně"],
        ["T-shirt", "tričko"],
        ["trainers", "tenisky"],
        ["trousers", "kalhoty"],
        ["clothes", "oblečení"],
        ["football boots", "kopačky"],
        ["school uniform", "školní uniforma"],
        ["shirt", "košile"],
        ["tie", "kravata"],
        ["tights", "punčochy"],
        ["uniform", "uniforma"],
        ["sunglasses", "sluneční brýle"],
        ["P.E. kit", "souprava na tělocvik"],
        ["costume", "kostým"],
        ["pyjamas", "pyžamo"],
    ],

    animals: [
        ["hamster", "křeček"],
        ["mouse", "myš"],
        ["racoon", "mýval"],
        ["creature", "stvoření"],
        ["seagull", "racek"],
        ["spider", "pavouk"],
        ["penguin", "tučňák"],
        ["python", "krajta"],
        ["hedgehog", "ježek"],
        ["pet rabbit", "domácí králík"],
        ["snake", "had"],
        ["tortoise", "želva"],
        ["cow", "kráva"],
        ["shark", "žralok"],
        ["polar bear", "lední medvěd"],
        ["underwater creature", "podvodní tvor"],
    ],

    adjectives: [
        ["big", "velký"],
        ["clever", "chytrý"],
        ["friendly", "přátelský"],
        ["funny", "zábavný, legrační"],
        ["helpful", "nápomocný, ochotný"],
        ["new", "nový"],
        ["old", "starý"],
        ["pretty", "krásný"],
        ["small", "malý"],
        ["sporty", "sportovní"],
        ["tidy", "uklizený, uspořádaný"],
        ["messy", "nepořádný"],
        ["boring", "nudný"],
        ["noisy", "hlučný"],
        ["crazy", "bláznivý, šílený"],
        ["exciting", "vzrušující"],
        ["typical", "typický"],
        ["comfortable", "pohodlný"],
        ["cream (colour)", "krémový"],
        ["dark blue", "tmavě modrý"],
        ["expensive", "drahý"],
        ["purple", "fialový"],
        ["horrible", "hrozný"],
        ["beautiful", "krásný"],
        ["quick", "rychlý"],
        ["terrible", "hrozný"],
        ["popular", "oblíbený"],
        ["round", "kulatý"],
        ["special", "speciální, zvláštní"],
        ["sweet", "sladký"],
        ["wrong", "špatný, špatně"],
        ["excited about", "nadšený z"],
        ["worried about", "znepokojený z/kvůli"],
        ["bad at", "špatný v (něčem)"],
        ["good at", "dobrý v"],
        ["interested in", "zajímat se o"],
        ["scared of", "vystrašený z"],
        ["real", "opravdický"],
        ["amazing", "úžasný"],
        ["delicious", "výborný, chutný"],
        ["cheap", "levný"],
        ["dangerous", "nebezpečný"],
        ["difficult", "obtížný, těžký"],
        ["easy", "lehký, snadný"],
        ["high", "vysoký"],
        ["low", "nízký"],
        ["safe", "bezpečný"],
        ["bad", "špatný"],
        ["better", "lepší"],
        ["hot", "horký"],
        ["long", "dlouhý"],
        ["next", "další"],
        ["slow", "pomalý"],
        ["worse", "horší"],
        ["fast", "rychlý"],
        ["intelligent", "inteligentní"],
        ["kind", "milý"],
        ["strong", "silný"],
        ["best", "nejlepší"],
        ["cute", "roztomilý"],
        ["warm", "teplý"],
        ["worst", "nejhorší"],
        ["giant", "obrovský"],
        ["young", "mladý"],
        ["similar", "podobný"],
        ["closed", "zavřený"],
        ["ill", "nemocný"],
        ["little", "malý"],
        ["out of battery", "vybitý"],
        ["sunny", "slunečno"],
        ["alone", "sám"],
        ["busy", "zaneprázdněný"],
        ["famous for", "známý pro"],
        ["full of", "plný (něčeho)"],
        ["large", "velký"],
        ["modern", "moderní"],
        ["clean", "čistý"],
        ["important", "důležitý"],
        ["full", "plný"],
        ["dirty", "špinavý"],
        ["thirsty", "žíznivý"],
        ["polite", "zdvořilý"],
        ["heavy", "těžký"],
        ["short", "krátký"],
        ["first", "první"],
    ],

    school: [
        ["Art", "výtvarná výchova"],
        ["Computer Studies", "počítače, informatika"],
        ["English", "angličtina"],
        ["French (subject)", "francouzština"],
        ["Geography", "zeměpis"],
        ["History", "dějepis"],
        ["Maths", "matematika"],
        ["Music", "hudební výchova"],
        ["P.E.", "tělocvik"],
        ["Science", "věda, přírodověda"],
        ["calculator", "kalkulačka"],
        ["dictionary", "slovník"],
        ["map", "mapa"],
        ["paints", "barvy"],
        ["pencil case", "penál"],
        ["rubber", "guma"],
        ["ruler", "pravítko"],
        ["scissors", "nůžky"],
        ["schoolbook", "učebnice"],
        ["club", "klub, volnočasový kroužek"],
        ["daily routine", "každodenní činnost"],
        ["late for class", "pozdě ve třídě"],
        ["canteen", "jídelna"],
        ["classroom", "třída"],
        ["computer room", "počítačová místnost"],
        ["gym", "tělocvična"],
        ["hall", "hala, sál"],
        ["library", "knihovna"],
        ["playground", "hřiště"],
        ["staff room", "sborovna, místnost pro zaměstnance"],
        ["assembly", "shromáždění, sněm"],
        ["bell", "zvonek"],
        ["cookery class", "lekce vaření"],
        ["after-school club", "mimoškolní kroužek"],
        ["school rules", "školní pravidla"],
        ["secondary school", "střední škola"],
        ["university", "univerzita"],
        ["school journey", "cesta do školy"],
        ["schoolchildren", "školní děti"],
        ["schoolwork", "školní práce"],
    ],

    food: [
        ["apple", "jablko"],
        ["biscuits", "sušenky"],
        ["bread", "chleba"],
        ["cereal", "cereálie, obilniny"],
        ["cheese", "sýr"],
        ["chicken", "kuře, kuřecí"],
        ["chips", "hranolky"],
        ["fish", "ryba"],
        ["fruit", "ovoce"],
        ["ham", "šunka"],
        ["meat", "maso"],
        ["orange juice", "pomerančový džus"],
        ["pancakes", "palačinky"],
        ["pasta", "těstoviny"],
        ["potatoes", "brambory"],
        ["rice", "rýže"],
        ["salad", "salát"],
        ["sandwich", "sendvič, obložený chleba"],
        ["sandwiches", "sendviče, obložené chleby"],
        ["sausages", "klobásy, párky"],
        ["tomatoes", "rajčata"],
        ["tuna", "tuňák"],
        ["vegetables", "zelenina"],
        ["water", "voda"],
        ["yoghurt", "jogurt"],
        ["jam", "džem"],
        ["butter", "máslo"],
        ["chocolate", "čokoláda"],
        ["egg", "vejce"],
        ["flour", "mouka"],
        ["lemon", "citrón"],
        ["milk", "mléko"],
        ["strawberry", "jahoda"],
        ["sugar", "cukr"],
        ["chocolate cake", "čokoládový dort"],
        ["recipe", "recept"],
        ["a bar of chocolate", "tabulka čokolády"],
        ["a bottle of water", "láhev vody"],
        ["a can of cola", "plechovka koly"],
        ["a carton of juice", "krabice džusu"],
        ["a jar of jam", "sklenice džemu"],
        ["a packet of biscuits", "balení sušenek"],
        ["chicken legs", "kuřecí stehna"],
        ["lemonade", "limonáda"],
        ["milk shake", "mléčný koktejl"],
        ["cottage cheese", "tvaroh"],
        ["cream", "smetana, šlehačka"],
        ["ice cream", "zmrzlina"],
        ["ingredient", "surovina, ingredience"],
        ["pan", "pánev"],
        ["dinner", "večeře"],
        ["toast", "toust, opečený chleba"],
        ["muffin", "muffin"],
        ["tacos", "tacos (mexické jídlo)"],
        ["piece", "kousek"],
    ],

    technology: [
        ["camera", "fotoaparát, kamera"],
        ["computer", "počítač"],
        ["headphones", "sluchátka"],
        ["keyboard", "klávesnice"],
        ["laptop", "přenosný počítač"],
        ["mobile phone", "mobilní telefon"],
        ["mouse (computer)", "myš (počítačová)"],
        ["printer", "tiskárna"],
        ["screen", "obrazovka"],
        ["speakers", "reproduktory"],
        ["tablet", "tablet"],
        ["TV", "televize"],
        ["on TV", "v televizi"],
        ["phone", "telefon"],
        ["mobile", "mobilní telefon"],
        ["simulator", "simulátor"],
        ["remote", "ovládač"],
    ],

    feelings: [
        ["angry", "naštvaný"],
        ["bored", "znuděný"],
        ["happy", "šťastný, spokojený"],
        ["sad", "smutný"],
        ["scared", "vyděšený, vystrašený"],
        ["tired", "unavený"],
        ["worried", "ustaraný"],
        ["surprised", "překvapený"],
    ],

    space: [
        ["alien", "mimozemšťan"],
        ["rocket", "raketa"],
        ["space travel", "vesmírné cestování"],
        ["space walking", "chůze ve vesmíru"],
        ["Earth", "Země"],
        ["International Space Station", "Mezinárodní vesmírná stanice"],
        ["laboratory", "laboratoř"],
        ["planet", "planeta"],
        ["space", "vesmír"],
        ["space centre", "vesmírné centrum"],
        ["space shuttle", "raketoplán"],
        ["the moon", "měsíc"],
        ["the sun", "slunce"],
        ["star", "hvězda"],
    ],

    nature: [
        ["beach", "pláž"],
        ["city", "velkoměsto"],
        ["desert", "poušť"],
        ["forest", "les"],
        ["island", "ostrov"],
        ["lake", "jezero"],
        ["mountain", "hora"],
        ["river", "řeka"],
        ["sea", "moře"],
        ["town", "město"],
        ["volcano", "sopka"],
        ["waterfall", "vodopád"],
        ["South East", "jihovýchod/jihovýchodní"],
        ["the top", "vrchol"],
        ["snow", "sníh"],
        ["circle of stones", "kruh z kamenů"],
        ["weather", "počasí"],
        ["rain", "déšť"],
        ["the English Channel", "Lamanšský průliv"],
        ["the South Pole", "Jižní pól"],
    ],

    places: [
        ["bank", "banka"],
        ["café", "kavárna"],
        ["cinema", "kino"],
        ["hospital", "nemocnice"],
        ["hotel", "hotel"],
        ["museum", "muzeum"],
        ["park", "park"],
        ["restaurant", "restaurace"],
        ["shop", "obchod"],
        ["stadium", "stadión"],
        ["supermarket", "supermarket"],
        ["theatre", "divadlo"],
        ["pizzeria", "pizzerie"],
        ["sports centre", "sportovní centrum"],
        ["police station", "policejní stanice"],
        ["post office", "pošta"],
        ["shopping centre", "nákupní centrum"],
        ["swimming pool", "bazén"],
        ["train station", "vlakové nádraží"],
        ["film studio", "filmové studio"],
        ["theme park", "zábavní park"],
        ["village", "vesnice"],
        ["fishing village", "rybářská vesnice"],
        ["capital", "hlavní město"],
        ["market", "trh"],
        ["farm", "farma"],
        ["office", "kancelář"],
        ["place of work", "místo výkonu práce"],
        ["shoe shop", "obchod s obuví"],
        ["activity centre", "zábavní centrum"],
        ["building", "budova"],
        ["pyramid", "pyramida"],
        ["Rome", "Řím"],
        ["the Colosseum", "Koloseum"],
        ["ghost station", "stanice duchů"],
        ["tube station", "stanice metra"],
    ],

    jobs: [
        ["artist", "umělec"],
        ["builder", "stavitel"],
        ["bus driver", "řidič autobusu"],
        ["chef", "šéfkuchař"],
        ["doctor", "doktor"],
        ["farmer", "farmář"],
        ["footballer", "fotbalista"],
        ["football player", "fotbalista"],
        ["nurse", "zdravotní sestra"],
        ["office worker", "úředník"],
        ["pilot", "pilot"],
        ["police officer", "policista"],
        ["policeman", "policista"],
        ["shop assistant", "prodavač/ka"],
        ["singer", "zpěvák"],
        ["teacher", "učitel/ka"],
        ["vet", "zvěrolékař"],
        ["art collector", "sběratel umění"],
        ["celebrity", "slavná osobnost"],
        ["zoo-keeper", "ošetřovatel v zoo"],
        ["humans", "lidé"],
        ["actor", "herec"],
        ["tourist", "turista"],
        ["king", "král"],
        ["queen", "královna"],
        ["writer", "spisovatel"],
        ["girlfriend", "přítelkyně"],
        ["explorer", "badatel, cestovatel"],
        ["train driver", "řidič vlaku"],
        ["worker", "pracovník"],
        ["musician", "hudebník"],
        ["pop singer", "popový zpěvák"],
        ["rapper", "raper"],
        ["everyone", "každý"],
        ["poor", "chudák"],
        ["monster", "nestvůra, monstrum"],
    ],

    transport: [
        ["bike", "kolo"],
        ["boat", "loď, člun"],
        ["bus", "autobus"],
        ["car", "auto"],
        ["motorbike", "motorka"],
        ["plane", "letadlo"],
        ["taxi", "taxi"],
        ["train", "vlak"],
        ["tram", "tramvaj"],
        ["underground", "metro"],
        ["wheel", "kolo"],
        ["rubbish lorry", "odpadkový vůz"],
        ["flat tyre", "prázdná pneumatika"],
        ["ship", "loď"],
        ["shipbuilding", "stavba lodí"],
        ["journey", "cesta"],
        ["cable car", "kabinová lanovka"],
        ["double-decker bus", "dvoupatrový autobus"],
        ["ghost bus", "autobus duchů"],
        ["mile", "míle"],
        ["the tube", "metro v Londýně"],
        ["the underground", "metro, podzemní dráha"],
        ["underground train network", "podzemní železniční síť"],
    ],

    travel: [
        ["backpack", "batoh"],
        ["guidebook", "knižní průvodce"],
        ["sleeping bag", "spací pytel"],
        ["suitcase", "kufr"],
        ["tent", "stan"],
        ["torch", "baterka"],
        ["ticket", "lístek"],
        ["climbing wall", "lezecká stěna"],
        ["parachute", "padák"],
        ["Roman holiday", "prázdniny/dovolená v Římě"],
        ["expedition", "expedice"],
        ["ski", "lyže"],
        ["postcard", "pohlednice"],
    ],

    events: [
        ["barbecue", "grilování"],
        ["birthday party", "narozeninová oslava"],
        ["concert", "koncert"],
        ["dance show", "taneční show"],
        ["fancy dress party", "maškarní ples"],
        ["football match", "fotbalový zápas"],
        ["football team", "fotbalový tým"],
        ["football cup final", "finále fotbalového poháru"],
        ["picnic", "piknik"],
        ["play", "divadelní hra"],
        ["sleepover", "přespání u kamaráda"],
        ["talent competition", "soutěž talentů"],
        ["birthday", "narozeniny"],
        ["prize", "cena"],
        ["birthday card", "přání k narozeninám"],
        ["surprise party", "oslava s překvapením"],
        ["good fun", "dobrá zábava"],
        ["adventure", "dobrodružství"],
        ["activities", "aktivity, činnost"],
        ["world record", "světový rekord"],
        ["action film", "akční film"],
        ["cartoon", "kreslený film"],
        ["movie", "film"],
        ["film industry", "filmový průmysl"],
        ["film set", "kulisa"],
        ["national sport", "národní sport"],
        ["rugby", "rugby"],
        ["World War II", "druhá světová válka"],
    ],

    music: [
        ["classical", "vážná"],
        ["jazz", "jazz"],
        ["pop", "popová"],
        ["rap", "rapová"],
        ["reggae", "reggae"],
        ["rock", "rocková"],
        ["band", "kapela"],
        ["rock band", "rocková kapela"],
        ["quartet", "kvartet"],
        ["bagpipes", "dudy"],
        ["musical instrument", "hudební nástroj"],
    ],

    communication: [
        ["Who's from Wales?", "Kdo je z Walesu?"],
        ["Who's got a cat?", "Kdo má kočku?"],
        ["I know!", "Já vím!"],
        ["Help!", "Pomoc!"],
        ["Welcome to the city!", "Vítej(te) ve městě!"],
        ["What's that?", "Co to je?"],
        ["Who are you?", "Kdo jsi?"],
        ["Hurry up!", "Pospěš!"],
        ["We're late!", "Máme zpoždění! Jdeme pozdě!"],
        ["What a mess!", "To je nepořádek!"],
        ["Do you like ...?", "Máš rád ...?"],
        ["Hi, guys.", "Ahoj, lidi."],
        ["That's why.", "To proto."],
        ["How do you spell that?", "Jak se to hláskuje?"],
        ["What's your email address?", "Jaká je tvoje emailová adresa?"],
        ["What's your name?", "Jak se jmenuješ?"],
        ["What's your phone number?", "Jaké je tvoje telefonní číslo?"],
        ["Where do you live?", "Kde bydlíš?"],
        ["Can I help you?", "Můžu ti pomoci?/Co si přeješ?"],
        ["What is the school like?", "Jaká je ta škola?"],
        ["Cool!", "Skvělé!"],
        ["Good idea!", "Výborný nápad!"],
        ["What a disaster!", "To je pohroma!"],
        ["Anything else?", "Něco dalšího?/Ještě něco?"],
        ["What would you like?", "Co bys/te rád/i?"],
        ["Would you like anything to drink?", "Chtěl bys něco k pití?"],
        ["Can I have a vegetarian pizza, please?", "Můžu dostat vegetariánskou pizzu, prosím?"],
        ["I'd like a lemonade, please.", "Chtěl bych limonádu, prosím."],
        ["Good luck!", "Hodně štěstí!"],
        ["Go on!", "Ale no tak!"],
        ["That's a surprise!", "To je překvapení!"],
        ["Wait a minute.", "Počkej chvíli."],
        ["Let's see!", "Podívejme se."],
        ["Come on!", "Pojďme!"],
        ["There he is!", "Tady je!"],
        ["What's that noise?", "Co to je za hluk?"],
        ["What's the matter?", "Co se děje?"],
        ["Bye.", "Ahoj (při rozloučení)."],
        ["Can I speak to Amy, please?", "Můžu mluvit s Amy, prosím?"],
        ["Hello, it's Elena here.", "Ahoj, tady je Elena."],
        ["I'm afraid he's out.", "Bohužel, (on) je venku."],
        ["I'm afraid she's out.", "Bohužel, (ona) je venku."],
        ["It's Elena for you.", "To je Elena pro tebe."],
        ["Just a moment.", "Moment."],
        ["Just a minute.", "Chviličku."],
        ["Hang on.", "Počkej/te."],
        ["See you later.", "Uvidíme se později."],
        ["See you soon.", "Uvidíme se brzy."],
        ["Do you like it here?", "Líbí se ti tady?"],
        ["Be careful!", "Opatrně! Dávej pozor!"],
        ["Hold on!", "Počkej!"],
        ["No way!", "V žádném případě!"],
        ["Well done!", "Výborně!"],
        ["What about you?", "A co ty?"],
        ["What do you think of cartoons?", "Co si myslíš o kreslených filmech?"],
        ["What's your favourite film?", "Jaký je tvůj nejoblíbenější film?"],
        ["I think Electro Max is more exciting.", "Myslím, že Elektro Max je zábavnější."],
        ["In my opinion, they are a bit silly.", "Podle mě jsou trochu hloupé."],
        ["My favourite film is Action Team.", "Můj oblíbený film je Action Team."],
        ["You're right. They're silly.", "Máš pravdu. Jsou hloupé."],
        ["I like it a lot!", "Moc se mi to líbí."],
        ["I think so.", "Myslím, že ano."],
        ["So what?", "No a co?"],
        ["That's true.", "To je pravda."],
        ["It's a shame.", "To je škoda."],
        ["Never mind.", "Nevadí."],
        ["Sorry I'm late.", "Promiň/te, jdu pozdě."],
        ["That was awesome!", "To je úžasné!"],
        ["Look!", "Podívej/te!"],
        ["Are you OK?", "Jsi v pořádku?"],
        ["It wasn't me.", "To jsem nebyl já."],
        ["What's happening?", "Co se děje?"],
        ["Excuse me. Where's North Street?", "Promiňte, kde je North Street?"],
        ["How can I get to the Science Museum?", "Jak se dostanu do muzea vědy?"],
        ["I'm looking for a library.", "Hledám knihovnu."],
        ["Is it far?", "Je to daleko?"],
        ["Go past the cinema.", "Jděte kolem kina."],
        ["Go straight on.", "Jděte rovně."],
        ["It's in/on Green Street.", "Je to v Green Street."],
        ["It's on the right.", "Je to vpravo."],
        ["It's on the left.", "Je to vlevo."],
        ["Turn right.", "Zahněte doprava."],
        ["Turn left.", "Zahněte doleva."],
        ["Guess what?", "Hádej co?"],
        ["That was fun!", "To byla legrace!"],
        ["What's new?", "Co je nového?"],
        ["Can I borrow a pen, please?", "Můžu si půjčit tvoje pero?"],
        ["Is it OK if I use your mobile?", "Nevadí, když použiju tvůj telefon?"],
        ["No, sorry, it isn't OK.", "Ne, promiň, to vadí."],
        ["No, sorry, you can't.", "Ne, promiň, nemůžeš."],
        ["Oh, all right.", "No tak ano."],
        ["Sure, no problem.", "Jasně, to není problém."],
        ["Yes, that's fine.", "Ano, to je v pořádku."],
        ["Yes, you can.", "Ano, můžeš."],
        ["Not again!", "Už zase!"],
        ["Don't worry!", "Neboj!"],
        ["Don't panic!", "Nepanikař!"],
        ["Oh dear!", "Ale ne!"],
        ["Atishoo!", "hepčí"],
        ["It's getting cold.", "Ochlazuje se."],
        ["I'd like a ticket to London, please.", "Chtěl bych jízdenku do Londýna, prosím."],
        ["Here you are.", "Prosím. Tady máte."],
        ["How much is it?", "Kolik to stojí?"],
        ["It's ten pounds twenty, please.", "Deset liber dvacet, prosím."],
        ["What time does the train leave?", "V kolik hodin odjíždí vlak?"],
        ["At seven thirty.", "V sedm třicet."],
        ["What time does it arrive?", "V kolik hodin přijíždí?"],
        ["At eight.", "V osm."],
        ["Thanks.", "Děkuji."],
        ["Don't be sad.", "Nebuď smutná."],
        ["I can't wait!", "Už se nemůžu dočkat!"],
        ["That's a pity.", "To je škoda."],
        ["I'm really sorry.", "Opravdu mě to mrzí."],
        ["Are you busy next Thursday?", "Máš něco příští čtvrtek?"],
        ["I've got tickets for a basketball match.", "Mám lístky na basketbalový zápas."],
        ["Would you like to come?", "Chtěl bys jít?"],
        ["That sounds great. I'd love to come.", "To zní skvěle. Rád bych šel."],
        ["What time does it start?", "V kolik hodin to začíná?"],
        ["Where shall we meet?", "Kde se setkáme?"],
        ["Let's meet outside the Arena at six o'clock.", "Potkejme se v šest hodin před Arénou."],
        ["See you then.", "Uvidíme se potom."],
    ],

    general: [
        ["fashion magazine", "módní časopis"],
        ["feet", "chodidla"],
        ["painting", "malba"],
        ["magic", "kouzlo"],
        ["ring", "kruh, prsten"],
        ["diary", "deník"],
        ["money", "peníze"],
        ["all of ...", "všichni..."],
        ["How many ...?", "Kolik...?"],
        ["How much ...?", "Kolik...?"],
        ["art (fine art)", "výtvarné umění"],
        ["How many times...?", "Kolikrát...?"],
        ["How often ...?", "Jak často...?"],
        ["more", "více"],
        ["paper", "papír"],
        ["finger", "prst"],
        ["magazine", "časopis"],
        ["nothing", "nic"],
        ["a bit", "trochu"],
        ["not really", "ani ne"],
        ["other", "ostatní"],
        ["also", "také"],
        ["own", "vlastní"],
        ["arm", "paže"],
        ["hair", "vlasy"],
        ["hand", "ruka"],
        ["help", "pomoc"],
        ["leg", "noha"],
        ["of all", "ze všech"],
        ["than", "než"],
        ["especially", "zvláště, především"],
        ["centimetre", "centimetr"],
        ["metre", "metr"],
        ["both", "oba"],
        ["Egyptian mummy", "egyptská mumie"],
        ["plan", "plán"],
        ["bad dream", "špatný sen"],
        ["any more", "už ne"],
        ["part", "část, součást"],
        ["mystery", "záhada"],
        ["photo album", "fotoalbum"],
        ["again", "znovu"],
        ["finally", "konečně"],
        ["then", "potom"],
        ["delivery", "doručení"],
        ["for free", "zadarmo"],
        ["pair", "pár"],
        ["extra money", "peníze navíc"],
        ["pocket money", "kapesné"],
        ["just", "pouze, jenom"],
        ["luckily", "naštěstí"],
        ["false teeth", "umělé zuby"],
        ["half-way", "na půl cesty"],
        ["toy", "hračka"],
        ["jobs to do", "věci, které jsou třeba udělat"],
        ["What time...?", "V kolik hodin...?"],
        ["lots of", "hodně"],
        ["suddenly", "najednou, náhle"],
    ],
};

// Sestavení výsledného pole objektů přesně ve formátu vašeho vzoru
const usedIds = new Set();

const VOCABULARY = Object.entries(VOCAB_BY_CATEGORY).flatMap(([category, items]) =>
    items.map(([rawWord, translation]) => {
        const cleanWord = rawWord.replace(/\s*\((verb|colour|subject|place|computer|forget|fine art)\)$/i, '');
        let baseId = rawWord
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '_')
            .replace(/^_|_$/g, '');
        let id = baseId || 'item';
        let suffix = 2;
        while (usedIds.has(id)) {
            id = `${baseId}_${suffix++}`;
        }
        usedIds.add(id);

        const firstAlpha = (cleanWord.match(/[a-zA-Z]/) || ['A'])[0].toUpperCase();
        const wordCount = cleanWord.trim().split(/\s+/).length;
        const difficulty =
            cleanWord === 'apple'
                ? 1
                : wordCount >= 3 || cleanWord.length >= 15
                    ? 3
                    : wordCount === 2 || cleanWord.length >= 7
                        ? 2
                        : 1;

        const [defaultPrimary, defaultSecondary] = CATEGORY_PALETTES[category] || ['#6366f1', '#a5b4fc'];
        const flagCols = category === 'countries' ? FLAG_COLORS[cleanWord.toLowerCase()] : null;

        const primaryColor =
            cleanWord === 'apple' ? '#ff3b5c' : flagCols ? flagCols[0] : defaultPrimary;
        const secondaryColor =
            cleanWord === 'apple' ? '#4ade80' : flagCols ? flagCols[2] : defaultSecondary;

        return {
            id,
            word: cleanWord,
            translation,
            letter: firstAlpha,
            category,
            difficulty,
            primaryColor,
            secondaryColor,
            draw: createDrawFunction(cleanWord, category, primaryColor, secondaryColor),
        };
    })
);
