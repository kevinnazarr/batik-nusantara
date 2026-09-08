import type { StoryData } from "@/data/home";
import { revealStyle } from "@/data/home";

export function StoryBand({ data }: { data: StoryData }) {
  return (
    <section className="section section--dark story-band" id="story" aria-labelledby="storyTitle">
      <div className="container">
        <div className="story-band__inner">
          <div className="story-band__text reveal">
            <p className="eyebrow eyebrow--inverse">{data.eyebrow}</p>
            <h2 className="serif--inverse" id="storyTitle">{data.title}</h2>
            {data.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <a className="btn btn--ghost" href={data.cta.href}>{data.cta.label}</a>
          </div>
          <div className="story-band__media reveal" style={revealStyle(100)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={data.image} alt={data.alt} loading="lazy" width={900} height={1125} />
            <span className="medallion medallion--outline story-band__medallion">
              <strong>{data.medallion.strong}</strong>
              {data.medallion.lines.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
