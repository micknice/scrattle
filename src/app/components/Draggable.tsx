import { DragEvent } from 'react';
import { letterScores } from '../../../utils/letterScores';

type TileLetter = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 
'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z' | '*' | 'tw' | 'tl' |
'dw' | 'dl' | 'st' | 'bl'

interface DraggableProps {
letter: TileLetter
tile: TileLetter
   
// letter: 
//     'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 
//     'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z' | '*' 

  children?: React.ReactNode;
  className?: string;
  onDragStart?: (e: DragEvent<HTMLElement>) => void;
}
export default function Draggable(props: DraggableProps) {
  const onDragStart = (e: DragEvent<HTMLElement>) => {
    if (props.onDragStart) {
      props.onDragStart(e);
    }
  };
  return (
    <div className={props.className} onDragStart={onDragStart} draggable>
        <div className='w-full flex flex-col items-center justify-center p-1'>
            <p className='text-lg font-bold'>{props.letter.toUpperCase()}</p>
            <div className='w-full flex justify-end '>
              {/* <p>{props.letter}</p> */}
                <p className='text-xs'>{letterScores[props.tile]}</p>

            </div>
        </div>
       
      {props.children}
    </div>
  );
}