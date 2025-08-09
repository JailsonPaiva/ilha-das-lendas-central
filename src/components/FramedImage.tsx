// components/FramedImage.tsx
import React from "react";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export default function FramedImage({ src, alt, width = 1000, height = 800 }: Props) {
  return (
    <div className="relative">
      {/* Imagem principal que será "emoldurada" */}
      <img
        src="/lovable-uploads/bordas.png"
        alt={alt}
        className="rounded-md z-0 w-[400px] h-[550px] relative !z-10"
      />
      <img
        src="/lovable-uploads/image 29.png"
        alt={alt}
        className="rounded-md z-0 w-[400px] h-[550px] px-4 pt-5 pb-1 absolute top-0 left-0"
      />


      {/* Moldura em SVG por cima */}
      {/* <img
        // src="/lovable-uploads/moldura.svg"
        alt="Moldura decorativa"""
        className="absolute top-0 left-0 pointer-events-none z-10"
      /> */}
    </div>
  );
}
