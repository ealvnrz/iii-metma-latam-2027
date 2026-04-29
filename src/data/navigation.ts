export type NavigationItem = {
  label: string;
  href: string;
};

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Contributions", href: "/contributions/" },
  { label: "Registration", href: "/registration/" },
  { label: "Programme", href: "/programme/" },
  { label: "Speakers", href: "/speakers/" },
  { label: "Committees", href: "/committees/" },
  { label: "Venue", href: "/venue/" },
  { label: "Accommodation", href: "/accommodation/" },
  { label: "Contact", href: "/contact/" }
];

export const footerNavigation: NavigationItem[] = [
  { label: "Sponsors", href: "/sponsors/" },
  ...navigation
];
