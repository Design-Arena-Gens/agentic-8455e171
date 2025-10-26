"use client";

import Link from "next/link";
import { useMemo } from "react";

type Shot = {
  id: number;
  beat: string;
  hook: string;
  visuals: string;
  dialogue: string;
  duration: string;
};

export default function HomePage() {
  const shots = useMemo<Shot[]>(() => {
    return [
      {
        id: 1,
        beat: "Hook",
        hook: "Summon the scroll-stopper",
        visuals:
          "Nighttime office. Designer in neon mask snaps fingers; scene glitches into bold Halloween branding.",
        dialogue:
          "VO: \"👻 Liyvo Marketing witches up brands that haunt the feed—in all the right ways.\"",
        duration: "0:00 - 0:03"
      },
      {
        id: 2,
        beat: "Pain Point",
        hook: "Call out the stale feed",
        visuals:
          "Split-screen. Left: dull, gray social feed. Right: glitch effect teases vibrant Liyvo work.",
        dialogue:
          "VO: \"Still posting pumpkin clip art from 2015? That spell broke ages ago.\"",
        duration: "0:03 - 0:06"
      },
      {
        id: 3,
        beat: "Transformation",
        hook: "Reveal the potion",
        visuals:
          "Rapid-fire montage of Liyvo designs, animated typography, pumpkin-orange gradients, candy-corn overlays.",
        dialogue:
          "VO: \"We craft reels, carousels, and campaigns that glow in the dark—designed to possess attention.\"",
        duration: "0:06 - 0:11"
      },
      {
        id: 4,
        beat: "Social Proof",
        hook: "Flex the coven",
        visuals:
          "Overlay social stats, quick testimonial quote, team shot raising pumpkin lattes.",
        dialogue:
          "VO: \"Clients scream (with delight) when leads climb faster than a broom on turbo mode.\"",
        duration: "0:11 - 0:15"
      },
      {
        id: 5,
        beat: "Call to Action",
        hook: "Seal the pact",
        visuals:
          "Orange smoke transitions to CTA card with animated sparkles around @liyvo_marketing handle.",
        dialogue:
          "VO: \"DM @liyvo_marketing. Let’s conjure a Halloween drop that sticks like caramel.\"",
        duration: "0:15 - 0:18"
      }
    ];
  }, []);

  return (
    <main className="page">
      <section className="hero">
        <div className="hero__tag">Halloween 2024 Reel Blueprint</div>
        <h1 className="hero__title">
          Liyvo Marketing&apos;s <span className="gradient-text">Dark Mode</span>{" "}
          Reel Script
        </h1>
        <p className="hero__subtitle">
          A tight <strong>18 second</strong> Instagram reel designed to enchant
          leads, hype the Liyvo aesthetic, and keep Halloween momentum glowing.
        </p>
        <div className="hero__cta">
          <Link
            className="hero__link glow"
            href="https://www.instagram.com/liyvo_marketing"
            target="_blank"
            rel="noreferrer"
          >
            Visit @liyvo_marketing
          </Link>
        </div>
      </section>

      <section className="concept">
        <h2>Concept Snapshot</h2>
        <div className="concept__grid">
          <div className="concept__card">
            <h3>Vibe</h3>
            <p>Cyber-goth palette, kinetic typography, quick-cut storytelling.</p>
          </div>
          <div className="concept__card">
            <h3>Goal</h3>
            <p>
              Hook Halloween clients, highlight Liyvo&apos;s design chops, convert
              DMs fast.
            </p>
          </div>
          <div className="concept__card">
            <h3>Visual Toolkit</h3>
            <p>
              Neon masks, glitch overlays, orange smoke, chrome typography,
              animated stickers.
            </p>
          </div>
          <div className="concept__card">
            <h3>Audio Direction</h3>
            <p>
              Trap beat with eerie synth hits. Layer subtle whooshes and chimes to
              accent scene changes.
            </p>
          </div>
        </div>
      </section>

      <section className="script">
        <h2>Shot-by-Shot Script</h2>
        <div className="script__grid">
          {shots.map((shot) => (
            <article key={shot.id} className="script__card">
              <header>
                <span className="script__duration">{shot.duration}</span>
                <div className="script__beat">
                  <span className="script__beat-label">{shot.beat}</span>
                  <p className="script__hook">{shot.hook}</p>
                </div>
              </header>
              <div className="script__body">
                <p className="script__visuals">
                  <strong>Visuals:</strong> {shot.visuals}
                </p>
                <p className="script__dialogue">
                  <strong>Audio:</strong> {shot.dialogue}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="production">
        <h2>Production Notes</h2>
        <ul>
          <li>Keep pacing under 1.8s per cut; use match transitions for flow.</li>
          <li>
            Layer animated text revealing key phrases: “haunt the feed”, “glow in
            the dark”, “DM @liyvo_marketing”.
          </li>
          <li>
            Apply motion blur and chromatic aberration to enhance glitch moments.
          </li>
          <li>
            End screen should linger 2s with CTA and ambient track tail for post
            caption overlay.
          </li>
        </ul>
      </section>

      <footer className="footer">
        <p>
          Need launch-ready assets? Slide into the{" "}
          <Link
            href="https://www.instagram.com/liyvo_marketing"
            target="_blank"
            rel="noreferrer"
          >
            @liyvo_marketing
          </Link>{" "}
          DMs and let&apos;s cast the spell.
        </p>
      </footer>

      <style jsx>{`
        .page {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          padding: 4rem 5vw 6rem;
        }

        .hero {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          max-width: 960px;
        }

        .hero__tag {
          font-size: 0.85rem;
          letter-spacing: 0.25rem;
          text-transform: uppercase;
          color: rgba(255, 224, 102, 0.75);
        }

        .hero__title {
          font-size: clamp(2.75rem, 4vw, 4rem);
          margin: 0;
          line-height: 1.05;
        }

        .hero__subtitle {
          font-size: 1.125rem;
          color: rgba(248, 249, 255, 0.85);
          max-width: 640px;
          margin: 0;
        }

        .hero__cta {
          margin-top: 1rem;
        }

        .hero__link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.8rem 1.6rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #ff6b9d, #ffa94d);
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .concept h2,
        .script h2,
        .production h2 {
          margin-bottom: 1.5rem;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
        }

        .concept__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .concept__card {
          padding: 1.5rem;
          border-radius: 1.25rem;
          background: linear-gradient(
            160deg,
            rgba(64, 35, 90, 0.35),
            rgba(19, 33, 73, 0.35)
          );
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(8px);
        }

        .concept__card h3 {
          margin-top: 0;
        }

        .script__grid {
          display: grid;
          gap: 1.75rem;
        }

        .script__card {
          padding: 2rem;
          border-radius: 1.5rem;
          background: linear-gradient(
            135deg,
            rgba(255, 107, 157, 0.18),
            rgba(16, 30, 64, 0.55)
          );
          border: 1px solid rgba(255, 107, 157, 0.25);
          position: relative;
          overflow: hidden;
        }

        .script__card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at top right,
            rgba(255, 169, 77, 0.25),
            transparent 55%
          );
          pointer-events: none;
        }

        .script__duration {
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(255, 224, 102, 0.8);
        }

        .script__beat {
          margin-top: 0.5rem;
        }

        .script__beat-label {
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          font-size: 0.75rem;
          opacity: 0.7;
        }

        .script__hook {
          font-size: 1.35rem;
          font-weight: 600;
          margin: 0.35rem 0 1rem;
        }

        .script__body {
          display: grid;
          gap: 0.85rem;
        }

        .script__visuals,
        .script__dialogue {
          margin: 0;
          color: rgba(248, 249, 255, 0.9);
        }

        .production ul {
          margin: 0;
          padding-left: 1.25rem;
          display: grid;
          gap: 0.65rem;
          color: rgba(248, 249, 255, 0.85);
        }

        .footer {
          text-align: center;
          color: rgba(248, 249, 255, 0.7);
          font-size: 0.95rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(248, 249, 255, 0.08);
        }

        @media (max-width: 768px) {
          .page {
            padding: 2.5rem 5vw 4rem;
          }

          .script__card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </main>
  );
}
