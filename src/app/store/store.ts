import {makeAutoObservable} from 'mobx'
import { tileIdToXYArray } from '../../../utils/utils'
import { letterScores } from '../../../utils/letterScores'
import wordlist from 'wordlist-english'
import { numAlpha, alphaNum } from '../../../utils/alphaNum'

type Tile = {letter: string, type: 'atk' | 'def' | ''}
type TurnTile = {xy: string, letter: string, type: 'atk' | 'def' | ''}
type TurnTileXY = {xy: string[], letter: string, type: 'atk' | 'def' | ''}
type BoardCell = {ltrMod: Function, wrdMod: Function, letter: string, type: 'atk' | 'def' | '', locked: boolean}
type XLineScoreObj = {xLine: string, atkScore: number, defScore: number}
type YLineScoreObj = {yLine: number, atkScore: number, defScore: number}
type TurnScoreObj = {xLines: XLineScoreObj[], yLines: YLineScoreObj[]}

export class GameStore {
    p1Rack: Tile[]
    p1Turn: TurnTile[]
    p1HP: number
    p1DP: number
    p2Rack: Tile[]
    p2Turn: TurnTile[]
    p2HP: number
    p2DP: number
    letterBag: Tile[]
    a_1: BoardCell
    a_2: BoardCell
    a_3: BoardCell
    a_4: BoardCell
    a_5: BoardCell
    a_6: BoardCell
    a_7: BoardCell
    a_8: BoardCell
    a_9: BoardCell
    a_10:BoardCell
    a_11:BoardCell
    a_12:BoardCell
    a_13:BoardCell
    a_14:BoardCell
    a_15:BoardCell
    b_1: BoardCell
    b_2: BoardCell
    b_3: BoardCell
    b_4: BoardCell
    b_5: BoardCell
    b_6: BoardCell
    b_7: BoardCell
    b_8: BoardCell
    b_9: BoardCell
    b_10:BoardCell
    b_11:BoardCell
    b_12:BoardCell
    b_13:BoardCell
    b_14:BoardCell
    b_15:BoardCell
    c_1: BoardCell
    c_2: BoardCell
    c_3: BoardCell
    c_4: BoardCell
    c_5: BoardCell
    c_6: BoardCell
    c_7: BoardCell
    c_8: BoardCell
    c_9: BoardCell
    c_10:BoardCell
    c_11:BoardCell
    c_12:BoardCell
    c_13:BoardCell
    c_14:BoardCell
    c_15:BoardCell
    d_1: BoardCell
    d_2: BoardCell
    d_3: BoardCell
    d_4: BoardCell
    d_5: BoardCell
    d_6: BoardCell
    d_7: BoardCell
    d_8: BoardCell
    d_9: BoardCell
    d_10:BoardCell
    d_11:BoardCell
    d_12:BoardCell
    d_13:BoardCell
    d_14:BoardCell
    d_15:BoardCell
    e_1: BoardCell
    e_2: BoardCell
    e_3: BoardCell
    e_4: BoardCell
    e_5: BoardCell
    e_6: BoardCell
    e_7: BoardCell
    e_8: BoardCell
    e_9: BoardCell
    e_10:BoardCell
    e_11:BoardCell
    e_12:BoardCell
    e_13:BoardCell
    e_14:BoardCell
    e_15:BoardCell
    f_1: BoardCell
    f_2: BoardCell
    f_3: BoardCell
    f_4: BoardCell
    f_5: BoardCell
    f_6: BoardCell
    f_7: BoardCell
    f_8: BoardCell
    f_9: BoardCell
    f_10:BoardCell
    f_11:BoardCell
    f_12:BoardCell
    f_13:BoardCell
    f_14:BoardCell
    f_15:BoardCell
    g_1: BoardCell
    g_2: BoardCell
    g_3: BoardCell
    g_4: BoardCell
    g_5: BoardCell
    g_6: BoardCell
    g_7: BoardCell
    g_8: BoardCell
    g_9: BoardCell
    g_10:BoardCell
    g_11:BoardCell
    g_12:BoardCell
    g_13:BoardCell
    g_14:BoardCell
    g_15:BoardCell
    h_1: BoardCell
    h_2: BoardCell
    h_3: BoardCell
    h_4: BoardCell
    h_5: BoardCell
    h_6: BoardCell
    h_7: BoardCell
    h_8: BoardCell
    h_9: BoardCell
    h_10:BoardCell
    h_11:BoardCell
    h_12:BoardCell
    h_13:BoardCell
    h_14:BoardCell
    h_15:BoardCell
    i_1: BoardCell
    i_2: BoardCell
    i_3: BoardCell
    i_4: BoardCell
    i_5: BoardCell
    i_6: BoardCell
    i_7: BoardCell
    i_8: BoardCell
    i_9: BoardCell
    i_10:BoardCell
    i_11:BoardCell
    i_12:BoardCell
    i_13:BoardCell
    i_14:BoardCell
    i_15:BoardCell
    j_1: BoardCell
    j_2: BoardCell
    j_3: BoardCell
    j_4: BoardCell
    j_5: BoardCell
    j_6: BoardCell
    j_7: BoardCell
    j_8: BoardCell
    j_9: BoardCell
    j_10:BoardCell
    j_11:BoardCell
    j_12:BoardCell
    j_13:BoardCell
    j_14:BoardCell
    j_15:BoardCell
    k_1: BoardCell
    k_2: BoardCell
    k_3: BoardCell
    k_4: BoardCell
    k_5: BoardCell
    k_6: BoardCell
    k_7: BoardCell
    k_8: BoardCell
    k_9: BoardCell
    k_10:BoardCell
    k_11:BoardCell
    k_12:BoardCell
    k_13:BoardCell
    k_14:BoardCell
    k_15:BoardCell
    l_1: BoardCell
    l_2: BoardCell
    l_3: BoardCell
    l_4: BoardCell
    l_5: BoardCell
    l_6: BoardCell
    l_7: BoardCell
    l_8: BoardCell
    l_9: BoardCell
    l_10:BoardCell
    l_11:BoardCell
    l_12:BoardCell
    l_13:BoardCell
    l_14:BoardCell
    l_15:BoardCell
    m_1: BoardCell
    m_2: BoardCell
    m_3: BoardCell
    m_4: BoardCell
    m_5: BoardCell
    m_6: BoardCell
    m_7: BoardCell
    m_8: BoardCell
    m_9: BoardCell
    m_10:BoardCell
    m_11:BoardCell
    m_12:BoardCell
    m_13:BoardCell
    m_14:BoardCell
    m_15:BoardCell
    n_1: BoardCell
    n_2: BoardCell
    n_3: BoardCell
    n_4: BoardCell
    n_5: BoardCell
    n_6: BoardCell
    n_7: BoardCell
    n_8: BoardCell
    n_9: BoardCell
    n_10:BoardCell
    n_11:BoardCell
    n_12:BoardCell
    n_13:BoardCell
    n_14:BoardCell
    n_15:BoardCell
    o_1: BoardCell
    o_2: BoardCell
    o_3: BoardCell
    o_4: BoardCell
    o_5: BoardCell
    o_6: BoardCell
    o_7: BoardCell
    o_8: BoardCell
    o_9: BoardCell
    o_10:BoardCell
    o_11:BoardCell
    o_12:BoardCell
    o_13:BoardCell
    o_14:BoardCell
    o_15:BoardCell
    
