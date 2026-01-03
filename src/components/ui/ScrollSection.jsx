import { motion as Motion } from 'framer-motion';

const ScrollSection = ({ title, children }) => (
    <Motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto py-20"
    >
        <h2 className="text-sm font-mono text-cyan-500 uppercase tracking-[0.3em] mb-12 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-cyan-500/50" /> {title}
        </h2>
        {children}
    </Motion.section>
);

export default ScrollSection;