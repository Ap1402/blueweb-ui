import { useEffect } from "react";

const useScript = (url, integrity) => {
  useEffect(() => {
    const script = document.createElement("script");
    if (integrity) {
      script.integrity = integrity;
    }
    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;
