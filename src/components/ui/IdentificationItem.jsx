import React from 'react';

const IdentificationItem = ({ title, desc }) => (
    <div className="group border-b border-white/10 pb-8 hover:border-cyan-500 transition-colors duration-500">
        <h4 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors text-white">
            {title}
        </h4>
        <p className="text-gray-500 leading-relaxed">
            {desc}
        </p>
    </div>
);

export default IdentificationItem;