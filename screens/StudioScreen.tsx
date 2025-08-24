// @ts-nocheck
import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import { Title, DynamicIcon, InfiniteScrollComponent, readexPro } from '~/elements';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { BaseCard, StoryCard, ProjectCardNew } from '~/components/cards'
// import { useCarmel } from '~/sdk';
import Link from 'next/link';
import { Tabs } from '~/elements';


import { mockProjects, mockStories, mockItems } from './mockStudios';


const List = ({ items, wide, isLoading, card, section, containerClasses, shortIntro, onItemPress, actionTitle, placeholder, highlight }: any) => {
  const ListPlaceholder = placeholder
  const Card = card

  // if (isLoading || !items) {
  //   return <ListPlaceholder />
  // }

  return (
    <div className='w-full'>
      <InfiniteScrollComponent
        containerClasses={wide ? `w-full` : `lg:flex lg:flex-wrap justify-center ${containerClasses || ''}`}
        renderItem={items.map((element: any, elementId: any) => <Card
          actionTitle={actionTitle}
          section={section}
          highlight={highlight}
          key={elementId}
          wide={wide}
          shortIntro={shortIntro}
          {...element}
          onPress={() => onItemPress(element)}
        />)}
        elementsNumber={3}
        loader={<ListPlaceholder />}
      />
    </div>
  )
}

export const StudioScreen = () => {
  const [activeTabHeader, setActiveTabHeader] = useState('Stories');
  const tabHeaders = ['Stories', 'Mission', 'Projects'];

  const TabHeader = ({
    tabs,
    selectedTab,
    onTabChange }: {
      tabs: string[];
      selectedTab: string;
      onTabChange: (tab: string) => void;
    }) => {
    return (
      <div className="flex border-b border-primary/40 mb-6 space-x-4 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`text-white px-4 py-2 font-semibold ${selectedTab === tab
              ? 'border-b-2 border-cyan text-cyan'
              : 'text-gray-400 hover:text-white'
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    );

  }

  return (
    <div className="bg-black min-h-screen w-full text-white px-6 py-8">
      <div className="w-full mb-10 flex justify-center relative z-30">
        <div className="flex flex-col justify-start items-center pb-32 min-h-full px-4 w-full">
          <TabHeader
            tabs={tabHeaders}
            selectedTab={activeTabHeader}
            onTabChange={(tab) => setActiveTabHeader(tab)} />
          <span className='font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green text-md mb-4 w-full'>
          </span>
          <div
            key={activeTabHeader}
            className="transition-all duration-300 ease-in-out opacity-0 animate-fade w-full"
          >
            {activeTabHeader == "Stories" && <List
              items={mockStories}
              card={StoryCard}
              wide={false}
              isLoading={false}
              section="stories"
              shortIntro={false}
              highlight={false}
              containerClasses=""
              actionTitle="View"
              onItemPress={() => { }}
              placeholder={() => <div>Loading...</div>}
            />}
            {activeTabHeader == "Mission" &&
              <div className="w-full max-w-4xl mx-auto bg-zinc-900 border border-white/10 rounded-lg p-6 shadow-md space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our mission is to empower communities through open knowledge, accessible tools, and meaningful collaboration. We believe in creativity driven by purpose and design with integrity.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Through stories, we inspire. Through projects, we build. And through collective vision, we aim to reshape the future of local and global impact.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We welcome builders, thinkers, and storytellers to be part of a journey that values people, purpose, and perseverance.
                </p>
              </div>
            }
            {activeTabHeader == "Projects" && <List
              items={mockProjects}
              card={ProjectCardNew}
              isLoading={false}
              section="projects"
              shortIntro={false}
              highlight={false}
              containerClasses=""
              actionTitle="View"
              onItemPress={() => { }}
              placeholder={() => <div>Loading...</div>}
            />}
          </div>
        </div>
      </div>
    </div>
  )
}
