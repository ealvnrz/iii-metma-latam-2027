export type SponsorGroup = {
  title: string;
  sponsors: {
    name: string;
    status: string;
  }[];
};

export const sponsorGroups: SponsorGroup[] = [
  {
    title: "Host Institution",
    sponsors: [
      {
        name: "Pontificia Universidad Catolica de Chile",
        status: "Host institution indicated in the official poster"
      }
    ]
  },
  {
    title: "Academic Partners",
    sponsors: [
      { name: "Academic partner to be announced", status: "To be announced" },
      { name: "Academic partner to be announced", status: "To be announced" }
    ]
  },
  {
    title: "Sponsors",
    sponsors: [
      { name: "Sponsor to be announced", status: "To be announced" },
      { name: "Sponsor to be announced", status: "To be announced" }
    ]
  },
  {
    title: "Supporting Societies",
    sponsors: [
      { name: "Supporting society to be announced", status: "To be announced" }
    ]
  }
];
