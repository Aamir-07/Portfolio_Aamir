/** Parametric double-helix ring paths for SVG (viewBox 0 0 400 400). */

const CX = 200;
const CY = 200;

export function helixStrandPath(
  baseR: number,
  waveCount: number,
  amp: number,
  phase: number,
  samples = 480,
): string {
  const parts: string[] = [];
  for (let i = 0; i <= samples; i++) {
    const t = (i / samples) * Math.PI * 2;
    const wobble = Math.sin(t * waveCount * 2 + phase) * amp;
    const r = baseR + wobble;
    const x = CX + r * Math.cos(t);
    const y = CY + r * Math.sin(t);
    parts.push(`${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return `M ${parts.join(" L ")}`;
}

export function helixRungs(
  baseR: number,
  waveCount: number,
  amp: number,
  phaseA: number,
  phaseB: number,
  every: number,
): string {
  const d: string[] = [];
  const samples = 480;
  for (let i = 0; i <= samples; i += every) {
    const t = (i / samples) * Math.PI * 2;
    const wa = Math.sin(t * waveCount * 2 + phaseA) * amp;
    const wb = Math.sin(t * waveCount * 2 + phaseB) * amp;
    const ra = baseR + wa;
    const rb = baseR + wb;
    const xa = CX + ra * Math.cos(t);
    const ya = CY + ra * Math.sin(t);
    const xb = CX + rb * Math.cos(t);
    const yb = CY + rb * Math.sin(t);
    d.push(`M${xa.toFixed(1)},${ya.toFixed(1)}L${xb.toFixed(1)},${yb.toFixed(1)}`);
  }
  return d.join("");
}
