import Image from "next/image";
import React from "react";

const Background = () => {
  return (
    <Image
      alt="Hiver"
      src="/christmas-background.jpg"
      quality={100}
      fill
      sizes="100vw"
      style={{ objectFit: "cover", zIndex: "-1" }}
    />
  );
};

export default Background;
