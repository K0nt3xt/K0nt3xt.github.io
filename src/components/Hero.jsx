import { motion as Motion, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = ({ scrollProgress }) => {
    const scale = useTransform(scrollProgress, [0, 0.2], [1, 1.5]);
    const opacity = useTransform(scrollProgress, [0, 0.1], [1, 0]);

    return (
        <section className="h-[200vh] relative flex flex-col items-center justify-start pt-40">
            <Motion.div style={{ scale, opacity }} className="sticky top-40 text-center px-4 z-10">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                    DEEPFAKE
                </h1>
                <p className="text-xl md:text-3xl font-light text-cyan-400 tracking-widest uppercase">
                    Vũ khí bạo lực giới thời đại số
                </p>
                <Motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="mt-20 flex flex-col items-center opacity-50"
                >
                    <span className="text-sm mb-2 font-mono">Cuộn để bắt đầu</span>
                    <ArrowDown size={20} />
                </Motion.div>
            </Motion.div>

            {/* Background Glows */}
            <div className="fixed inset-0 pointer-events-none opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px]" />
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-900/20 rounded-full blur-[100px]" />
            </div>
        </section>
    );
};

export default Hero;