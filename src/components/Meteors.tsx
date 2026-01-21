import React, { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";

type StarfieldBackgroundProps = {
    /** estrellas */
    stars?: number;
    /** meteoros */
    meteors?: number;
    /** clases extra del wrapper */
    className?: string;
};

const MIN = 1.5; // rápido
const MAX = 10;   // lento

export function StarfieldBackground({
    stars = 150,
    meteors = 20,
    className,
}: StarfieldBackgroundProps) {
    // ---------- STARS ----------
    const starsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const root = starsRef.current;
        if (!root) return;

        root.querySelectorAll<HTMLDivElement>("[data-star]").forEach((star) => {
            const size = Math.random() > 0.5 ? 1 : 2;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.opacity = `${Math.random()}`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
        });
    }, [stars]);

    // ---------- METEORS ----------
    const [meteorStyles, setMeteorStyles] = useState<CSSProperties[]>([]);

    useEffect(() => {

        const styles = Array.from({ length: meteors }).map(() => {
            const tailLength = Math.floor(Math.random() * 200) + 60; // 60–260px

            return {
                top: Math.random() * 100 + "vh",
                left: Math.random() * 100 + "%",
                animationDelay: Math.random() * 0.6 + 0.2 + "s",
                animationDuration: (Math.random() * (MAX - MIN) + MIN).toFixed(2) + "s",
                ["--tail-length" as any]: `${tailLength}px`,
            } as CSSProperties;
        });

        setMeteorStyles(styles);
    }, [meteors]);

    // ---------- BACKGROUND (pattern id único) ----------
    const patternId = useMemo(
        () => `grid-${Math.random().toString(36).slice(2)}`,
        []
    );

    return (
        <div
            aria-hidden="true"
            className={clsx(
                "pointer-events-none absolute inset-0 h-full w-full overflow-hidden",
                "z-0",
                className
            )}
        >

            {/* BACKGROUND radial */}
            <div className="absolute inset-0 h-full w-full bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(13,115,119,0.35),rgba(33,33,33,0)_60%)]" />

            {/* BACKGROUND grid */}
            <svg
                className="absolute inset-x-0 -top-[1rem] -z-10 h-[80%] w-full skew-y-12 fill-black/[.06] stroke-black/[.06] dark:fill-white/[.06] dark:stroke-white/[.06] [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
            >
                <defs>
                    <pattern
                        id={patternId}
                        width="80"
                        height="80"
                        patternUnits="userSpaceOnUse"
                        x="-1"
                        y="-1"
                    >
                        <path d="M.5 80V.5H80" fill="none" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth="0" fill={`url(#${patternId})`} />
            </svg>

            {/* STARS */}
            <div ref={starsRef} className="absolute inset-0">
                {Array.from({ length: stars }).map((_, i) => (
                    <div
                        key={i}
                        data-star
                        className="absolute rounded-full bg-white"
                    />
                ))}
            </div>

            {/* METEORS */}
            {meteorStyles.map((style, idx) => (
                <span
                    key={idx}
                    className="absolute h-0.5 w-0.5 rounded-full opacity-0 bg-slate-400 animate-meteor"
                    style={style}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "var(--tail-length)",
                            height: "1px",
                            background:
                                "linear-gradient(90deg, rgba(20,255,236,.65), rgba(13,115,119,.35), transparent)",
                            filter: "blur(0.25px)",
                        }}
                    />
                </span>

            ))}
        </div>
    );
}
