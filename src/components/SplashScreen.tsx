import { useState, useEffect } from 'react'

export default function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true)

    // Ensure scroll is locked during animation
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isVisible])

    if (!isVisible) return null

    return (
        <div
            className="fixed inset-0 z-[9999] pointer-events-none animate-fade-out-splash"
            onAnimationEnd={(e) => {
                // Only unmount when the fade-out animation completes
                if (e.animationName === 'fade-out-splash') {
                    setIsVisible(false)
                }
            }}
        >
            <svg width="100%" height="100%" className="absolute inset-0" preserveAspectRatio="none">
                <defs>
                    <mask id="cutout-mask">
                        {/* 1. White background = fully opaque / visible */}
                        <rect width="100%" height="100%" fill="white" />

                        {/* 2. Black shape = fully transparent / punched out hole */}
                        {/* We use an embedded SVG to center the 150x150 path group perfectly */}
                        <svg
                            x="50%" y="50%"
                            width="150" height="150"
                            overflow="visible"
                            style={{ transform: 'translate(-75px, -75px)' }}
                        >
                            <g className="animate-scale-glass" style={{ transformOrigin: 'center center', transformBox: 'view-box' }}>
                                <path
                                    d="M 59 2.604 C 48.896 3.849, 42.009 5.289, 41.173 6.331 C 39.191 8.802, 37.986 32.406, 39.035 48.180 C 40.155 65.003, 40.565 67.970, 44.611 88.500 C 47.062 100.939, 47.377 104.812, 47.435 123.232 L 47.500 143.965 50 144.974 C 59.400 148.768, 91.793 148.785, 100.102 145 L 102.500 143.907 102.519 123.704 C 102.537 104.688, 102.757 102.324, 106.255 83.500 C 110.926 58.360, 112.422 37.903, 110.884 20.180 C 110.279 13.206, 109.423 7.113, 108.982 6.640 C 107.031 4.548, 95.387 2.941, 79.500 2.570 C 70.150 2.352, 60.925 2.367, 59 2.604"
                                    fill="black"
                                />
                            </g>
                        </svg>
                    </mask>
                </defs>

                {/* Solid #141414 backdrop with the transparent hole punched through it */}
                <rect width="100%" height="100%" fill="#141414" mask="url(#cutout-mask)" />
            </svg>
        </div>
    )
}
