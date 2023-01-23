export interface ServerPingResponse {
	online: boolean;
	ip?: string;
	port?: number;
	debug: {
		ping: boolean;
		query: boolean;
		srv: boolean;
		querymismatch: boolean;
		ipinsrv: boolean;
		cnameinsrv: boolean;
		animatedmotd: boolean;
		cachetime: number;
		cacheexpire: number;
		apiversion: number;
	};
	motd?: {
		raw: string[];
		clean: string[];
		html: string[];
	};
	players?: {
		online: number;
		max: number;
		list?: string[];
		uuid?: { [key: string]: string };
	};
	version?: string;
	protocol?: number;
	hostname?: string;
	icon?: string;
	software?: string;
	map?: string;
	gamemode?: string;
	serverid?: string;
	plugins?: {
		names: string[];
		raw: string[];
	};
	mods?: {
		names: string[];
		raw: string[];
	};
}
