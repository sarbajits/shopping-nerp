import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand/Logo Section */}
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl font-bold mb-4">FOOTER</h2>
                        <p className="text-gray-400 mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                    {/* Creativity Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">CREATIVITY</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition">Creativity One</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition">Creativity Two</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition">Creativity Three</Link></li>
                        </ul>
                    </div>

                    {/* Tips & Tricks Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Tips & Tricks</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition">Gradfish & Tobies</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition">Tutorials</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition">Resources</Link></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <address className="not-italic text-gray-400">
                            <p className="mb-2">Email: youremail@gmail.com</p>
                            <p className="mb-2">Phone: +1112-456-7899</p>
                            <p>sociatesfam congres</p>
                        </address>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;