import { useEffect, useRef } from 'react';

type Star = {
  x: number;
  y: number;
  r: number;
  base: number;
  tw: number;
  phase: number;
  vx: number;
  vy: number;
  accent: boolean;
  anchor: boolean;
};

type Meteor = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  len: number;
  life: number;
  max: number;
};

type Props = {
  className?: string;
  starCount?: number;
  maxOpacity?: number;
  /** 鼠标视差强度（px），0 关闭 */
  parallax?: number;
  /** 是否出现流星 */
  meteors?: boolean;
};

/** 星云底色：青 / 紫 / 深蓝三团极淡辉光，构成「星图」的底色层次 */
const NEBULA = [
  'radial-gradient(80% 58% at 12% 4%, rgba(108,188,178,0.17), transparent 62%)',
  'radial-gradient(64% 52% at 88% 18%, rgba(93,71,127,0.22), transparent 66%)',
  'radial-gradient(82% 56% at 56% 104%, rgba(56,96,150,0.17), transparent 70%)',
  'radial-gradient(44% 34% at 74% 58%, rgba(244,162,97,0.05), transparent 72%)',
].join(',');

/**
 * 星海背景 v2：固定铺满视口、不拦截鼠标、尊重 prefers-reduced-motion。
 * 星云辉光 + 呼吸星辰 + 星座连线 + 偶发流星，呼应「distance · 光年尺度」的宇宙隐喻。
 */
