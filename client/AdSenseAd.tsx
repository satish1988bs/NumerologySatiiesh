import React, { useEffect } from "react";

export const AdSenseAd = ({ dataAdSlot }) => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) { }
    }, []);

    return (
        <ins className="adsbygoogle"
            style={{ display: 'block', textAlign: 'center' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
            data-ad-slot={dataAdSlot}
            data-ad-format="auto"
            data-full-width-responsive="true" />
    );
};
