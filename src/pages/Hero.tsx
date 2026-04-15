import albMen from '../../public/alb-clothes.webp';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden px-8">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16">
                <div className="z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#D2B48C]/20 text-on-surface text-sm font-extrabold tracking-widest mb-6">
                        PERSHENDETJE
                    </span>
                    <h1 className="text-6xl md:text-7xl font-extrabold text-on-surface leading-[1.05] mb-8">
                        Speak Albanian with AI that <span className="text-[#E70013]">understands</span> you.
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-xl mb-10">
                        The first AI model trained exclusively on the nuances of Gheg Albanian. 
                        From local slang to cultural context, we bridge the gap between technology and heritage.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-4 bg-[#E70013] text-white rounded-xl text-lg font-extrabold shadow-xl shadow-red-500/20 hover:scale-[1.02] active:scale-95 transition-all">
                            Start Chatting Now
                        </button>
                        <button className="px-8 py-4 bg-gray-100 text-on-surface font-extrabold rounded-xl text-lg hover:bg-gray-200 transition-colors border border-gray-200">
                            Watch Demo
                        </button>
                    </div>
                </div>
                
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative w-full aspect-[4/5] max-w-[500px]">
                        <div className="absolute inset-0 bg-[#D2B48C]/10 rounded-[3rem] rotate-3 scale-105"></div>
                        <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                            <img alt="AI Interface" className="w-full h-full object-cover" src={albMen} />
                            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-[#E70013] rounded-full animate-pulse"></div>
                                    <p className="font-extrabold text-on-surface">"Përshëndetje, si mund të ndihmoj?"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}