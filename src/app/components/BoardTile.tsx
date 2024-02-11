import { DragEvent } from "react"
import { useState } from "react";
import Draggable from "./Draggable";



type TileLetter = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 
'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z' | '*' | 'tw' | 'tl' |
'dw' | 'dl' | 'st' | 'bl'

interface BoardTileProps {
    board: TileLetter
    children?: React.ReactNode;
    className?: string;
    onDrop?: (e: DragEvent<HTMLElement>) => void;
    onDragOver?: (e: DragEvent<HTMLElement>) => void;
}





const BoardTile = (props: BoardTileProps) => {

    const [tile, setTile] = useState<TileLetter>()

    const onDrop = (e: DragEvent<HTMLElement>) => {
        console.log('drop triggered')
        e.preventDefault()
        if (props.onDrop) {
            props.onDrop(e)
            console.log('dropped!!!!')
            setTile(props.board)
            console.log(tile, 'tile')
        }
    }

    const onDragOver = (e: DragEvent<HTMLElement>) => {
        e.preventDefault();
        if (props.onDragOver) {
            props.onDragOver(e)
        }
    }
        if (props.board === 'tw') {
            return (
                <div draggable onDrop={onDrop} onDragOver={onDragOver} className="rounded h-full w-full flex flex-col items-center justify-center text-[8px] -space-y-0.5 tracking-tight text-black font-semibold col-span-1 bg-red-500">
                    <p>TRIPLE</p>
                    <p>WORD</p>
                    <p>SCORE</p>
                </div>
            )
        }
        else if (props.board === 'dw') {
            return (
                <div draggable onDrop={onDrop} onDragOver={onDragOver} className="rounded h-full w-full flex flex-col items-center justify-center text-[8px] -space-y-0.5 tracking-tight text-black font-semibold col-span-1 bg-yellow-100">
                    <p>DOUBLE</p>
                    <p>WORD</p>
                    <p>SCORE</p>
                </div>
            )
        }
        else if (props.board === 'tl') {
            return (
                <div draggable onDrop={onDrop} onDragOver={onDragOver} className="rounded h-full w-full flex flex-col items-center justify-center text-[8px] -space-y-0.5 tracking-tight text-black font-semibold col-span-1 bg-blue-400">
                    <p>TRIPLE</p>
                    <p>LETTER</p>
                    <p>SCORE</p>
                </div>
            )
        }
        else if (props.board === 'dl') {
            return (
                <div draggable onDrop={onDrop} onDragOver={onDragOver} className="rounded h-full w-full flex flex-col items-center justify-center text-[8px] -space-y-0.5 tracking-tight text-black font-semibold col-span-1 bg-blue-300">
                    <p>DOUBLE</p>
                    <p>LETTER</p>
                    <p>SCORE</p>
                </div>
            )
        }
        else if (props.board === 'st') {
            return (
                <div draggable onDrop={onDrop} onDragOver={onDragOver} className="rounded h-full w-full flex flex-col items-center justify-center text-[8px] -space-y-0.5 tracking-tight text-black font-semibold col-span-1 bg-yellow-100">
                    
                </div>
            )
        }
        else if (props.board === 'bl') {
            return (
                <div draggable onDrop={onDrop} onDragOver={onDragOver} className="rounded h-full w-full flex flex-col items-center justify-center text-[8px] -space-y-0.5 tracking-tight text-black font-semibold col-span-1 bg-green-500">
                    
                </div>
            )
        } else {
            console.log("!!!!!!!")
            return (
                <Draggable letter={props.board} tile={props.board}/>
            )

        }


    
}

export default BoardTile