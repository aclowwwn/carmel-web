import React from 'react';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import { Title, DynamicIcon, InfiniteScrollComponent, readexPro } from '~/elements';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { BaseCard } from '~/components/cards'
import { useRouter } from 'next/router'
import logo from '~/public/images/logo/logo-white.svg';
import { useCarmel } from '~/sdk';
import Link from 'next/link';

const List = ({ items, wide, isLoading, card, section, containerClasses, shortIntro, onItemPress, actionTitle, placeholder, highlight }: any) => {
  const ListPlaceholder = placeholder
  const Card = card
    
  if (isLoading || !items) {
    return <ListPlaceholder />
  }

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
        onPress={() => onItemPress(element)}
         {...element} 
      />)}
      elementsNumber={3}
      loader={<ListPlaceholder />}
    />
    </div>
  )
}

export const ListScreen = ({ auth, mainAction, wide, filter, name, containerClasses, children, highlight, onItemPress, actionTitle, icon, title, subtitle, card, placeholder }: any) => {
  const router = useRouter()
  const carmel = useCarmel()

  const onPress = (item: any) => {
    const parts = onItemPress.split(":")
    const link = `${parts[0]}${item[parts[1]]}`

    router.push(link)
  }

  const getItems = () => {
    if (!carmel.data[name]) return []
    return carmel.data[name].filter(filter || (() => true)).sort((a: any, b: any) => a.order - b.order)

  }

  const Header = ({ text, icon }: any) => {
    return <div className={`${readexPro.className} text-left flex flex-row mb-4 border-b border-primary/20 w-full`}>
      <span className='font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green text-2xl flex flex-row items-center w-full'>
          { icon ? <DynamicIcon name={icon} width={28} height={28} className="text-primary mr-2 -mt-1" />
                : <Image src={logo} alt="card" className={`w-10 h-10 mr-2`}/>
          }
          { text }
      </span>

      { mainAction && <div className='w-full text-end p-2'>
        <Link href={mainAction.link} key={'reg1'}>
          <button
            className={`${readexPro.className} text-nowrap text-sm md:text-md shrink-0 hover:opacity-80 border-cyan font-medium border text-white px-2 py-3 shadow-early-access-button shrink-0`}>
                { mainAction.title }
          </button>
        </Link>
       </div> }
    </div>
  }

  return (
    <div>
      <div className="bg-dark-indigo w-full flex justify-center m-auto lg:mt-4 mt-24">
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
        <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />
        <div className="w-full mb-10 flex justify-center relative z-30">
          <div className="flex flex-col justify-start items-center pb-32 min-h-full px-4 w-full">
            <Header text={title} icon={icon}/>
            <span className='font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green text-md mb-4 w-full'>
              { subtitle }
            </span>
            <List 
              items={getItems()}
              wide={wide}
              highlight={highlight}
              isLoading={carmel.isLoading}
              card={card}
              containerClasses={containerClasses}
              shortIntro
              section={name}
              onItemPress={onPress}
              actionTitle={actionTitle}
              placeholder={placeholder}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export const SimpleListScreen = ({ name, onItemPress, actionTitle, icon, title, subtitle }: any) => {
  return <ListScreen
    name={name}
    onItemPress={onItemPress}
    actionTitle={actionTitle}
    icon={icon}
    title={title}
    subtitle={subtitle}
    placeholder={ListPlaceholder}
    card={BaseCard}
  />
}
