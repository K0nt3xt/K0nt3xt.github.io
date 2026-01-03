import ScrollSection from './ui/ScrollSection';
import React from "react";

const Documentary = () => (
    <ScrollSection title="Phim Tài Liệu">
        <div className="w-full max-w-5xl mx-auto">
            <div className="relative aspect-video bg-gray-900 rounded-[32px] overflow-hidden border border-white/10 shadow-2xl group">
                <iframe
                    src="https://streamable.com/e/8bjpft?autoplay=1&loop=0"
                    className="absolute inset-0 w-full h-full border-none"
                    allow="fullscreen;autoplay"
                    // allowFullScreen
                    title="Deepfake Documentary"
                ></iframe>
            </div>
            <div className="mt-12 flex flex-col md:flex-row gap-8 items-start justify-between border-t border-white/5 pt-8 text-white">
                <div className="max-w-xl">
                    <h3 className="text-2xl font-bold mb-4 italic text-white">
                        "Một video trông rất <span className="text-red-500">thật</span>... nhưng đó có phải là sự <span className="text-red-500">thật</span>?"
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                        Phim ngắn trình bày các khía cạnh AI, lạm dụng hình ảnh và quy trình bảo vệ bản thân trên không gian mạng.
                    </p>
                </div>
                <div className="flex gap-4">
                    <div className="px-6 py-3 rounded-full border border-white/10 text-xs font-mono uppercase text-cyan-500">Streamable</div>
                    <div className="px-6 py-3 rounded-full border border-white/10 text-xs font-mono uppercase text-gray-400">4K Ready</div>
                </div>
            </div>
        </div>
    </ScrollSection>
);

export default Documentary;