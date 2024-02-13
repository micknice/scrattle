import {TestGameStore} from '../src/app/store/testStore'
import {GameStore} from '../src/app/store/store'
import {describe, expect, test} from '@jest/globals';


describe('gameStore', () => {
    xtest('initialization', () => {
        const gameStore = new TestGameStore()
        gameStore.initializeGame()
        expect(gameStore.letterBag.length).toEqual(86)
        expect(gameStore.p1Rack.length).toEqual(7)
        expect(gameStore.p2Rack.length).toEqual(7)
    }),
    xtest('take first turn horizontal', () => {
        const gameStore = new TestGameStore()
        gameStore.testGameFirstMoveHorizontal()
        expect(gameStore.h_7.letter).toEqual('a')
        expect(gameStore.h_8.letter).toEqual('w')
        expect(gameStore.h_9.letter).toEqual('e')
        expect(gameStore.p2HP).toEqual(80)
    }),
    test('take first turn vertical', () => {
        const gameStore = new TestGameStore()
        gameStore.testGameFirstMoveVertical()
        expect(gameStore.g_8.letter).toEqual('a')
        expect(gameStore.h_8.letter).toEqual('w')
        expect(gameStore.i_8.letter).toEqual('e')
        expect(gameStore.p2HP).toEqual(80)
    })
})