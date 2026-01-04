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
                        Trực quan hóa dữ liệu
                        <div className="h-[1px] w-12 bg-cyan-500/50" />
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter">
                        BỨC TRANH TOÀN CẢNH
                    </h3>
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
                        Khám phá các số liệu và quy trình vận hành của công nghệ Deepfake thông qua bộ Infographic chi tiết dưới đây.
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
                <Layout size={14} /> Quy trình công nghệ
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
                                <h4 className="text-3xl font-bold mb-3 text-white">Cách AI học khuôn mặt</h4>
                                <p className="text-gray-300 text-lg max-w-2xl">
                                    Phân tích hàng nghìn điểm ảnh để tạo ra bản sao kỹ thuật số hoàn hảo với độ chính xác tuyệt đối.
                                </p>
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
                <Layout size={14} /> Tác động xã hội
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
                                <h4 className="text-3xl font-bold mb-3 text-white">Mạng lưới lây lan</h4>
                                <p className="text-gray-300 text-lg max-w-2xl">
                                    Mô phỏng tốc độ phát tán của tin giả trên các nền tảng mạng xã hội và tác động tâm lý dây chuyền.
                                </p>
                            </div>
                        </div>
                    </Motion.div>
                </div>
            </div>
        </section>
    );
};

export default Infographic;