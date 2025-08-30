import React from 'react'

const ContactInfo = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Left Side - Call Us */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-black mb-2">
                            CALL US:
                        </h3>
                        <p className="text-4xl font-bold text-pink-500 mb-2">
                            9034621898
                        </p>
                        <p className="text-gray-600 text-sm">
                            24-hour helpline
                        </p>
                    </div>

                    {/* Center - Separator */}
                    {/* <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center">
                            <span className="text-3xl font-bold text-black">
                                or
                            </span>
                        </div>
                    </div> */}
                    <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center bg-white border-2 border-black rounded-full aspect-square px-4 py-2">
                            <span className="text-3xl font-bold text-black leading-none">
                                or
                            </span>
                        </div>
                    </div>


                    {/* Right Side - Discount Offer */}
                    <div className="text-center md:text-right">
                        <p className="text-2xl font-bold">
                            <span className="text-pink-500">HAVE US CALL</span>
                            <span className="text-black"> YOU FOR UPTO 30% DISCOUNT</span>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactInfo
