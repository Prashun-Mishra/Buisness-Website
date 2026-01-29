export default function AnimatedGradientBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-background pointer-events-none">
            <div className="absolute inset-0 opacity-40">
                <div
                    className="absolute top-[-50%] left-[-50%] right-[-50%] bottom-[-50%] w-[200%] h-[200%] animate-gradient-spin"
                    style={{
                        background: 'conic-gradient(from 0deg at 50% 50%, #000000 0deg, #0d9488 60deg, #000000 120deg, #06b6d4 180deg, #000000 240deg, #14b8a6 300deg, #000000 360deg)',
                        filter: 'blur(80px)',
                        transformOrigin: 'center center'
                    }}
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
        </div>
    )
}
