export default function Footer() {
    return (
        <footer className="w-full py-16 px-8 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-4">
                    <div className="text-2xl font-extrabold text-[#E70013]">LLM Project</div>
                    <p className="text-sm font-bold text-gray-500 tracking-wider uppercase">
                        © 2026 LLM PROJECT. 
                    </p>
                </div>
                <div className="flex flex-wrap md:justify-end gap-x-12 gap-y-6">
                    <a className="text-xs font-extrabold uppercase tracking-widest text-gray-500 hover:text-[#E70013] transition-colors" href="#">Privacy Policy</a>
                    <a className="text-xs font-extrabold uppercase tracking-widest text-gray-500 hover:text-[#E70013] transition-colors" href="#">Terms of Service</a>
                    <a className="text-xs font-extrabold uppercase tracking-widest text-gray-500 hover:text-[#E70013] transition-colors" href="#">About Tunisian AI</a>
                </div>
            </div>
        </footer>
    )
}