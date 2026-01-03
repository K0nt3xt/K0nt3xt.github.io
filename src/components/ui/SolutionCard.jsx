import { motion as Motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const SolutionCard = ({ step, title, subtitle, content, list }) => (
    <Motion.div
        whileHover={{ y: -10 }}
        className="p-10 md:p-12 bg-gray-50 rounded-[40px] border border-gray-200 flex flex-col shadow-sm hover:shadow-xl transition-all"
    >
        <span className="text-5xl font-black text-gray-200 mb-6">{step}</span>
        <h3 className="text-3xl font-bold mb-2 tracking-tight text-black">{title}</h3>
        <p className="text-cyan-600 font-bold text-xs uppercase tracking-wider mb-6">{subtitle}</p>
        {content && <p className="text-gray-600 leading-relaxed text-gray-600">{content}</p>}
        {list && (
            <ul className="space-y-4">
                {list.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <ShieldCheck size={18} className="text-cyan-500 mt-1 flex-shrink-0" />
                        <span className="text-sm font-medium">{item}</span>
                    </li>
                ))}
            </ul>
        )}
    </Motion.div>
);

export default SolutionCard;