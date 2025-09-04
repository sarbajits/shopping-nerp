import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AppDownload() {
    return (
        <div className="bg-fuchsia-100 py-10 px-6 md:px-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                <div className="text-center md:text-left space-y-4">
                    <Image
                        src="https://www.nerp.in/assets/images/logo1.png"
                        alt="Nerp Logo"
                        width={150}
                        height={50}
                        className="mx-auto md:mx-0 h-10 w-auto"
                    />
                    <h1 className="text-2xl md:text-3xl font-bold text-fuchsia-900">
                        Get the NERP App now !!!
                    </h1>
                    <h2 className="text-lg text-gray-500">
                        For best offers and discounts curated specially for you.
                    </h2>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                        <Link
                            href="#"
                            className="bg-black text-white w-40 px-5 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition"
                        >
                            <Image
                                src="/imgs/playstore.png"
                                alt="Google Play"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <span className="text-sm font-medium">Google Play</span>
                        </Link>
                        <Link
                            href="#"
                            className="bg-black text-white w-40 px-5 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition"
                        >
                            <Image
                                src="/imgs/appstore.png"
                                alt="App Store"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <span className="text-sm font-medium">App Store</span>
                        </Link>
                    </div>
                </div>

                <div className="hidden md:flex flex-col items-center">
                    <Image
                        src="/imgs/qr.png"
                        alt="NERP QR Code"
                        width={200}
                        height={200}
                        className="rounded-lg shadow-md w-40 h-40 md:w-56 md:h-56"
                    />
                    <h2 className="mt-4 text-base md:text-lg text-gray-800 font-bold">
                        Scan this QR code to download our app
                    </h2>
                </div>
            </div>
        </div>

    )
}
