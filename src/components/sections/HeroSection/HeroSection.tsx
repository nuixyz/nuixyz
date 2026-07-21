import { SOCIAL_LINKS } from "@/lib/data";
import Image from "next/image";
import TUIPane from "../../ui/TuiPane";
import AvatarPane from "./AvatarPane";

export default function HeroSection() {
  return (
    <section className="mx-auto grid max-w-[1180px] grid-cols-1 gap-4 px-5 py-4 md:grid-cols-[0.6fr_1.4fr]">
      <AvatarPane />
      {/* left side */}
      <TUIPane
        index={"[2]"}
        label="profile.sh"
        className="flex flex-col gap-0"
      >
        <div className="p-[28px_22px_22px]">
          <p className="font-mono text-xs italic text-[var(--overlay0)] mb-[18px]">
            # available for work &amp; commissions :D
          </p>

          <p className="py-3 pl-0.6 font-mono text-xs tracking-widest text-muted">
            <span className="text-[var(--green)]">$</span> whoami
          </p>
          {/* title */}
          <h1 className="font-mono text-[clamp(1.7rem,3.4vw,2.5rem)] font-bold leading-[1.25] tracking-[-0.01em] text-[var(--text)] mb-5">
            hi, i&apos;m <span className="text-[var(--mauve)]">cha</span>.
            <span className="inline-block w-3 h-[1em] bg-[var(--mauve)] vertical-bottom mb-1.5 ml-0.5 animate-[blink_1s_step-end_infinite]" style={{ verticalAlign: 'text-bottom' }} />
          </h1>

          {/* $ whoami */}
          <div className="max-w-2xl border-l-2 border-[var(--mauve)] bg-[var(--surface0)] pl-3 font-mono text-xs leading-[1.9] text-[var(--subtext1)] mb-5">
            hello and welcome to my website! i am cha (ヌイ) <br /> i build things that live in terminals and browsers. <br />
            i...
            <ul className="list-disc pl-5">
              <li>draw 2d digital illustration</li>
              <li>make pixel art</li>
            </ul>
            if you are intesrested in working with me, you can email me at <a href="#commissionme"><u>contactme@nuixyz.dev!</u></a> :)
          </div>

          {/* Bracket buttons */}
          <div className="flex flex-wrap gap-2 mb-5">
            <a
              href="https://ko-fi.com/nuixyz"
              target="_blank"
              rel="noreferrer"
              className="border border-[var(--mauve)] px-4 py-2 font-mono text-xs text-[var(--mauve)] transition-all hover:bg-[var(--mauve)] hover:text-[var(--crust)]"
            >
              &lt; support me <span className="font-sans">&lt;3 </span> &gt;
            </a>
            <a
              href="/projects"
              className="border border-[var(--surface2)] px-4 py-2 font-mono text-xs text-[var(--subtext1)] transition-all hover:border-[var(--mauve)] hover:text-[var(--mauve)]"
            >
              &lt; view projects &gt;
            </a>
            <a
              href="#commissionme"
              className="border border-[var(--surface2)] px-4 py-2 font-mono text-xs text-[var(--subtext1)] transition-all hover:border-[var(--mauve)] hover:text-[var(--mauve)]"
            >
              &lt; commission me &gt;
            </a>
          </div>

          {/* social tags */}
          <div className="flex flex-wrap gap-1.5">
            {SOCIAL_LINKS.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="font-mono text-[11px] text-[var(--overlay0)] transition-colors hover:text-[var(--blue)]"
              >
                [ {label} ]
              </a>
            ))}
          </div>
        </div>
      </TUIPane>

      {/* right side */}
      {/*<TUIPane
        index={2}
        label="my_oc.png"
        className="order-first md:order-none flex flex-col"
      >
        <div className="p-[28px_22px_22px] flex flex-col items-center justify-center gap-[14px] h-full">
          <div className="relative aspect-square w-full max-w-[220px] overflow-hidden border border-[var(--surface1)] bg-[var(--surface0)] flex items-center justify-center">
            <Image
              src="/fat-teto.png"
              alt="me"
              fill
              className="object-cover block"
              priority
            />
          </div>
          <p className="text-center font-mono text-[11px] text-[var(--overlay0)]">
            <span className="text-[var(--mauve)]">nuix</span> &middot; <span className="text-[var(--overlay0)]">dev and artist</span>
          </p>
        </div>
      </TUIPane>*/}
    </section>
  );
}
