/** Shareable movement ads — JPGs under /public/art/ads. */

export type ShareableAd = {
  id: string;
  src: string;
  filename: string;
  title: string;
  alt: string;
  width: number;
  height: number;
};

export const SHAREABLE_ADS: ShareableAd[] = [
  {
    id: "dabs-on-datacenters",
    src: "/art/ads/01-dabs-on-datacenters.jpg",
    filename: "01-dabs-on-datacenters.jpg",
    title: "Dabs on datacenters",
    alt: "Green stencil poster of a person dabbing. Title: DABS ON DATACENTERS. DAB ENERGY TRUST. Doubs, Adamstown, and Buckeystown.",
    width: 784,
    height: 1168,
  },
  {
    id: "she-times-driveway",
    src: "/art/ads/02-she-times-driveway.jpg",
    filename: "02-she-times-driveway.jpg",
    title: "She times the driveway like a freeway",
    alt: "Night street of houses. Title: SHE TIMES THE DRIVEWAY LIKE A FREEWAY. Buckeystown. MD 85. A six-month-old in the back seat.",
    width: 784,
    height: 1168,
  },
  {
    id: "asking-for-a-deal",
    src: "/art/ads/03-asking-for-a-deal.jpg",
    filename: "03-asking-for-a-deal.jpg",
    title: "We’re asking for a deal",
    alt: "Handshake over a paper labeled Ordinance No. 2024-17. Title: We’re asking for a deal. Ordinance energy — not a lawsuit.",
    width: 1080,
    height: 1920,
  },
  {
    id: "three-towns-one-table",
    src: "/art/ads/04-three-towns-one-table.jpg",
    filename: "04-three-towns-one-table.jpg",
    title: "Three towns. One table.",
    alt: "Wooden table with three place settings under a three-star crest. Title: Three towns. One table. Equal seats. One shield. Our coalition.",
    width: 1080,
    height: 1920,
  },
  {
    id: "campus-still-gets-built",
    src: "/art/ads/05-campus-still-gets-built.jpg",
    filename: "05-campus-still-gets-built.jpg",
    title: "The campus still gets built",
    alt: "Night road past lit houses. Title: No matter who you vote for — the campus still gets built. Get what we’re due. DAB ENERGY TRUST.",
    width: 540,
    height: 960,
  },
  {
    id: "apartments-follow-boundary",
    src: "/art/ads/06-apartments-follow-boundary.jpg",
    filename: "06-apartments-follow-boundary.jpg",
    title: "Apartments follow",
    alt: "Rural house on one side of a boundary line, apartment towers on the other. Title: Apartments follow. Boundary = wall. DAB ENERGY TRUST.",
    width: 540,
    height: 960,
  },
];
