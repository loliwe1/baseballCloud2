export const PLAYER_TITLE = 'Players';
export const PLAYER_INFO = ' Players have their own profile within the system and plan on having data collected.';
export const PLAYER_NAME = 'Sign Up as Player';
export const SCOUT_TITLE = 'Scouts';
export const SCOUT_INFO = 'Coaches and scouts can view players in the system but do not have their own profile.';
export const SCOUT_NAME = 'Sign Up as Scout';
export const ICONS = {
  'user': 'fa fa-user input-user',
  'lock': 'fa fa-lock input-lock',
  'check': 'fa fa-check input-check',
};

export const POSITION = [
  { value: '', name: 'All' },
  { value: 'catcher', name: 'Catcher' },
  { value: 'first_base', name: 'First Base' },
  { value: 'second_base', name: 'Second Base' },
  { value: 'shortstop', name: 'Shortstop' },
  { value: 'third_base', name: 'Third Base' },
  { value: 'outfield', name: 'Outfield' },
  { value: 'pitcher', name: 'Pitcher' },
];

export const PROFILE_POSITION = [
  { value: '', name: '-' },
  { value: 'catcher', name: 'Catcher' },
  { value: 'first_base', name: 'First Base' },
  { value: 'second_base', name: 'Second Base' },
  { value: 'shortstop', name: 'Shortstop' },
  { value: 'third_base', name: 'Third Base' },
  { value: 'outfield', name: 'Outfield' },
  { value: 'pitcher', name: 'Pitcher' },
];

export const PROFILE_SCHOOLS = [
  { value: 'sophomore', name: 'Sophomore' },
  { value: 'freshman', name: 'Freshman' },
  { value: 'junior', name: 'Junior' },
  { value: 'senior', name: 'Senior' },
  { value: 'none', name: 'None' },
];

export const FAVORITE = [
  { value: '', name: 'All' },
  { value: '1', name: 'Favorite' },
];

export const SHOW = [
  { value: '10', name: '10' },
  { value: '15', name: '15' },
  { value: '25', name: '25' },
];

export const DATE = [
  { value: '', name: 'All' },
  { value: 'last_week', name: 'Last Week' },
  { value: 'last_month', name: 'Last Month' },
];

export const HAND = [
  { value: 'l', name: 'L' },
  { value: 'r', name: 'R' },
];

export const FACILITIES = [
  {
    id: '32',
    email: 'facility@example.com',
    name: 'Example',
  },
];

export const PITCHING = [
  { value: '', name: 'None' },
  { value: 'Four Seam Fastball', name: 'Four Seam Fastball' },
  { value: 'Two Seam Fastball', name: 'Two Seam Fastball' },
  { value: 'Curveball', name: 'Curveball' },
  { value: 'Changeup', name: 'Changeup' },
  { value: 'Slider', name: 'Slider' },
];

export const BATTING_LOG = [
  { value: '', name: 'None' },
  { value: 'Four Seam Fastball', name: 'Four Seam Fastball' },
  { value: 'Two Seam Fastball', name: 'Two Seam Fastball' },
  { value: 'Curveball', name: 'Curveball' },
  { value: 'Changeup', name: 'Changeup' },
  { value: 'Slider', name: 'Slider' },
];

export const BATTING_FILTR = [
  { value: 'exit_velocity', name: 'Exit Velocity' },
  { value: 'carry_distance', name: 'Carry Distance' },
];

export const PITCHING_FILTR = [
  { value: 'pitch_velocity', name: 'Pitch Velocity' },
  { value: 'spin_rate', name: 'Spin Rate' },
];

export const numberField = {
  parse: (v) => Number(v),
  format: (v) => Number(v),
};
