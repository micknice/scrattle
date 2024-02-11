'use client'
import Droppable from './components/Droppable';
import Draggable from './components/Draggable';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import { boardArray } from './components/BoardArray';

type TileLetter = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 
'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z' | '*' | 'tw' | 'tl' |
'dw' | 'dl' | 'st' | 'bl'

interface BoardArrayItem  {
  tile: TileLetter
  defaultTile: TileLetter
  letter: string
  used: boolean
  name: string
  numbers: string[]
  
}

const Page = () => {

  const [containers, setContainers] = useState<BoardArrayItem[]>(boardArray);
  // const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  // const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [items, setItems] = useState<TileLetter[]>(['a', 'b', 'c']);
  const [currentItem, setCurrentItem] = useState<TileLetter>('bl');


  const onDragStart = (item: TileLetter) => {
    setCurrentItem(item);
  };

  const onDrop = (index: number) => {
    if (containers[index].used == false) {
      if (currentItem!) {
        console.log('placing tile');
        setItems((items) => items.filter((item) => item != currentItem));
        // containers[index].numbers.push(currentItem!);
        containers[index].tile = currentItem
        console.log(containers[0].tile, '1')
        console.log(containers[1].tile, '2')
        console.log(containers[2].tile, '3')
        // setContainers((containers) => containers);
      } else {
        console.log('refuse odd number');
      }
    } 
  };

  return (
    <div className="p-5 flex">
      <div className="h-[795px] w-[795px] grid grid-cols-15">
        {containers.map((cont, index) => (
          <Droppable
            tile={cont.tile}
            key={index}
            className="col-span-1 h-[53px] w-[53px] rounded-lg border-[1px] border-black  flex flex-col gap-2 justify-center grow"
            onDrop={(e) => onDrop(index)}
          >
            {cont.numbers.length == 0 ? (
              <span>{cont.name}</span>
            ) : (
              cont.numbers.map((n) => (
                <span className="border border-red-600 rounded-lg p-2" key={n}>
                  {n}
                </span>
              ))
            )}
          </Droppable>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-2 m-2 p-2">
        {items.map((item) => (
          <Draggable
            tile={item}
            letter={item}
            key={item}
            className="h-[53px] w-[53px] border flex flex-col items-center justify-center border-red-600 rounded-lg p-2"
            onDragStart={(e) => onDragStart(item)}
          >
            {/* {item} */}
          </Draggable>
        ))}
      </div>

      {/* {(navigator.maxTouchPoints ||
        'ontouchstart' in document.documentElement) && (
        <Script src="/DragDropTouch.js" />
      )} */}
    </div>
  );
}


export default Page
