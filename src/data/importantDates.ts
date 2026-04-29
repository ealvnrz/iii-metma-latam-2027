export type ImportantDate = {
  label: string;
  date: string;
  note?: string;
  highlighted?: boolean;
};

export const importantDates: ImportantDate[] = [
  {
    label: "Abstract submission opens",
    date: "To be announced",
    note: "Submission platform to be announced"
  },
  {
    label: "Abstract submission deadline",
    date: "To be announced",
    note: "Guidelines will be published on the contributions page"
  },
  {
    label: "Notification of acceptance",
    date: "To be announced"
  },
  {
    label: "Registration opens",
    date: "To be announced",
    note: "Registration fees to be announced"
  },
  {
    label: "Conference dates",
    date: "1-3 September 2027",
    note: "Santiago, Chile",
    highlighted: true
  }
];
