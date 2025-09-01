// components/about/CtaSection.tsx
const CtaSection = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                    Let's work together to create something amazing. Get in touch with us today.
                </p>
                <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    Contact Us
                </button>
            </div>
        </section>
    );
};

export default CtaSection;