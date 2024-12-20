import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
    const handleClick = () => {
        window.open('https://wa.me/8500267894', '_blank');
    };

    return (
        <div className="whatsapp-icon" onClick={handleClick}>
            <FaWhatsapp size={40} />
        </div>
    );
};

export default WhatsAppIcon;
