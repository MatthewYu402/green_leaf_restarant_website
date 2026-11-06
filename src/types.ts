// Shapes of the data in content.ts. Components accept these types as props.

/** A single dish or drink on any menu. */
export interface MenuItem {
  /** Optional menu code shown as a badge, e.g. "L1". */
  id?: string;
  name: string;
  price: string;
  description?: string;
  /** Optional photo — renders a camera button that opens the lightbox. */
  image?: string;
}

/** A titled sub-list inside a menu section, e.g. "Lunch Exclusives". */
export interface MenuGroup {
  subheading: string;
  /** "full" spans both columns of a two-column group grid; "half" takes one. */
  layout?: 'full' | 'half';
  items: MenuItem[];
}

/** A nigiri/sashimi entry — one fish, two prices. */
export interface NigiriItem {
  name: string;
  /** Shown in parentheses after the name, e.g. "Cooked". */
  note?: string;
  nigiriPrice: string;
  sashimiPrice: string;
  image?: string;
}

export interface GalleryImage {
  src: string;
  alt?: string;
  /** Caption shown under the carousel while this image is centered. */
  description?: string;
}

export interface PdfLink {
  label: string;
  href: string;
}
