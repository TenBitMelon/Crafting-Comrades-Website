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
		copywrite: '© Arr! All rights reserved, ye scurvy dogs!'
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
	copywrite: '© copywrite lololol'
};

export function getCurrentEvent() {
	const now = new Date();
	const currentMonth = now.getMonth();
	const currentDay = now.getDate();

	for (const [name, event] of Object.entries(allEvents)) {
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
