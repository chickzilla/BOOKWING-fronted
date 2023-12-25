export interface Event {
  id: string;
  name: string;
  longitude: number;
  latitude: number;
  type: string[];
  picture: string;
  province: string;
  date: string;
  time: string;
  package: string[];
  description: string;
}

export interface EventName {
  id: string;
  name: string;
}

export interface EventLocation {
  id: string;
  longitude: number;
  latitude: number;
}

export interface TypeEvent {
  title: string;
  description: string;
  link: string;
}

export interface EventList {
  Event: Event[];
}
