import React from 'react';
import ScrollFloat from './ScrollFloat';

const ContactSection: React.FC = () => {
    return (
        <section className="bg-black text-white py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">

                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=20%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.03}
                    containerClassName='text-3xl md:text-4xl font-bold text-center text-fuchsia-500 mb-8 relative border-b-2 border-white'
                >
                    GET IN TOUCH WITH US
                </ScrollFloat>

                <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-16">
                    <div className="flex-1 mb-8 md:mb-0">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-fuchsia-500">Head Office Address:</h3>
                        <address className="not-italic text-sm md:text-base leading-relaxed">
                            <p className='font-bold'>Nirmalya Labs</p>
                            <p>N3/325, N3, Block N3, IRC Village, Nayapalli, Bhubaneswar, Odisha 751015</p>
                        </address>

                        <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-fuchsia-500">For help and support:</h3>
                        <p className="text-sm md:text-base">
                            Email: <a href="mailto:support@swiggy.in" className="text-fuchsia-500 hover:underline">info@nirmalyalabs.com</a>
                        </p>
                    </div>

                    <div className="flex-1 relative">
                        <div className="aspect-w-16 aspect-h-9 w-full h-full rounded-lg overflow-hidden border border-fuchsia-500">
                            <iframe
                                className='w-full h-full'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.0938895863032!2d85.80614237377367!3d20.296380512532707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909a66eba89f3%3A0x76c36f974468c7d!2sNirmalya%20Labs!5e0!3m2!1sen!2sin!4v1757064032775!5m2!1sen!2sin" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;