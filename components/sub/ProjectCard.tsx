import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  icon: string;
  previewUrl: string;
  detailsUrl: string;
}

const ProjectCard = ({ src, title, icon, description, previewUrl, detailsUrl }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg p-6 shadow-lg bg-gray-600 border max-h-[28em] border-[#2A0E61]">
      <div className="relative">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full max-h-[14rem] object-cover rounded-lg"
        />
      </div>

      <div className="relative p-4 z-91">
        <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <Image
          src={icon}
          alt={`${title} icon`}
          width={24}
          height={24}
          className="ml-2 h-6 w-6"
        />
        </div>
        <p className="mt-2 text-gray-300">{description}</p>
        <div className="mt-8 flex justify-between">
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >Live Preview</a>
          <a
            href={detailsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline bg-gray-700 px-6 py-2 my-[-9px] rounded hover:bg-gray-600"
          >Details</a>
      </div>
    </div>
    </div>
  );
};

export default ProjectCard;
