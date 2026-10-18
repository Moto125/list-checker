/** チェックリストアイテム */
export type ChecklistItemData = {
  title: string;
  points: string[];
};

/** チェックリスト */
export type ChecklistData = {
  id: string;
  title: string;
  items: string[];
  lastUpdated: number;
};

/**
 * 永続化データ
 */
export type RawStoreData = {
  /** チェックリスト */
  checklists: ChecklistData[];
};