    constructor(
        p1HP: any = 100,
        p2HP: any = 100,
        ) {
        makeAutoObservable(this)
        this.letterBag = []
        //player stuff
        this.p1Rack = []
        this.p1Turn = []
        this.p1HP = p1HP
        this.p1DP = 0
        this.p2Rack = []
        this.p2Turn = []
        this.p2HP = p2HP
        this.p2DP = 0
        //board
        this.a_1 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 3}, letter: '', type: '', locked: false}
        this.a_2 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.a_3 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.a_4 = {ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.a_5 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.a_6 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.a_7 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.a_8 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 3}, letter: '', type: '', locked: false}
        this.a_9 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.a_10 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.a_11 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.a_12 ={ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.a_13 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.a_14 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.a_15 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 3}, letter: '', type: '', locked: false}
        this.b_1 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.b_2 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 2}, letter: '', type: '', locked: false}
        this.b_3 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.b_4 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.b_5 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.b_6 = {ltrMod: (score: number) => {return score * 3}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.b_7 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.b_8 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.b_9 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.b_10 ={ltrMod: (score: number) => {return score * 3}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.b_11 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.b_12 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.b_13 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.b_14 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 2}, letter: '', type: '', locked: false}
        this.b_15 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.c_1 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.c_2 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.c_3 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 2}, letter: '', type: '', locked: false}
        this.c_4 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.c_5 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.c_6 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.c_7 = {ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.c_8 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.c_9 = {ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.c_10 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.c_11 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.c_12 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.c_13 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 2}, letter: '', type: '', locked: false}
        this.c_14 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.c_15 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.d_1 = {ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.d_2 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.d_3 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.d_4 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 2}, letter: '', type: '', locked: false}
        this.d_5 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.d_6 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.d_7 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.d_8 = {ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.d_9 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.d_10 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.d_11 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.d_12 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 2}, letter: '', type: '', locked: false}
        this.d_13 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.d_14 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.d_15 ={ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.e_1 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.e_2 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.e_3 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.e_4 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.e_5 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 2}, letter: '', type: '', locked: false}
        this.e_6 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.e_7 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.e_8 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.e_9 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.e_10 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.e_11 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 2}, letter: '', type: '', locked: false}
        this.e_12 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.e_13 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.e_14 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.e_15 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.f_1 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.f_2 = {ltrMod: (score: number) => {return score * 3}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.f_3 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.f_4 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.f_5 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.f_6 = {ltrMod: (score: number) => {return score * 3}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.f_7 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.f_8 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.f_9 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.f_10 ={ltrMod: (score: number) => {return score * 3}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.f_11 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.f_12 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.f_13 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.f_14 ={ltrMod: (score: number) => {return score * 3}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.f_15 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.g_1 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.g_2 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.g_3 = {ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.g_4 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.g_5 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.g_6 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.g_7 = {ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.g_8 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.g_9 = {ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.g_10 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.g_11 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.g_12 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.g_13 ={ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.g_14 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.g_15 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.h_1 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 3}, letter: '', type: '', locked: false}
        this.h_2 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.h_3 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.h_4 = {ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.h_5 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.h_6 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.h_7 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.h_8 = {ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.h_9 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.h_10 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.h_11 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.h_12 ={ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.h_13 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.h_14 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.h_15 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 3}, letter: '', type: '', locked: false}
        this.i_1 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.i_2 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.i_3 = {ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.i_4 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.i_5 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.i_6 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.i_7 = {ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.i_8 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.i_9 = {ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.i_10 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.i_11 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.i_12 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.i_13 ={ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.i_14 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.i_15 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.j_1 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.j_2 = {ltrMod: (score: number) => {return score * 3}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.j_3 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.j_4 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.j_5 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.j_6 = {ltrMod: (score: number) => {return score * 3}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.j_7 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.j_8 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.j_9 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.j_10 ={ltrMod: (score: number) => {return score * 3}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.j_11 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.j_12 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.j_13 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.j_14 ={ltrMod: (score: number) => {return score * 3}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.j_15 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.k_1 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.k_2 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.k_3 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.k_4 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.k_5 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 2}, letter: '', type: '', locked: false}
        this.k_6 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.k_7 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.k_8 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.k_9 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.k_10 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.k_11 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 2}, letter: '', type: '', locked: false}
        this.k_12 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.k_13 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.k_14 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.k_15 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.l_1 = {ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.l_2 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.l_3 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.l_4 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 2}, letter: '', type: '', locked: false}
        this.l_5 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.l_6 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.l_7 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.l_8 = {ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.l_9 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.l_10 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.l_11 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.l_12 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 2}, letter: '', type: '', locked: false}
        this.l_13 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.l_14 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.l_15 ={ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.m_1 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.m_2 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.m_3 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 2}, letter: '', type: '', locked: false}
        this.m_4 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.m_5 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.m_6 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.m_7 = {ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.m_8 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.m_9 = {ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.m_10 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.m_11 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.m_12 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.m_13 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 2}, letter: '', type: '', locked: false}
        this.m_14 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.m_15 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.n_1 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.n_2 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 2}, letter: '', type: '', locked: false}
        this.n_3 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.n_4 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.n_5 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.n_6 = {ltrMod: (score: number) => {return score * 3}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.n_7 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.n_8 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.n_9 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.n_10 ={ltrMod: (score: number) => {return score * 3}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.n_11 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.n_12 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.n_13 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.n_14 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 2}, letter: '', type: '', locked: false}
        this.n_15 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.o_1 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 3}, letter: '', type: '', locked: false}
        this.o_2 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.o_3 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.o_4 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.o_5 = {ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.o_6 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.o_7 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.o_8 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 3}, letter: '', type: '', locked: false}
        this.o_9 = {ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.o_10 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.o_11 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.o_12 ={ltrMod: (score: number) => {return score * 2}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.o_13 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.o_14 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 1}, letter: '', type: '', locked: false}
        this.o_15 ={ltrMod: (score: number) => {return score * 1}, wrdMod: (score: number) => {return score * 3}, letter: '', type: '', locked: false}
    }

    [key: string]: any | string | Function

    private drawRandomTile() {
        const index = Math.floor(Math.random() * (this.letterBag.length -1))
        const clonedLetterBag = [...this.letterBag]
        const tile = clonedLetterBag[index]
        clonedLetterBag.splice(index, 1)
        this.letterBag = clonedLetterBag
        return tile
    }

    private initializeRacks() {
        for (let i = 0; i < 7; i++) {
            this.p1Rack.push(this.drawRandomTile())
            this.p2Rack.push(this.drawRandomTile())
        }
    }
    private checkY(xYArray: any[]): boolean {
        const y1 = xYArray[0].xy[0]
        return xYArray.every((curr: string[]) => curr[0] === y1)
    }
    private checkX(xYArray: any[]): boolean {
        const x1 = xYArray[0].xy[1]
        return xYArray.every((curr: string[]) => curr[0] === x1)
    }

    private evaluateTurnValidGeometry(player: number): boolean {
        let xYArray: any[] = []
        if (player = 1) {
                xYArray = this.p1Turn.map((turnTile: TurnTile) => (<TurnTileXY>{xy: tileIdToXYArray(turnTile.xy), letter: turnTile.letter}))
            } else if (player = 2) {
                xYArray = this.p2Turn.map((turnTile: TurnTile) => (<TurnTileXY>{xy: tileIdToXYArray(turnTile.xy), letter: turnTile.letter}))
        } 
        const yCheck = this.checkY(xYArray)
        const xCheck = this.checkX(xYArray)
        if ( yCheck || xCheck) {
            return true
        } else {
            return false
        }
    }
    private evaluateTurnScores(turnArray: TurnTile[]): TurnScoreObj {
        const sortedTurnArray = turnArray.sort()
        const xYArray = turnArray.map((turnTile: TurnTile) => 
            <TurnTileXY>({xy: tileIdToXYArray(turnTile.xy), letter: turnTile.letter, type: turnTile.type}));
        //check to see tiles are placed vertically
        if (xYArray.length > 0 && this.checkY(xYArray)) {
            const xLineScores: XLineScoreObj[] = []
            const yLineScores: YLineScoreObj[] = []
            
            //evaluate word validity, atk & def scores for all horizontal lines of turn
            for(const turnTileXY of xYArray) {
                let xLineScoreAtk = 0
                let xLineScoreDef = 0
                const tileAlpha = turnTileXY.xy[0]
                const tileNum = turnTileXY.xy[1]
                
                const leftArr = this.checkLeft(tileAlpha, parseInt(tileNum))
                const rightArr = this.checkRight(tileAlpha, parseInt(tileNum))
                const wordString = `${leftArr.map((x: TurnTileXY) => 
                    (x.letter)).join('')}${turnTileXY.letter}${rightArr.map((x: TurnTileXY) => (x.letter)).join('')}`;
                if (wordlist.english.includes(wordString)) {
                    const wordTileArray = [...leftArr, turnTileXY, ...rightArr]
                    for (const wordTile of wordTileArray) {
                        if (wordTile.type === 'atk') {
                            xLineScoreAtk += this.evaluateLetterScore(wordTile)
                        } else if (wordTile.type === 'def') {
                            xLineScoreDef += this.evaluateLetterScore(wordTile)
                        } 
                    }
                    for (const wordTile of wordTileArray) {
                        xLineScoreAtk = this[`${wordTile.xy[0]}_${wordTile.xy[1]}`].wrdMod(xLineScoreAtk)
                        xLineScoreDef = this[`${wordTile.xy[0]}_${wordTile.xy[1]}`].wrdMod(xLineScoreDef)
                    }
                    const xLineScoreObj = <XLineScoreObj>{xLine: tileAlpha, atkScore: xLineScoreAtk, defScore: xLineScoreDef}
                    xLineScores.push(xLineScoreObj)
                } else {
                    return {xLines: [], yLines: []}
                }
                if (xLineScoreAtk + xLineScoreDef === 0 && wordString.length > 1) {
                    return {xLines: [], yLines: []}
                }
            }

            //evaluate word validity, atk & def scores for single vertical line of turn
            let yLineScoreAtk = 0
            let yLineScoreDef = 0
            const firstTileAlpha = xYArray[0].xy[0]
            const firstTileNum = parseInt(xYArray[0].xy[1])
            const lastTileAlpha = xYArray[xYArray.length -1].xy[0]
            const lastTileNum = parseInt(xYArray[xYArray.length -1].xy[1])
            const upArr = this.checkUp(firstTileAlpha, firstTileNum)
            const downArr = this.checkDown(lastTileAlpha, lastTileNum)
            const wordString = `${upArr.map((x: TurnTileXY) => 
                (x.letter)).join('')}${xYArray.map((x: TurnTileXY) => 
                    (x.letter)).join('')}}${downArr.map((x: TurnTileXY) => (x.letter)).join('')}`;
            if (wordlist.english.includes(wordString)) {
                const wordTileArray = [...upArr, ...xYArray, ...downArr]
                for (const wordTile of wordTileArray) {
                    if (wordTile.type === 'atk') {
                        yLineScoreAtk += this.evaluateLetterScore(wordTile)
                    } else if (wordTile.type === 'def') {
                        yLineScoreDef += this.evaluateLetterScore(wordTile)
                    } 
                }
                for (const wordTile of wordTileArray) {
                    yLineScoreAtk = this[`${wordTile.xy[0]}_${wordTile.xy[1]}`].wrdMod(yLineScoreAtk)
                    yLineScoreDef = this[`${wordTile.xy[0]}_${wordTile.xy[1]}`].wrdMod(yLineScoreDef)
                }
                const yLineScoreObj = <YLineScoreObj>{yLine: firstTileNum, atkScore: yLineScoreAtk, defScore: yLineScoreDef}
                yLineScores.push(yLineScoreObj)
            } else {
                return {xLines: [], yLines: []}
            }
            if (yLineScoreAtk + yLineScoreDef === 0 && wordString.length > 1) {
                return {xLines: [], yLines: []}
            }
            
            const scoreObj = <TurnScoreObj>{xLines: xLineScores, yLines: yLineScores}
            return scoreObj
        //TODO:
        //check to see if tiles are placed horizontally
        } else if (xYArray.length > 0 && this.checkX(xYArray)) {
            const xLineScores: XLineScoreObj[] = []
            const yLineScores: YLineScoreObj[] = []

            //evaluate word validity, atk & def scores for all vertical lines of turn
            for(const turnTileXY of xYArray) {
                let yLineScoreAtk = 0
                let yLineScoreDef = 0
                const tileAlpha = turnTileXY.xy[0]
                const tileNum = turnTileXY.xy[1]
                const upArr = this.checkUp(tileAlpha, parseInt(tileNum))
                const downArr = this.checkDown(tileAlpha, parseInt(tileNum))
                const wordString = `${upArr.map((x: TurnTileXY) => 
                    (x.letter)).join('')}${turnTileXY.letter}${downArr.map((x: TurnTileXY) => (x.letter)).join('')}`;
                    if (wordlist.english.includes(wordString)) {
                        const wordTileArray = [...upArr, turnTileXY, ...upArr]
                        for (const wordTile of wordTileArray) {
                            if (wordTile.type === 'atk') {
                                yLineScoreAtk += this.evaluateLetterScore(wordTile)
                            } else if (wordTile.type === 'def') {
                                yLineScoreDef += this.evaluateLetterScore(wordTile)
                            } 
                        }
                        for (const wordTile of wordTileArray) {
                            yLineScoreAtk = this[`${wordTile.xy[0]}_${wordTile.xy[1]}`].wrdMod(yLineScoreAtk)
                            yLineScoreDef = this[`${wordTile.xy[0]}_${wordTile.xy[1]}`].wrdMod(yLineScoreDef)
                        }
                        const yLineScoreObj = <YLineScoreObj>{yLine: parseInt(tileNum), atkScore: yLineScoreAtk, defScore: yLineScoreDef}
                        yLineScores.push(yLineScoreObj)
                    } else {
                        return {xLines: [], yLines: []}
                    }
                    if (yLineScoreAtk + yLineScoreDef === 0 && wordString.length > 1) {
                        return {xLines: [], yLines: []}
                    }
    
            }

            //evaluate word validity, atk & def scores for single horizontal line of turn
            let xLineScoreAtk = 0
            let xLineScoreDef = 0
            const firstTileAlpha = xYArray[0].xy[0]
            const firstTileNum = parseInt(xYArray[0].xy[1])
            const lastTileAlpha = xYArray[xYArray.length -1].xy[0]
            const lastTileNum = parseInt(xYArray[xYArray.length -1].xy[1])
            const leftArr = this.checkleft(firstTileAlpha, firstTileNum)
            const rightArr = this.checkright(lastTileAlpha, lastTileNum)
            const wordString = `${leftArr.map((x: TurnTileXY) => 
                (x.letter)).join('')}${xYArray.map((x: TurnTileXY) => 
                    (x.letter)).join('')}}${rightArr.map((x: TurnTileXY) => (x.letter)).join('')}`;
            if (wordlist.english.includes(wordString)) {
                const wordTileArray = [...leftArr, ...xYArray, ...rightArr]
                for (const wordTile of wordTileArray) {
                    if (wordTile.type === 'atk') {
                        xLineScoreAtk += this.evaluateLetterScore(wordTile)
                    } else if (wordTile.type === 'def') {
                        xLineScoreDef += this.evaluateLetterScore(wordTile)
                    } 
                }
                for (const wordTile of wordTileArray) {
                    xLineScoreAtk = this[`${wordTile.xy[0]}_${wordTile.xy[1]}`].wrdMod(xLineScoreAtk)
                    xLineScoreDef = this[`${wordTile.xy[0]}_${wordTile.xy[1]}`].wrdMod(xLineScoreDef)
                }
                const xLineScoreObj = <XLineScoreObj>{xLine: firstTileAlpha, atkScore: xLineScoreAtk, defScore: xLineScoreDef}
                xLineScores.push(xLineScoreObj)
            } else {
                return {xLines: [], yLines: []}
            }
            if (xLineScoreAtk + xLineScoreDef === 0 && wordString.length > 1) {
                return {xLines: [], yLines: []}
            }

        }
        const scoreObj = <TurnScoreObj>{xLines: [], yLines: []}
            return scoreObj

        
    }
    
    

    private checkLeft(alpha: string, playedTileIndex: number): TurnTileXY[] {
        const leftArr: TurnTileXY[] = []
        for(let i = playedTileIndex -1; i > 0; i--) {
            if(this[`${alpha}_${i}`].letter === '') {
                break
            } else {
                const turnTileXY = <TurnTileXY>{
                    xy: [alpha, `${playedTileIndex}`], 
                    letter: this[`${alpha}_${i}`].letter, 
                    type: this[`${alpha}_${i}`].type 
                }
                leftArr.unshift(turnTileXY)
            }
        }
        return leftArr

    }

    private checkRight(alpha: string, playedTileIndex: number): TurnTileXY[] {
        const rightArr: TurnTileXY[] = []
        for(let i = playedTileIndex +1; i < 16; i++) {
            if(this[`${alpha}_${i}`].letter === '') {
                break
            } else {
                const turnTileXY = <TurnTileXY>{
                    xy: [alpha, `${playedTileIndex}`], 
                    letter: this[`${alpha}_${i}`].letter, 
                    type: this[`${alpha}_${i}`].type 
                }
                rightArr.push(turnTileXY)
            }
        }
        return rightArr

    }

    private checkUp(alpha: string, playedTileIndex: number): TurnTileXY[] {
    const upArr: TurnTileXY[] = []
        for (let i = alphaNum[alpha]; i > 0; i--) {
            if (this[`${numAlpha[i]}_${playedTileIndex}`].letter === '') {
                break
            } else {
                const turnTileXY = <TurnTileXY>{
                    xy: [`${numAlpha[i]}`, playedTileIndex],
                    letter: this[`${numAlpha[i]}`].letter,
                    type: this[`${numAlpha[i]}`].type
                }
                upArr.unshift(turnTileXY)
            }
        }
        return upArr
    }

    private checkDown(alpha: string, playedTileIndex: number): TurnTileXY[] {
        const downArr: TurnTileXY[] = []
            for (let i = alphaNum[alpha]; i < 16; i++) {
                if (this[`${numAlpha[i]}_${playedTileIndex}`].letter === '') {
                    break
                } else {
                    const turnTileXY = <TurnTileXY>{
                        xy: [`${numAlpha[i]}`, playedTileIndex],
                        letter: this[`${numAlpha[i]}`].letter,
                        type: this[`${numAlpha[i]}`].type
                    }
                    downArr.push(turnTileXY)
                }
            }
            return downArr
        }


    private checkValidDictionaryWord(word: string): boolean {
        return false
    }

    private evaluateLetterScore(turnTileXY: TurnTileXY): number {
        const tileAlpha = turnTileXY.xy[0]
        const tileNum = turnTileXY.xy[1]
        const playedTileBaseScore = letterScores[`${turnTileXY.letter}`]
        const playedTileScore = this[`${tileAlpha}_${tileNum}`].ltrMod(playedTileBaseScore)
        return playedTileScore

    }
    
}

