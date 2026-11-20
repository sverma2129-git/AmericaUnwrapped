// "Look closer" details for a few photographs and documents. Each spot sits at
// a position on the image (x and y as percentages from the top left) and
// explains one thing a student might miss. Facts here must match the image
// registry caption or the chapter's sources.

export interface LookCloserSpot {
  x: number;
  y: number;
  label: string;
  text: string;
}

export interface LookCloserEntry {
  /** What to look for, in one line. */
  prompt: string;
  spots: LookCloserSpot[];
}

export const LOOK_CLOSER: Record<string, LookCloserEntry> = {
  'ho-telegram-1946': {
    prompt: 'Read the telegram the way an archivist would. Tap a number.',
    spots: [
      {
        x: 13,
        y: 15,
        label: 'The letterhead',
        text: 'Democratic Republic of Vietnam, Provisional Government, Ministry of Foreign Affairs. Ho wrote as the head of a government he had declared six months earlier.',
      },
      {
        x: 87,
        y: 17,
        label: 'The received stamp',
        text: 'The stamp reads MAR 11. Ho dated the telegram February 28, so it was logged about two weeks later.',
      },
      {
        x: 76,
        y: 47,
        label: 'Cochinchina',
        text: 'Cochinchina was the French name for southern Vietnam. France wanted to split it off from the rest of the country.',
      },
      {
        x: 46,
        y: 74,
        label: 'The two charters',
        text: 'The Atlantic Charter of 1941 and the United Nations Charter, signed in San Francisco in 1945, both backed the right of peoples to choose their own government. Ho was holding America to its own words.',
      },
      {
        x: 66,
        y: 91,
        label: 'The signature',
        text: 'Ho signed the telegram by hand. Truman did not reply.',
      },
    ],
  },
  'dien-bien-phu-wounded-1954': {
    prompt: 'Whose plane is this, and who came to meet it? Tap a number.',
    spots: [
      {
        x: 36,
        y: 48,
        label: 'The plane',
        text: 'The markings read U.S. Navy and Military Air Transport Service. An American plane brought France’s wounded home, and by 1954 the United States was paying about 80% of France’s war costs.',
      },
      {
        x: 28,
        y: 55,
        label: 'The ambulances',
        text: 'Ambulances with red crosses wait beside the plane for the wounded.',
      },
      {
        x: 61,
        y: 53,
        label: 'The stairs',
        text: 'People come down the stairs from the plane’s door while officials and reporters crowd the runway.',
      },
      {
        x: 42,
        y: 82,
        label: 'The honor guard',
        text: 'French troops stand in formation to receive the first soldiers wounded at Dien Bien Phu.',
      },
    ],
  },
  'huey-handover-1970': {
    prompt: 'This is Vietnamization in a single photo. Tap a number.',
    spots: [
      {
        x: 22,
        y: 26,
        label: 'The flag',
        text: 'The American flag still flies over the tower. Moments later it came down, and the South Vietnamese flag went up.',
      },
      {
        x: 38,
        y: 64,
        label: 'The sign',
        text: 'The sign names the base, Soc Trang Army Airfield. South Vietnam’s air force took command of it the same day.',
      },
      {
        x: 66,
        y: 80,
        label: 'The helicopter',
        text: 'A UH-1 Huey, one of 62 handed over to South Vietnam that day.',
      },
      {
        x: 19,
        y: 92,
        label: 'The crews',
        text: 'South Vietnamese Air Force crews. Under Vietnamization, they took over jobs Americans had been doing.',
      },
    ],
  },
  'tan-son-nhut-evacuation-1975': {
    prompt: 'This print is still on its original Marine Corps card. Tap a number.',
    spots: [
      {
        x: 37,
        y: 46,
        label: 'The helicopter',
        text: 'A Marine CH-53. Over two days, Marine helicopters flew about 1,000 Americans and 7,000 South Vietnamese out of Saigon.',
      },
      {
        x: 22,
        y: 58,
        label: 'The evacuees',
        text: 'People carry what they could hold: bags and suitcases.',
      },
      {
        x: 73,
        y: 43,
        label: 'The date',
        text: 'April 29, 1975. The next morning, North Vietnamese tanks rolled into Saigon.',
      },
      {
        x: 72,
        y: 60,
        label: 'The typed caption',
        text: 'The Marine Corps typed this caption in 1975. It says the flights carried American citizens and Vietnamese refugees out of the city.',
      },
      {
        x: 24,
        y: 89,
        label: 'The filing number',
        text: 'The National Archives filing number. Record Group 127 holds the records of the Marine Corps.',
      },
    ],
  },
  'babylift-ford-1975': {
    prompt: 'A president at the bottom of the stairs. Tap a number.',
    spots: [
      {
        x: 55,
        y: 52,
        label: 'The president',
        text: 'President Ford carries a baby down the steps himself.',
      },
      {
        x: 86,
        y: 18,
        label: 'The plane',
        text: 'A Pan Am jet, Clipper 1742. It brought about 325 South Vietnamese orphans to San Francisco.',
      },
      {
        x: 34,
        y: 63,
        label: 'The medical team',
        text: 'Medical workers wait at the bottom of the stairs to check the children.',
      },
    ],
  },
};
