const allEvents = {
	pirate: {
		key: 'pirate',
		dateStart: { day: 14, month: 9 },
		dateEnd: { day: 24, month: 9 },
		tabs: {
			modpacks: 'Booty',
			worlds: 'Seven Seas',
			map: 'Treasure Map',
			about: 'Crew',
			services: 'Bounty',
			tmpFiles: "Ship's Log"
		},
		copyright: '© Arr! All rights reserved, ye scurvy dogs!'
	},
	summer: {
		key: 'summer',
		dateStart: { month: 5, day: 21 }, // June is month 5 (0-indexed)
		dateEnd: { month: 7, day: 23 }, // August is month 7
		tabs: {
			modpacks: 'Hot Mods',
			worlds: 'Sunny Islands',
			map: 'Beach Map',
			about: 'Lifeguards',
			services: 'Surf Shop',
			tmpFiles: 'Holiday Snaps'
		},
		copyright: '© Sizzling Summer! All rights reserved under the sun!'
	},
	fool: {
		key: 'fool',
		dateStart: { month: 3, day: 1 },
		dateEnd: { month: 3, day: 2 },
		tabs: {
			modpacks: 'Mawdpwacksh',
			worlds: 'Wawwwdsh',
			map: 'Mapw',
			about: 'Abawut',
			services: 'Shewvicesh',
			tmpFiles: 'TMPW Fiwesh'
		},
		copyright: '© OwO Aww wiwhtsh weshewved undew UwU!'
	}
};

const defaultEvent = {
	key: 'default',
	dateStart: null,
	dateEnd: null,
	tabs: {
		modpacks: 'Modpacks',
		worlds: 'Worlds',
		map: 'Map',
		about: 'About',
		services: 'Services',
		tmpFiles: 'TMP Files'
	},
	copyright: '© copyright lololol'
};

export function getCurrentEvent() {
	const now = new Date();
	const currentMonth = now.getMonth();
	const currentDay = now.getDate();

	for (const [_, event] of Object.entries(allEvents)) {
		if (event.dateStart && event.dateEnd) {
			const isAfterStart =
				currentMonth > event.dateStart.month ||
				(currentMonth === event.dateStart.month && currentDay >= event.dateStart.day);

			const isBeforeEnd =
				currentMonth < event.dateEnd.month ||
				(currentMonth === event.dateEnd.month && currentDay <= event.dateEnd.day);

			if (isAfterStart && isBeforeEnd) {
				return event;
			}
		}
	}

	return defaultEvent;
}
