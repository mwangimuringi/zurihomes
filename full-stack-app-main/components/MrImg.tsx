"use client";

// next image
import Image from "next/image";

interface IDrImgProps {
  containerStyle?: string;
  imgSrc: string;
}

const MrImg = ({ containerStyle, imgSrc }: IDrImgProps) => {
  return (
    <div className={`${containerStyle}`}>
      <Image src={imgSrc} fill priority alt="" />
    </div>
  );
};

export default MrImg;
