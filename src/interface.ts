export interface Event {
  id: string;
  name: string;
  longitude: number;
  latitude: number;
  type: string[];
  picture: string;
  picture_location: string;
  province: string;
  location: string;
  date: string;
  time: string;
  package: string[];
  description: string;
  organizer: string;
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

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface province {
  id: string;
  name_en: string;
}

export interface Amphur {
  name_en: string;
}

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  role: string;
}

export interface Booking {
  event: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  shirtsize: string;
}
