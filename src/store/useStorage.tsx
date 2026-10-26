import { load } from "@tauri-apps/plugin-store";
import { ChecklistData } from "../type/ChecklistStoreData";

// 新しい「Store」を作成するか、既存の「Store」をロードします。
// 同じパスを持つ `Store` がすでに作成されている場合には、オプション設定が無視されることに注意してください。
const store = await load("store.json", { autoSave: false });

/**
 * get
 */
export const getStore = async (key: string) => {
  const value = await store.get(key);
  return value;
};

/** チェックリスト一覧を取得する */
export const getChecklists = async () => {
  const value = await store.get<ChecklistData[]>("checklists");
  return value;
};

/**
 * set
 */
export const setStore = async (key: string, value: any) => {
  await store.set(key, value);
};

/** チェックリスト一覧にチェックリストを追加する */
export const addChecklist = async (checklist: ChecklistData) => {
  const checklists = await getChecklists();

  if (!checklists) {
    await setStore("checklists", [checklist]);
    return;
  }

  checklists.push(checklist);
  await setStore("checklists", checklists);
};

/** チェックリスト一覧のチェックリストを編集する(差し替える) */
export const updateChecklist = async (
  id: string,
  updatedChecklist: ChecklistData,
) => {
  const checklists = await getChecklists();

  if (!checklists) {
    return;
  }

  const index = checklists.findIndex((c) => c.id === id);
  if (index !== -1) {
    checklists[index] = updatedChecklist;
    await setStore("checklists", checklists);
  }
};

export const saveStore = async () => {
  await store.save();
};
