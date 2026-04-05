export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 flex justify-between items-center px-8 h-20">
            <div className="text-2xl font-extrabold text-[#E70013] tracking-tighter">
                LLM Project
            </div>
            <div className="hidden md:flex items-center space-x-10">
                <a className="text-[#E70013] border-b-2 border-[#E70013] font-bold py-2 transition-colors" href="#">Explore</a>
                <a className="text-gray-500 font-bold py-2 hover:text-[#E70013] transition-colors" href="#">Community</a>
                <a className="text-gray-500 font-bold py-2 hover:text-[#E70013] transition-colors" href="#">Guide</a>
            </div>
            <div className="flex items-center space-x-6">
                <button className="bg-[#E70013] text-white px-6 py-2.5 rounded-lg font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-red-500/20">
                    Start Chatting
                </button>
            </div>
        </nav>
    )
}