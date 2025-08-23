import React from 'react';
import Image from 'next/image';
import { readexPro } from '~/elements/fonts';
import { DynamicIcon } from '~/elements';

export const StoryCard = ({
  avatar,
  username,
  title,
  company,
  time,
  content,
  image,
  onPress,
}: any) => {
  return (
    <div
      className="border border-primary/30 hover:outline hover:outline-2 hover:outline-primary/60 transition-all bg-black/70 rounded-md p-4 mb-6 max-w-2xl w-full cursor-pointer"
      onClick={onPress}
    >
      <div className="flex items-start gap-4 mb-2">
        <div className="w-12 h-12 rounded-full bg-gray-500 overflow-hidden">
          {avatar ? (
            <Image src={avatar} alt="avatar" width={48} height={48} />
          ) : (
            <div className="w-full h-full bg-gray-600" />
          )}
        </div>
        <div className="flex flex-col">
          <span className={`${readexPro.className} text-white font-semibold`}>{username}</span>
          <span className="text-sm text-gray-400">{company} • {time}</span>
        </div>
      </div>
      <div className={`${readexPro.className} text-white text-md mb-3`}>
        {title}
      </div>
      <div className="text-gray-300 text-sm mb-3 line-clamp-4">
        {content}
      </div>
      {image && (
        <div className="w-full h-60 bg-gray-800 relative rounded-md overflow-hidden">
          <Image src={image} alt="post" fill className="object-cover" />
        </div>
      )}
      <div className="flex justify-between mt-4 text-sm text-gray-400">
        <div className="flex flex-col items-center">
          <button onClick={(e)=>{e.stopPropagation()}} className="hover:text-white border border-transparent hover:border-cyan px-4 py-1 rounded transition-all">
            Like
          </button>
        </div>
        <div className="flex flex-col items-center">
          <button onClick={(e)=>{e.stopPropagation()}} className="hover:text-white border border-transparent hover:border-cyan px-4 py-1 rounded transition-all">
            Comment
          </button>
        </div>
        <div className="flex flex-col items-center">
          <button onClick={(e)=>{e.stopPropagation()}} className="hover:text-white border border-transparent hover:border-cyan px-4 py-1 rounded transition-all">
            Share
          </button>
        </div>
      </div>

    </div>
  );
};
