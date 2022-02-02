const Pricing = () => {
    return ( 
        <section id="pricing" className="min-h-screen bg-[#f8fdff] font-sans pt-16">
            <div className="text-center text-darkText pb-16">
                <h1 className="text-3xl font-bold mb-8">Pick The Best Plan For You</h1>
                <p className="capitalize text-gray-400">You have Free Unlimited Updates and Premium Support on each package.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 w-[1200px] justify-center items-center m-auto">
                <div className="text-center hover:bg-[#e4efe2] hover:rounded-xl">
                    <div className="pt-6">
                        <h1 className="font-bold text-2xl">Free</h1>
                        <p className="text-sm py-4">$0.0 / Monthly</p>
                        <div className="font-semibold">
                            <span>1 GB Of Space</span>
                            <div className="bg-darkText/20 h-[0.5px] w-[300px] text-center m-auto my-4"></div>
                            <span>Limited Support</span>
                            <div className="bg-darkText/20 h-[0.5px] w-[300px] text-center m-auto my-4"></div>
                            <span>Support at $25/hour</span>
                            <div className="bg-darkText/20 h-[0.5px] w-[300px] text-center m-auto my-4"></div>
                            <span>Limited Cloud Access</span>
                            <div className="py-8"><button className="bg-[#638C50] px-6 py-2 rounded-full text-white font-semibold">Choose Plan</button></div>
                        </div>
                    </div>
                </div>

                <div className="text-center grid-cols-2 hover:bg-[#e4efe2] hover:rounded-xl">
                    <div className="pt-6">
                    <h1 className="font-bold text-2xl">Premium <span className="text-xs font-semibold uppercase bg-rose-400 rounded-md py-1 px-2 text-white">Best Choice</span></h1>
                        <p className="text-sm py-4">$8.99 / Monthly</p>
                        <div className="font-semibold">
                            <span>5 GB Of Space</span>
                            <div className="bg-darkText/20 h-[0.5px] w-[300px] text-center m-auto my-4"></div>
                            <span>Unlimited Support</span>
                            <div className="bg-darkText/20 h-[0.5px] w-[300px] text-center m-auto my-4"></div>
                            <span>Unlimited Credits</span>
                            <div className="bg-darkText/20 h-[0.5px] w-[300px] text-center m-auto my-4"></div>
                            <span>Full Cloud Access</span>
                            <div className="py-8"><button className="bg-[#638C50] px-6 py-2 rounded-full text-white font-semibold">Choose Plan</button></div>
                        </div>
                    </div>
                </div>

                <div className="text-center grid-cols-3 hover:bg-[#e4efe2] hover:rounded-xl">
                    <div className="pt-6">
                    <h1 className="font-bold text-2xl">Exclusive </h1>
                        <p className="text-sm py-4">$13.39 / Monthly</p>
                        <div className="font-semibold">
                            <span>Unlimited Space</span>
                            <div className="bg-darkText/20 h-[0.5px] w-[300px] text-center m-auto my-4"></div>
                            <span>Unlimited Support</span>
                            <div className="bg-darkText/20 h-[0.5px] w-[300px] text-center m-auto my-4"></div>
                            <span>Unlimited Credits</span>
                            <div className="bg-darkText/20 h-[0.5px] w-[300px] text-center m-auto my-4"></div>
                            <span>Full Cloud Access</span>
                            <div className="py-8"><button className="bg-[#638C50] px-6 py-2 rounded-full text-white font-semibold">Choose Plan</button></div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
     );
}
 
export default Pricing;