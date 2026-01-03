const StatCard = ({ number, label, icon }) => (
    <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/[0.07] transition-all duration-300 group">
        <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <div className="text-5xl font-black mb-4 tracking-tighter">{number}</div>
        <div className="text-gray-400 text-sm leading-relaxed">{label}</div>
    </div>
);

export default StatCard;