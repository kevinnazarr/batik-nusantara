import type { CSSProperties } from "react";

export type Revealable = { revealDelay?: number };
export const revealStyle = (ms: number | undefined): CSSProperties =>
  ms === undefined ? ({} as CSSProperties) : ({ ["--reveal-delay"]: `${ms}ms` } as CSSProperties);

export type SectionHead = { eyebrow: string; title: string };
