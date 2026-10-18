export type RegionType = 'all' | 'north' | 'central' | 'south' | 'east' | 'islands';

export type TravelStyle = 'all' | 'urban' | 'food' | 'nature' | 'island' | 'culture';

export type TripDuration = 'all' | '1day' | '2days' | '3plus';

export interface Attraction {
  id: string;
  name: string;
  category: '歷史文化' | '自然秘境' | '美拍打卡' | '夜市美食' | '休閒體驗' | '文創藝術';
  description: string;
  highlight: string;
  addressOrArea: string;
  recommendedTime?: string;
}

export interface Delicacy {
  name: string;
  description: string;
  tags: string[];
}

export interface Destination {
  id: string;
  name: string;
  englishName: string;
  region: 'north' | 'central' | 'south' | 'east' | 'islands';
  regionName: string;
  tagline: string;
  vibeTags: string[];
  durationCategory: '1day' | '2days' | '3plus';
  durationText: string;
  recommendedSeason: string;
  description: string;
  mapCoords: {
    x: number; // SVG viewBox coordinate x
    y: number; // SVG viewBox coordinate y
  };
  climateTip: string;
  transportTips: string;
  attractions: Attraction[];
  delicacies: Delicacy[];
  accentColor: string;
  gradient: string;
  styles: TravelStyle[];
}

export interface BucketListItem {
  id: string;
  destinationId: string;
  destinationName: string;
  title: string;
  type: 'city' | 'attraction' | 'custom';
  category?: string;
  note?: string;
  isCompleted: boolean;
  addedAt: number;
  completedAt?: number;
}
