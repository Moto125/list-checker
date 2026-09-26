import { atom } from "jotai";

export type ReviewPoints = {
  theme: string;
  points: string[];
};

/**
 * レビュー観点リスト
 */
export const reviewPointsListAtom = atom([]);

/**
 * 選択中のレビュー観点名
 */
export const selectedReviewPointNameAtom = atom(null);

/**
 * 選択中のレビュー観点
 */
export const selectedReviewPointsAtom = atom<ReviewPoints[]>([]);

/**
 * 初期フラグ
 * trueのときはStartScreenを表示する
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
