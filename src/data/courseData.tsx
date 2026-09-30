export interface Course {
  id: string;
  track: string;
  level: string;
  /** Name shown on the detail page, e.g. "TELC A1" */
  fullName: string;
  title: string;
  description: string;
  levelLabel: string;
  duration: string;
  mode: string;
  certification: string;
  heroText: string;
  aboutText: string;
  examName: string;
}

const tracks = ['German', 'Talc', 'Goethe'];
const levels = ['A1', 'A2', 'B1', 'B2'];

const levelInfo: Record<string, { label: string; audience: string }> = {
  A1: { label: 'A1 – Beginner', audience: 'absolute beginners' },
  A2: { label: 'A2 – Elementary', audience: 'learners who already know the basics' },
  B1: { label: 'B1 – Intermediate', audience: 'intermediate learners' },
  B2: { label: 'B2 – Upper Intermediate', audience: 'upper-intermediate learners' },
};

// Name shown on the detail page for each track
const trackFullName: Record<string, string> = {
  German: 'German',
  Talc: 'TELC',
  Goethe: 'Goethe',
};

export const courses: Course[] = tracks.flatMap((track) =>
  levels.map((level) => {
    const name = trackFullName[track];
    const fullName = `${name} ${level}`;
    const { label, audience } = levelInfo[level];
    const examName = track === 'German' ? `the ${level} level exam` : `the ${fullName} certification exam`;

    return {
      id: `${track.toLowerCase()}-${level.toLowerCase()}`,
      track,
      level,
      fullName,
      title: 'Build your German foundation',
      description: 'Learn essential vocabulary, grammar and real-life communication skills.',
      levelLabel: label,
      duration: '8 – 12 Weeks',
      mode: 'Online & Offline',
      certification: fullName,
      examName,
      heroText: `The ${fullName} course is designed for ${audience}. It helps you build a strong foundation in the German language for everyday communication and prepares you for ${examName}.`,
      aboutText: `Our German ${level} course is designed for ${audience} who want to learn German in a structured, practical and engaging way. It helps you build essential language skills for everyday situations such as introducing yourself, having simple conversations, travelling, shopping and handling basic communication with confidence. The course also prepares you for ${examName}, giving you a strong foundation for further studies, work or life in Germany.`,
    };
  }),
);

export const getCourseById = (id: string) => courses.find((course) => course.id === id);