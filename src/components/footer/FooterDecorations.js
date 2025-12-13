"use client";

export default function FooterDecorations() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
            {/* Left Top: Pixelated Geometric Shape */}
            <svg 
                className="absolute -top-10 -left-10 w-64 h-64 sm:w-80 sm:h-80" 
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Pixelated blob with hard edges - brighter */}
                <path 
                    d="M40 20 L60 20 L60 40 L80 40 L80 60 L100 60 L100 80 L120 80 L120 100 L120 120 L100 120 L100 140 L80 140 L80 160 L60 160 L60 140 L40 140 L40 120 L20 120 L20 100 L20 80 L20 60 L40 60 L40 40 L40 20 Z" 
                    fill="#40E0D0"
                    opacity="0.9"
                />
                {/* Inner pixel details - more pixels */}
                <rect x="60" y="60" width="20" height="20" fill="#CCFF00"/>
                <rect x="80" y="80" width="20" height="20" fill="#3B82F6"/>
                <rect x="40" y="80" width="10" height="10" fill="#CCFF00" opacity="0.9"/>
                <rect x="90" y="60" width="10" height="10" fill="#40E0D0" opacity="0.9"/>
                <rect x="70" y="100" width="10" height="10" fill="#3B82F6" opacity="0.8"/>
            </svg>

            {/* Right Bottom: Simplified Dithering Pattern */}
            <svg 
                className="absolute -bottom-10 -right-10 w-64 h-64 sm:w-72 sm:h-72" 
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Cleaner dithered pattern */}
                <g opacity="0.8">
                    {[...Array(12)].map((_, i) => 
                        [...Array(12)].map((_, j) => {
                            const distance = Math.sqrt(Math.pow(i - 6, 2) + Math.pow(j - 6, 2));
                            const shouldRender = distance < 6 && (i + j) % 2 === 0;
                            return shouldRender ? (
                                <rect 
                                    key={`${i}-${j}`}
                                    x={i * 14 + 30} 
                                    y={j * 14 + 30} 
                                    width="10" 
                                    height="10" 
                                    fill="#4B0082"
                                />
                            ) : null;
                        })
                    )}
                </g>
                {/* Minimal accent pixels */}
                <rect x="96" y="96" width="8" height="8" fill="#40E0D0"/>
                <rect x="76" y="116" width="6" height="6" fill="#3B82F6" opacity="0.7"/>
            </svg>

            {/* Center Left: Pixel Grid Pattern */}
            <svg 
                className="absolute left-10 top-1/3 w-32 h-32 hidden lg:block" 
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Pixel grid - dotted style */}
                {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((posY) => 
                    [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((posX) => (
                        <rect 
                            key={`grid-${posX}-${posY}`}
                            x={posX - 1} 
                            y={posY - 1} 
                            width="2" 
                            height="2" 
                            fill="#40E0D0"
                            opacity="0.7"
                        />
                    ))
                )}
                {/* Corner markers - bigger and brighter */}
                <rect x="0" y="0" width="10" height="10" fill="#CCFF00"/>
                <rect x="90" y="90" width="10" height="10" fill="#40E0D0"/>
                <rect x="0" y="90" width="8" height="8" fill="#3B82F6" opacity="0.8"/>
                <rect x="90" y="0" width="8" height="8" fill="#CCFF00" opacity="0.8"/>
            </svg>

            {/* Bottom Center: Pixel Wave Pattern */}
            <svg 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-20 hidden sm:block" 
                viewBox="0 0 800 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                {/* Pixelated wave with individual pixels */}
                <path 
                    d="M0 40 L50 40 L50 30 L100 30 L100 20 L150 20 L150 30 L200 30 L200 40 L250 40 L250 50 L300 50 L300 40 L350 40 L350 30 L400 30 L400 20 L450 20 L450 30 L500 30 L500 40 L550 40 L550 50 L600 50 L600 40 L650 40 L650 30 L700 30 L700 40 L750 40 L750 50 L800 50 L800 80 L0 80 Z" 
                    fill="#3B82F6"
                    opacity="0.7"
                />
                {/* Additional pixel details on wave */}
                {[100, 200, 300, 400, 500, 600, 700].map((x) => (
                    <rect key={`wave-${x}`} x={x} y="25" width="8" height="8" fill="#40E0D0" opacity="0.9"/>
                ))}
                {[150, 250, 350, 450, 550, 650, 750].map((x) => (
                    <rect key={`wave2-${x}`} x={x} y="45" width="6" height="6" fill="#CCFF00" opacity="0.8"/>
                ))}
            </svg>

        </div>
    );
}

