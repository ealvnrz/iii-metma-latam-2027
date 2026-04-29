export type ProgrammeItem = {
  time: string;
  title: string;
  description?: string;
};

export type ProgrammeDay = {
  day: string;
  date: string;
  theme: string;
  items: ProgrammeItem[];
};

export const programme: ProgrammeDay[] = [
  {
    day: "Day 1",
    date: "1 September 2027",
    theme: "Opening, keynote lecture, contributed sessions",
    items: [
      { time: "Morning", title: "Registration", description: "Participant check-in and welcome coffee" },
      { time: "Morning", title: "Opening ceremony", description: "Conference welcome and local orientation" },
      { time: "Morning", title: "Keynote lecture", description: "Speaker and topic to be announced" },
      { time: "Midday", title: "Lunch", description: "Details to be announced" },
      { time: "Afternoon", title: "Contributed sessions", description: "Oral communications and thematic sessions" },
      { time: "Afternoon", title: "Poster session", description: "Poster presentations and discussion" }
    ]
  },
  {
    day: "Day 2",
    date: "2 September 2027",
    theme: "Methodology, computation, and applications",
    items: [
      { time: "Morning", title: "Keynote lecture", description: "Speaker and topic to be announced" },
      { time: "Morning", title: "Contributed sessions", description: "Parallel sessions to be announced" },
      { time: "Midday", title: "Lunch", description: "Details to be announced" },
      { time: "Afternoon", title: "Invited and contributed sessions", description: "Scientific programme to be announced" },
      { time: "Afternoon", title: "Coffee break", description: "Networking break" },
      { time: "Late afternoon", title: "Round table", description: "Topic to be announced" }
    ]
  },
  {
    day: "Day 3",
    date: "3 September 2027",
    theme: "Regional collaboration and closing sessions",
    items: [
      { time: "Morning", title: "Keynote lecture", description: "Speaker and topic to be announced" },
      { time: "Morning", title: "Contributed sessions", description: "Final oral communications" },
      { time: "Midday", title: "Lunch", description: "Details to be announced" },
      { time: "Afternoon", title: "Poster and discussion block", description: "Format to be announced" },
      { time: "Afternoon", title: "Closing ceremony", description: "Awards, announcements, and farewell" }
    ]
  }
];