export function StarfieldBackground({
  className = 'fixed inset-0',
  starCount = 260,
  maxOpacity = 0.95,
  parallax = 18,
  meteors = true,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0;
    let h = 0;
    let stars: Star[] = [];
    let edges: [number, number][] = [];
    let raf = 0;
    let last = 0;
    let meteorTimer = 3.5;
    const meteorList: Meteor[] = [];
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

    const makeStars = () => {
      stars = Array.from({ length: starCount }, () => {
        const anchor = Math.random() < 0.15;
        const accent = anchor || Math.random() < 0.28;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: anchor ? 1.5 + Math.random() * 1.3 : accent ? 0.8 + Math.random() * 1.2 : 0.5 + Math.random() * 0.9,
          base: anchor ? 0.72 + Math.random() * 0.28 : 0.34 + Math.random() * (maxOpacity - 0.34),
          tw: 0.35 + Math.random() * 1.5,
          phase: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.045,
          vy: (Math.random() - 0.5) * 0.045,
          accent,
          anchor,
        };
      });

      // 星座连线：锚点星彼此靠近的连成星图
      const anchors = stars.map((s, i) => ({ i, s })).filter((o) => o.s.anchor);
      const limit = Math.min(Math.max(Math.min(w, h) * 0.34, 150), 260);
      edges = [];
      for (const a of anchors) {
        let best = -1;
        let bestD = Infinity;
        for (const b of anchors) {
          if (b.i === a.i) continue;
          const d = Math.hypot(a.s.x - b.s.x, a.s.y - b.s.y);
          if (d < bestD) {
            bestD = d;
            best = b.i;
          }
        }
        if (best >= 0 && bestD < limit) edges.push([a.i, best]);
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeStars();
    };

    const spawnMeteor = () => {
      const dirRight = Math.random() < 0.5;
      const ang = (dirRight ? 1 : -1) * Math.PI * (0.16 + Math.random() * 0.13);
      const sp = 6.5 + Math.random() * 5;
      meteorList.push({
        x: dirRight ? -60 - Math.random() * 240 : w + 60 + Math.random() * 240,
        y: Math.random() * h * 0.5,
        vx: Math.cos(ang) * sp,
        vy: Math.sin(ang) * sp,
        len: 100 + Math.random() * 120,
        life: 0,
        max: 1.05 + Math.random() * 0.65,
      });
    };

    const t0 = performance.now();

    const draw = (now: number) => {
      const time = (now - t0) / 1000;
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 0.016;
      last = now;

      ctx.clearRect(0, 0, w, h);

      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;

      ctx.save();
      ctx.translate(mouse.x * parallax, mouse.y * parallax);

      // 星座连线（先画，压在星辰下面）
      if (edges.length) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(108,188,178,0.13)';
        ctx.beginPath();
        for (const [a, b] of edges) {
          const sa = stars[a];
          const sb = stars[b];
          ctx.moveTo(sa.x, sa.y);
          ctx.lineTo(sb.x, sb.y);
        }
        ctx.stroke();
      }

      for (const s of stars) {
        if (!reduce) {
          s.x += s.vx;
          s.y += s.vy;
          if (s.x < -3) s.x = w + 3;
          else if (s.x > w + 3) s.x = -3;
          if (s.y < -3) s.y = h + 3;
          else if (s.y > h + 3) s.y = -3;
        }
        const a = reduce ? s.base : s.base * (0.5 + 0.5 * Math.sin(time * s.tw + s.phase));
        // 光晕用叠加的半透明圆实现，不用 canvas shadowBlur：
        // iOS Safari(WebKit) 在 dpr 缩放下会把 shadowBlur 放大成大片畸形光斑并残留拖影，
        // 而 Blink(安卓/桌面) 渲染正常 —— 这是两端观感差异的根源。
        if (s.accent) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(108,188,178,${a * 0.14})`;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 1.7, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(160,222,213,${a * 0.26})`;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.accent ? `rgba(160,222,213,${a})` : `rgba(244,241,232,${a})`;
        ctx.fill();
      }

      // 流星
      if (meteors && !reduce) {
        meteorTimer -= dt;
        if (meteorTimer <= 0) {
          meteorTimer = 4.5 + Math.random() * 7;
          spawnMeteor();
          if (Math.random() < 0.35) spawnMeteor();
        }
        for (let i = meteorList.length - 1; i >= 0; i--) {
          const m = meteorList[i];
          m.life += dt;
          m.x += m.vx;
          m.y += m.vy;
          const p = m.life / m.max;
          if (p >= 1 || m.x < -400 || m.x > w + 400 || m.y > h + 400) {
            meteorList.splice(i, 1);
            continue;
          }
          const mag = Math.hypot(m.vx, m.vy) || 1;
          const tx = m.x - (m.vx / mag) * m.len;
          const ty = m.y - (m.vy / mag) * m.len;
          const alpha = Math.sin(Math.PI * p) * 0.9;
          const grad = ctx.createLinearGradient(m.x, m.y, tx, ty);
          grad.addColorStop(0, `rgba(244,241,232,${alpha})`);
          grad.addColorStop(0.3, `rgba(155,216,207,${alpha * 0.55})`);
          grad.addColorStop(1, 'rgba(155,216,207,0)');
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.7;
          ctx.beginPath();
          ctx.moveTo(m.x, m.y);
          ctx.lineTo(tx, ty);
          ctx.stroke();

          // 流星头部同样用叠加圆代替 shadowBlur，避免 iOS Safari 的光斑
          ctx.beginPath();
          ctx.arc(m.x, m.y, 5.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(155,216,207,${alpha * 0.22})`;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(m.x, m.y, 1.9, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.fill();
        }
      }

      ctx.restore();

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.ty = (e.clientY / window.innerHeight) * 2 - 1;
    };

    resize();
    if (reduce) draw(performance.now());
    else raf = requestAnimationFrame(draw);

    window.addEventListener('resize', resize);
    if (!reduce) window.addEventListener('mousemove', onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, [starCount, maxOpacity, parallax, meteors]);

  return (
    <div className={className} aria-hidden="true" style={{ pointerEvents: 'none', zIndex: 0 }}>
      <div className="absolute inset-0" style={{ background: NEBULA }} />
      <canvas ref={canvasRef} className="relative block w-full h-full" />
    </div>
  );
}
