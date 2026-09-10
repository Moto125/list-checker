import { atom } from "jotai";

/**
 * 初期フラグ
 */
export const initialAtom = atom(true);

/**
 * レビュー観点番号
 */
export const countAtom = atom(0);

/**
 * レビュー対象名
 */
export const nameAtom = atom("");

/**
 * レビュー進捗フラグ
 */
export const progressAtom = atom<boolean[][]>([]);