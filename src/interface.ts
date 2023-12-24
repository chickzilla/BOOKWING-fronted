export interface Event {
  id: string;
  name: string;
  longitude: number;
  latitude: number;
  type: string;
  picture: string;
  province: string;
  date: string;
}

export interface EventName {
  id: string;
  name: string;
}

export interface EventList {
  Event: Event[];
}
