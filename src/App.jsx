import React, { useRef } from 'react';
import { motion as Motion, useScroll, useSpring } from 'framer-motion';
import { Users, AlertTriangle, HeartCrack, Eye, MousePointer2 } from 'lucide-react';

// Components
import Hero from './components/Hero';
import ScrollSection from './components/ui/ScrollSection';
import StatCard from './components/ui/StatCard';
import IdentificationItem from './components/ui/IdentificationItem';
import SolutionCard from './components/ui/SolutionCard';
import Infographic from './components/ui/Infographic';
import Documentary from './components/Documentary';

const App = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <div ref={containerRef} className="relative bg-black text-white font-sans selection:bg-cyan-500 selection:text-black">
            {/* Progress Bar */}
            <Motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 z-[100] origin-left"
                style={{ scaleX: springScroll }}
            />

            <Hero scrollProgress={scrollYProgress} />

            <ScrollSection title="Deepfake là gì?">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-cyan-400">Không mới nhưng ngày càng tinh vi</h2>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            Deepfake (là từ kết hợp giữa "deep learning" và "fake") là phương tiện tổng hợp đã được điều khiển bằng kỹ thuật số để thay thế chân dung, giọng nói của người này bằng chân dung, giọng nói của người khác.
                        </p>
                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                            <p className="italic text-gray-300">"Thường bị lạm dụng để tạo ra nội dung sai lệch sự thật mà không có sự đồng ý của nạn nhân."</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="aspect-video bg-gray-900 rounded-2xl flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl">
                            <img src="https://media.vov.vn/sites/default/files/styles/large/public/2023-03/1_170.jpg" alt="AI" className="w-full h-full object-cover opacity-60" />
                        </div>
                    </div>
                </div>
            </ScrollSection>

            <Documentary />

            <section className="py-40 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-32">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                        Nỗi đau <span className="text-red-500">THẬT</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-20">
                        <StatCard number="99%" label="Nạn nhân là Phụ nữ và Trẻ em gái
                        (chủ yếu dưới dạng deepfake văn hóa phẩm khiêu dâm)" icon={<Users className="text-cyan-400" size={32} />} />
                        <StatCard number="Nhanh" label="Nhờ sự phổ biến của các nền tảng mạng xã hội, tốc độ phát tán thông tin sai lệch có thể chỉ tính bằng giây" icon={<AlertTriangle className="text-yellow-500" size={32} />} />
                        <StatCard number="Vô hình" label="Chấn thương tâm lý kéo dài, hủy hoại danh dự, nhân phẩm, ảnh hưởng tiêu cực đến công việc, cuộc sống và các mối quan hệ. Có thể dẫn đến hậu quả đau lòng như nạn nhân tìm tới việc tự tử" icon={<HeartCrack className="text-red-500" size={32} />} />
                    </div>
                </div>
            </section>

            {/* Section: Dấu hiệu nhận biết - Đã thêm lại vào đây */}
            <ScrollSection title="Dấu hiệu nhận biết">
                <div className="grid md:grid-cols-2 gap-20">
                    <div className="space-y-8">
                        <IdentificationItem
                            title="Chuyển động không tự nhiên"
                            desc="Mắt chớp không bình thường, cử động môi không khớp với lời nói."
                        />
                        <IdentificationItem
                            title="Chi tiết bị lỗi"
                            desc="Viền khuôn mặt, tóc, tai có thể bị nhòe, mờ hoặc biến dạng nhẹ."
                        />
                        <IdentificationItem
                            title="Chất lượng kém"
                            desc="Video thường có độ phân giải thấp để che giấu các khuyết điểm của AI. Các lỗi nhỏ như âm thanh lạ hay lỗi cử chỉ có thể hiện hữu"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                                <Eye className="text-cyan-400" /> Luôn Cảnh Giác
                            </h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Kẻ gian thường dùng Deepfake để giả mạo người thân gọi video yêu cầu chuyển tiền bất thường.<br/>

                            </p>
                            <div className="flex gap-4">
                                <div className="w-1/2 h-40 bg-gray-800 rounded-xl overflow-hidden relative border border-white/5">
                                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale opacity-50" alt="Real" />
                                    <span className="absolute bottom-2 left-2 text-[10px] bg-black/50 px-2 rounded font-bold text-white">THẬT</span>
                                </div>
                                <div className="w-1/2 h-40 bg-gray-800 rounded-xl overflow-hidden border-2 border-red-500/50 relative">
                                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover hue-rotate-30 opacity-70" alt="Fake" />
                                    <span className="absolute bottom-2 left-2 text-[10px] bg-red-600 px-2 rounded font-bold text-white">GIẢ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollSection>

            <section className="py-40 bg-white text-black">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-5xl md:text-7xl font-black mb-20 tracking-tighter text-black uppercase">GIẢI PHÁP PHÒNG NGỪA</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <SolutionCard step="01" title="Truyền thông" subtitle="Deepfake - Real Pain" content="Giáo dục nhận thức tại trường học." />
                        <SolutionCard step="02" title="Quy trình 4 bước" subtitle="Phản ứng nhanh" list={["Lưu bằng chứng", "Báo cáo", "Tổng đài 111", "Tâm lý"]} />
                        <SolutionCard step="03" title="SafeSpace Nghệ An" subtitle="Báo cáo ẩn danh" content="Ứng dụng tư vấn pháp lý và tâm lý." />
                        <SolutionCard step="04" title="Workshop" subtitle="Thực nghiệm" content="Tổ chức các buổi đào tạo tại THPT." />
                    </div>
                </div>
            </section>

            <Infographic />

            <footer className="py-60 text-center bg-black relative">
                <Motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="z-10 relative">
                    <h3 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                        Hành động ngay để bảo vệ <br/> <span className="text-cyan-400">chính mình và cộng đồng</span>
                    </h3>
                    <button className="px-12 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 mx-auto hover:bg-cyan-500 hover:text-white transition-all">
                        Báo cáo ẩn danh <MousePointer2 size={18} />
                    </button>
                </Motion.div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-cyan-900/10 blur-[120px] pointer-events-none" />
                <p className="mt-40 text-gray-600 text-sm">&copy; 2024 Deepfake - Real Pain Project. Nghệ An, Việt Nam.</p>
            </footer>
        </div>
    );
};

export default App;