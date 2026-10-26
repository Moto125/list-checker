import { atom } from "jotai";
import { ChecklistData } from "../type/ChecklistStoreData";
/**
 * 選択中のチェックリスト名
 */
export const selectedChecklistNameAtom = atom(null);

/**
 * 選択中のチェックリスト
 */
export const selectedChecklistAtom = atom<ChecklistData | null>(null);

/**
 * チェック対象名
 */
export const nameAtom = atom("");

/**
 * ストレージのチェックリスト一覧
 */
export const checklistsAtom = atom<ChecklistData[]>([]);
