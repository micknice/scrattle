import { GameStore } from "./storeNoMobx";

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
    testGameFirstMoveDefHorizontal() {
            const testTileA: TurnTile = {xy:`h_7`, letter: 'a', type: 'def'}
            const testTileB: TurnTile = {xy:`h_8`, letter: 'w', type: 'def'}
            const testTileC: TurnTile = {xy:`h_9`, letter: 'e', type: 'def'}
            this.p1Turn.push(testTileA)
            this.p1Turn.push(testTileB)
            this.p1Turn.push(testTileC)
            const testTileD: TurnTile = {xy:`f_8`, letter: 'p', type: 'atk'}
            const testTileE: TurnTile = {xy:`g_8`, letter: 'o', type: 'atk'}
            const testTileF: TurnTile = {xy:`i_8`, letter: 'e', type: 'atk'}
            const testTileG: TurnTile = {xy:`j_8`, letter: 'r', type: 'atk'}
            this.p2Turn.push(testTileD)
            this.p2Turn.push(testTileE)
            this.p2Turn.push(testTileF)
            this.p2Turn.push(testTileG)
            this.takeTurn(this.activePlayer)
            
            this.takeTurn(this.activePlayer)
    }

    

}