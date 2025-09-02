// components/about/HeroSection.tsx
const HeroSection = () => {
    return (
        <section className="relative py-20 bg-gradient-to-b from-fuchsia-600 to-fuchsia-400 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute top-0 right-0 -mr-40 mt-10 opacity-10">
                <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="200" fill="url(#paint0_radial)" />
                    <defs>
                        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) rotate(90) scale(200)">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center opacity-100">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Nerp.in</h1>
                    <p className="text-xl md:text-2xl opacity-90">
                        We are a team of passionate developers, designers, and innovators building digital solutions for the future.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;