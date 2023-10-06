import { useState, useEffect } from "react";

export default function useDeviceType() {
    const [deviceType, setDeviceType] = useState(false);

    useEffect(() => {
        const mobile = window.innerWidth;
        setDeviceType(mobile);
    }, []);

    return { deviceType };
}