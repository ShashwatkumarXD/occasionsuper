import React from 'react'

const ContactInfo = () => {
    return (
        <section className="p-2 mt-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between gap-8">

                    {/* Left Side - Call Us */}
                    <div className="flex-1 text-center md:text-right">
                        <div className="flex font-bold items-baseline justify-center md:justify-end space-x-3">
                            <p className="text-3xl text-black">CALL US:</p>
                            <p className="text-3xl text-global-gradient">9034621898</p>
                        </div>
                        <p className="text-gray-600 text-xl">24-hour helpline</p>
                    </div>

                    {/* Center - OR */}
                    <div className="flex-shrink-0 flex justify-center">
                        <div className="inline-flex items-center justify-center bg-white border-2 border-orange-500 rounded-full aspect-square p-6">
                            <span className="text-2xl font-bold text-global-gradient leading-none">OR</span>
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-3xl font-bold ">
                            <span className="text-global-gradient">HAVE US CALL</span>
                            <span className="text-black"> YOU FOR UPTO 30% DISCOUNT</span>
                        </p>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default ContactInfo
