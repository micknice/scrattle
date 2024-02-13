import { GameStore } from "./storeNoMobx";

type Tile = {letter: string, type: 'atk' | 'def' | ''}
type TurnTile = {xy: string, letter: string, type: 'atk' | 'def' | ''}

export class TestGameStore extends GameStore {

    testGameFirstMoveHorizontal() {
            const testTileA: TurnTile = {xy:`h_7`, letter: 'a', type: 'atk'}
            const testTileB: TurnTile = {xy:`h_8`, letter: 'w', type: 'atk'}
            const testTileC: TurnTile = {xy:`h_9`, letter: 'e', type: 'atk'}
            this.p1Turn.push(testTileA)
            this.p1Turn.push(testTileB)
            this.p1Turn.push(testTileC)
            this.takeTurn(1)
    }
    testGameFirstMoveVertical() {
            const testTileA: TurnTile = {xy:`g_8`, letter: 'a', type: 'atk'}
            const testTileB: TurnTile = {xy:`h_8`, letter: 'w', type: 'atk'}
            const testTileC: TurnTile = {xy:`i_8`, letter: 'e', type: 'atk'}
            this.p1Turn.push(testTileA)
            this.p1Turn.push(testTileB)
            this.p1Turn.push(testTileC)
            this.takeTurn(1)
    }

    

}