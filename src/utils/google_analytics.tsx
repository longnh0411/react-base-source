import { useEffect } from "react";
import ConfigConst from "../config";

const trackingId = ConfigConst.GOOGLE_ANALYTICS_ID;

const load = () =>{
    if (!trackingId) {
        console.error("Tracking ID is required to load Google Analytics.");
        return;
    }

    // Tạo script tag để tải Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;

    // Thêm script vào thẻ <head>
    document.head.appendChild(script);

    // Cấu hình Google Analytics
    script.onload = function () {
        window.dataLayer = window.dataLayer || [];
        window.gtag =  function() {
            window.dataLayer.push(arguments);   
        };
        window.gtag('js', new Date());
        window.gtag('config', trackingId);
    };

    script.onerror = function () {
        console.error("Failed to load Google Analytics script.");
    };
}

const sendPageView = () => {
    useEffect(() => {
        const handlePageView = () => {
            window.dataLayer = window.dataLayer || []
            const gtag = (...args: any[]) => {
                window.dataLayer.push(args);
            };
            gtag('config', trackingId, {
                'page_path': window.location.pathname,
                'page_title': window.location.pathname,
            });
        };
    
        handlePageView();
    }, []);
}

const googleAnalyticsService = {
    load,
    sendPageView,
}

export default googleAnalyticsService;