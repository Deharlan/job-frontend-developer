export class Artist {
    name: String;
}

export class ArtistData {
  page: ArtistDataPage;
  _embedded: ArtistDataEmbedded;
  _links: ArtistDataLinks;
}

export class ArtistDataPage {
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export class ArtistDataEmbedded {
  attractions: ArtistDataAttraction[];
}

export class ArtistDataAttraction {
  classifications: ArtistDataAttractionClassifications[];
  id: number;
  images: ArtistDataAttractionImages[];
  locale: string;
  name: string;
  test: Boolean;
  type: string;
  upcomingEvents: ArtistDataAttractionUpcomingevents[];
  url: string;
  _links: ArtistDataLinks;
}

export class ArtistDataAttractionClassifications {
  family: Boolean;
  genre: ArtistDataAttractionClassificationsGenre;
  primary: Boolean;
  segment: ArtistDataAttractionClassificationsSegment;
  subGenre: ArtistDataAttractionClassificationsSubgenre;
  subType: ArtistDataAttractionClassificationsSubtype;
  type: ArtistDataAttractionClassificationsType;
}

export class ArtistDataAttractionClassificationsGenre {
  id: string;
  name: string;
}

export class ArtistDataAttractionClassificationsSegment {
  id: string;
  name: string;
}

export class ArtistDataAttractionClassificationsSubgenre {
  id: string;
  name: string;
}

export class ArtistDataAttractionClassificationsSubtype {
  id: string;
  name: string;
}

export class ArtistDataAttractionClassificationsType {
  id: string;
  name: string;
}

export class ArtistDataAttractionImages {
  fallback: Boolean;
  height: number;
  ratio: string;
  url: string;
  width: number;
}

export class ArtistDataAttractionUpcomingevents {}

export class ArtistDataLinks {
  self: ArtistDataLinksSelf;
}

export class ArtistDataLinksSelf {
  href: string;
}
