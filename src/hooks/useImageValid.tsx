import { useState, useEffect } from "react";

const useImageValid = (imageUrl: string) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setIsValid(true);
    img.onerror = () => setIsValid(false);
  }, [imageUrl]);

  return isValid;
};

export default useImageValid;
