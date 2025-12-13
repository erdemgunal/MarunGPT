"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const questionSets = [
    {
        user: "> Student: What are the prerequisites for EEE204?",
        system: [
            "Retrieving course information...",
            "Context found: 'Circuit Analysis II'...",
            "Synthesizing answer..."
        ],
        response: "Prerequisites for EEE204 (Circuit Analysis II) are PHYS102 and MATH102. You must have completed both with a grade of C or higher."
    },
    {
        user: "> Student: When is the midterm exam for CS301?",
        system: [
            "Querying Academic_Calendar_DB...",
            "Found: 'CS301 Course Schedule'...",
            "Retrieving exam schedule..."
        ],
        response: "The midterm exam for CS301 is scheduled for October 15th, 2025, from 2:00 PM to 4:00 PM in Room 204. Topics: Arrays, stacks, queues."
    },
    {
        user: "> Student: Where can I find study materials for Physics 101?",
        system: [
            "Querying Learning_Resources_DB...",
            "Found: 'Study Guides', 'Past Exams'...",
            "Compiling available resources..."
        ],
        response: "Resources found: (1) Course website lecture notes, (2) Library reserve textbooks, (3) Tutoring Center (Mon-Thu 2-6 PM)."
    }
];

export default function LiveDemoTerminal() {
    const [displayedLines, setDisplayedLines] = useState([]);
    const [isTyping, setIsTyping] = useState(true);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    
    // Auto-scroll için ref
    const scrollRef = useRef(null);
    const timeoutsRef = useRef([]);
    const intervalsRef = useRef([]);

    // Her yeni satır eklendiğinde en alta kaydır
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [displayedLines]);

    useEffect(() => {
        let isActive = true;

        const registerTimeout = (callback, delay) => {
            const id = setTimeout(callback, delay);
            timeoutsRef.current.push(id);
            return id;
        };

        const registerInterval = (callback, delay) => {
            const id = setInterval(callback, delay);
            intervalsRef.current.push(id);
            return id;
        };

        const clearAllTimers = () => {
            timeoutsRef.current.forEach(clearTimeout);
            intervalsRef.current.forEach(clearInterval);
            timeoutsRef.current = [];
            intervalsRef.current = [];
        };

        setDisplayedLines([]);
        setIsTyping(true);

        let lineIndex = 0;
        let charIndex = 0;

        const clearTerminal = () => {
            return new Promise((resolve) => {
                const intervalId = registerInterval(() => {
                    if (!isActive) {
                        clearInterval(intervalId);
                        resolve();
                        return;
                    }
                    setDisplayedLines((prev) => {
                        if (prev.length === 0) {
                            clearInterval(intervalId);
                            resolve();
                            return [];
                        }
                        return prev.slice(0, -1);
                    });
                }, 30);
            });
        };

        const typeNextLine = async () => {
            const currentSet = questionSets[currentQuestionIndex];
            if (!currentSet) return;

            const allLines = [
                currentSet.user,
                ...currentSet.system,
                currentSet.response
            ];

            if (lineIndex >= allLines.length) {
                setIsTyping(false);
                
                registerTimeout(async () => {
                    if (!isActive) return;
                    await clearTerminal();
                    registerTimeout(() => {
                        if (!isActive) return;
                        setCurrentQuestionIndex((prev) => (prev + 1) % questionSets.length);
                    }, 200);
                }, 4000);
                return;
            }

            const line = allLines[lineIndex];
            // Mobilde daha hızlı aksiyon için gecikmeleri biraz kısalttık
            const delay = lineIndex === 0 ? 500 : (lineIndex <= currentSet.system.length ? 600 : 1000);
            const perCharDelay = lineIndex === 0 ? 15 : (lineIndex <= currentSet.system.length ? 15 : 10);

            registerTimeout(() => {
                const intervalId = registerInterval(() => {
                    if (!isActive) {
                        clearInterval(intervalId);
                        return;
                    }
                    if (charIndex < line.length) {
                        setDisplayedLines((prev) => {
                            const newLines = [...prev];
                            newLines[lineIndex] = line.substring(0, charIndex + 1);
                            return newLines;
                        });
                        charIndex++;
                    } else {
                        clearInterval(intervalId);
                        lineIndex++;
                        charIndex = 0;
                        typeNextLine();
                    }
                }, perCharDelay);
            }, delay);
        };

        registerTimeout(() => {
            typeNextLine();
        }, 1000);

        return () => {
            isActive = false;
            clearAllTimers();
        };
    }, [currentQuestionIndex]);

    const getLineColor = (line) => {
        if (!line) return "";
        if (line.includes("> Student:")) return "text-brand-accentPrimary font-bold";
        if (line.includes("Retrieving") || line.includes("Querying") || line.includes("Searching") || 
            line.includes("Context") || line.includes("Found") || line.includes("Matched") || 
            line.includes("Retrieved") || line.includes("Synthesizing") || 
            line.includes("Generating") || line.includes("Compiling") || 
            line.includes("Extracting")) return "text-brand-accentSecondary italic text-xs"; // System logları biraz daha küçük
        return "text-brand-primaryText";
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            // Container yüksekliği sabitlendi: h-[320px] mobil için, md:h-[480px] desktop için.
            // Bu sayede içerik uzasa bile container boyutu değişmez, sayfa düzeni bozulmaz.
            className="flex flex-col bg-brand-surface border-2 border-slate-200 rounded-xl shadow-[0_0_30px_-5px_rgba(0,229,255,0.2)] relative w-full h-[320px] md:h-[480px] overflow-hidden hover:border-brand-accentPrimary/50 transition-colors duration-300"
        >
            {/* Terminal Header */}
            <div className="flex-none flex items-center gap-2 px-4 py-3 border-b border-brand-utility bg-brand-surface/50 backdrop-blur">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <span className="font-mono text-[10px] md:text-xs text-brand-primaryText/60 ml-2 select-none">
                    marungpt.com
                </span>
            </div>

            {/* Terminal Content Area */}
            {/* flex-1 ile kalan alanı kaplar, overflow-y-auto ile sadece bu alan scroll olur */}
            <div 
                ref={scrollRef}
                className="flex-1 p-4 md:p-6 font-mono text-xs md:text-sm leading-relaxed overflow-y-auto scrollbar-thin scrollbar-thumb-brand-utility scrollbar-track-transparent"
            >
                <AnimatePresence mode="popLayout">
                    {displayedLines.map((line, index) => {
                        if (!line) return null;
                        const showCursor = isTyping && index === displayedLines.length - 1;
                        return (
                            <motion.div
                                key={`${currentQuestionIndex}-${index}`}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={`mb-2 last:mb-0 break-words ${getLineColor(line)}`}
                            >
                                <span>{line}</span>
                                {showCursor && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ repeat: Infinity, duration: 0.5 }}
                                        className="inline-block w-1.5 h-3 md:w-2 md:h-4 bg-brand-accentPrimary align-middle ml-1"
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}