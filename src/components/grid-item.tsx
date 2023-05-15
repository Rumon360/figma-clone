import { FC } from "react";

interface griditemProps {
  src: string;
  srcTwo: string;
  title: string;
  number: string;
  srcSet?: string;
  srcSetTwo?: string;
}

const GridItem: FC<griditemProps> = ({
  number,
  src,
  srcTwo,
  title,
  srcSet,
  srcSetTwo,
}) => {
  return (
    <a href="#" className="block cursor-pointer">
      <img
        src={src}
        srcSet={srcSet}
        loading="lazy"
        alt="Ways of Working in Figma"
        className="block rounded-[1rem] object-cover max-w-full"
      />
      <div className="text-[1.4rem] leading-[1.5] tracking-[0.02em] flex justify-between items-center mt-[0.8rem]">
        <div className="flex justify-start items-center">
          <img
            src={srcTwo}
            srcSet={srcSetTwo}
            loading="lazy"
            alt=""
            className="w-[2.4rem] rounded-[1.6rem] mr-[0.8rem] object-contain"
          />
          <span className="text-[1.4rem] text-gray-500">{title}</span>
        </div>
        <div className="whitespace-nowrap ml-[0.5em] text-gray-500">
          {number}
        </div>
      </div>
    </a>
  );
};

export default GridItem;
