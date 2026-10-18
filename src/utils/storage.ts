import { BucketListItem } from '../types/travel';

const STORAGE_KEY = 'taiwan_travel_bucket_list_v2';

export const INITIAL_BUCKET_ITEMS: BucketListItem[] = [
  {
    id: 'init-1',
    destinationId: 'tainan',
    destinationName: '台南市',
    title: '台南清晨排隊吃溫體牛肉湯配肉燥飯',
    type: 'custom',
    category: '美食清單',
    note: '一定要配薑絲油膏！',
    isCompleted: true,
    addedAt: Date.now() - 86400000 * 5,
    completedAt: Date.now() - 86400000 * 2
  },
  {
    id: 'init-2',
    destinationId: 'hualien',
    destinationName: '花蓮縣',
    title: '七星潭月牙灣坐在礫石灘聽太平洋浪聲',
    type: 'attraction',
    category: '自然秘境',
    note: '記得挑一顆漂亮的石頭疊石頭許願',
    isCompleted: false,
    addedAt: Date.now() - 86400000 * 3
  },
  {
    id: 'init-3',
    destinationId: 'chiayi',
    destinationName: '嘉義縣市',
    title: '阿里山祝山線小火車迎接金色日出雲海',
    type: 'attraction',
    category: '自然秘境',
    note: '清晨氣溫很低要穿保暖羽絨衣',
    isCompleted: false,
    addedAt: Date.now() - 86400000 * 1
  }
];

export function getStoredBucketList(): BucketListItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Seed with friendly initial samples on first run
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BUCKET_ITEMS));
      return INITIAL_BUCKET_ITEMS;
    }
    return JSON.parse(raw) as BucketListItem[];
  } catch (e) {
    console.error('Failed to read bucket list from localStorage', e);
    return INITIAL_BUCKET_ITEMS;
  }
}

export function saveStoredBucketList(items: BucketListItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.error('Failed to save bucket list to localStorage', e);
  }
}
