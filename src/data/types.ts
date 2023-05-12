export interface ThingStructure {
  name: string;
}

export interface ThingDataStructure extends ThingStructure {
  id: string;
}

export interface ThingsDataStructure {
  things: ThingDataStructure[];
}
