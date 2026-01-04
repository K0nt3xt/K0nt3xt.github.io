import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Layout, ZoomIn } from 'lucide-react';

const Infographic = () => {
    return (
        <section className="py-24 bg-black text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <Motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-sm font-mono text-cyan-500 uppercase tracking-[0.3em] mb-4 flex items-center justify-center gap-4">
                        <div className="h-[1px] w-12 bg-cyan-500/50" />
                        Infographic
                        <div className="h-[1px] w-12 bg-cyan-500/50" />
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter">
                        BỨC TRANH TOÀN CẢNH
                    </h3>
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
                        Khám phá về Deepfake, dấu hiệu và những hậu quả nó có thể mang lại thông qua bộ Infographic chi tiết dưới đây.
                    </p>
                </Motion.div>

                {/* Vertical Stack of Infographics */}
                <div className="flex flex-col gap-20 items-center">
                    {/* Infographic 1 */}
                    <Motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full max-w-5xl relative group rounded-[40px] overflow-hidden border border-white/10 bg-white/5 shadow-2xl"
                    >
                        <div className="absolute top-6 left-6 z-10">
              <span className="px-4 py-2 bg-cyan-500 text-black text-xs font-bold rounded-full uppercase tracking-widest flex items-center gap-2">
                <Layout size={14} /> Thông tin chung
              </span>
                        </div>

                        {/* Sử dụng aspect-video để size ảnh ngang tầm video frame */}
                        <div className="relative aspect-video overflow-hidden">
                            <img
                                src="https://i.ibb.co/XgvXqNV/unnamed-1.png"
                                alt="Infographic 1"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                            {/* Zoom Icon on Hover */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="bg-black/60 backdrop-blur-md p-5 rounded-full border border-white/20">
                                    <ZoomIn className="text-white" size={40} />
                                </div>
                            </div>

                            {/* Text Overlay */}
                            <div className="absolute bottom-10 left-10 right-10">
                                <h4 className="text-3xl font-bold mb-3 text-white">Thông tin cơ bản về deepfake</h4>
                            </div>
                        </div>
                    </Motion.div>

                    {/* Infographic 2 */}
                    <Motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full max-w-5xl relative group rounded-[40px] overflow-hidden border border-white/10 bg-white/5 shadow-2xl"
                    >
                        <div className="absolute top-6 left-6 z-10">
              <span className="px-4 py-2 bg-purple-600 text-white text-xs font-bold rounded-full uppercase tracking-widest flex items-center gap-2">
                <Layout size={14} /> Deepfake và những hệ lụy
              </span>
                        </div>

                        <div className="relative aspect-video overflow-hidden">
                            <img
                                src="https://i.ibb.co/r2D60RyW/Gemini-Generated-Image-b5e9gpb5e9gpb5e9-1.png"
                                alt="Infographic 2"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                            {/* Zoom Icon on Hover */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="bg-black/60 backdrop-blur-md p-5 rounded-full border border-white/20">
                                    <ZoomIn className="text-white" size={40} />
                                </div>
                            </div>

                            {/* Text Overlay */}
                            <div className="absolute bottom-10 left-10 right-10">
                                <h4 className="text-3xl font-bold mb-3 text-white">Thực trạng buồn và cách nhận biết</h4>
                            </div>
                        </div>
                    </Motion.div>
                </div>
            </div>
        </section>
    );
};

export default Infographic;