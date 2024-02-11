import { DragEvent } from 'react';
import BoardTile from './BoardTile';


type TileLetter = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 
'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z' | '*' | 'tw' | 'tl' |
'dw' | 'dl' | 'st' | 'bl'

interface DroppableProps {
  tile: TileLetter;
  
  children?: React.ReactNode;
  className?: string;
  onDrop?: (e: DragEvent<HTMLElement>) => void;
  onDragOver?: (e: DragEvent<HTMLElement>) => void;
}
export default function Droppable(props: DroppableProps) {
  const onDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    if (props.onDrop) {
      props.onDrop(e);
    }
  };
  const onDragOver = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    if (props.onDragOver) {
      props.onDragOver(e);
    }
  };
  return (
    <div className={props.className} onDrop={onDrop} onDragOver={onDragOver}>
        <BoardTile board={props.tile} onDrop={onDrop}/>
      {/* {props.tile} */}
    </div>
  );
}