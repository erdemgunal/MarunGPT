"use client";

export default function CurvedTopEdge() {
    return (
        // Container: Footer'ın tepesine yapışması için absolute konumlandırma korundu
        <div className="absolute top-0 left-0 right-0 -translate-y-full w-full pointer-events-none flex items-end">
            <div className="w-full bg-void-black
                h-[30px] rounded-t-[30px]
                sm:h-[40px] sm:rounded-t-[40px]
                md:h-[60px] md:rounded-t-[60px]"
            ></div>
        </div>
    );
}