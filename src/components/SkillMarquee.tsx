import { profile } from "../data/profile";

export function SkillMarquee() {
  const items = [...profile.expertiseStrip, "·", ...profile.skills];
  const loop = [...items, ...items];

  return (
    <div className="marquee-shell" aria-hidden>
      <div className="marquee-fade marquee-fade-left" />
      <div className="marquee-fade marquee-fade-right" />
      <div className="marquee-track">
        <div className="marquee-inner">
          {loop.map((label, idx) => (
            <span key={`${label}-${idx}`} className="marquee-item">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
