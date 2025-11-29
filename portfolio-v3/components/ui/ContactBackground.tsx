import React from "react";

const ContactBackground: React.FC = () => {
    return (
        <div className="absolute inset-0">
            <video className="h-full w-full object-cover" autoPlay={true} loop playsInline={true} muted preload="auto">
                <source src="/web-contact.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-primary via-primary/5 to-transparent"/>
            <div className="absolute inset-0 w-full h-full"/>
        </div>
    );
};

export default ContactBackground;
