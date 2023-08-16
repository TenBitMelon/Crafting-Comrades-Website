import type { BaseModel, Record as PBRecord } from 'pocketbase';

/**
 * This file was @generated using pocketbase-typegen
 */

export enum Collections {
	Modpacks = 'modpacks',
	Users = 'users',
	Worlds = 'worlds',
	TemporaryFiles = 'temporaryFiles'
}

// Alias types for improved usability
export type IsoDateString = string;
export type RecordIdString = string;

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString;
	created: IsoDateString;
	updated: IsoDateString;
	collectionId: string;
	collectionName: Collections;
	expand?: T;
};

export type AuthSystemFields<T = never> = {
	email: string;
	emailVisibility: boolean;
	username: string;
	verified: boolean;
} & BaseSystemFields<T>;

// Record types for each collection

export type UsersRecord = {
	name?: string;
	avatar?: string;
};

export type ModpacksRecord = {
	title: string;
	slug: string;
	thumbnail: string;
	minecraftVersion?: string;
	modLoader?: string;
	tags?: string;
	author?: string;
	longDescription?: string;
	images?: string[];
	otherDownloads?: string[];
	downloads?: string[];
	downloadPrefix?: string;
	relatedWorlds?: RecordIdString[];
};

export type WorldsRecord = {
	title: string;
	slug: string;
	thumbnail: string;
	minecraftVersion?: string;
	modLoader?: string;
	description?: string;
	tags?: string;
	images?: string[];
	otherDownloads?: string[];
	downloads?: string[];
	relatedModpacks?: RecordIdString[];
};

export type TemporaryFilesRecord = {
	file: RecordIdString;
};

// Response types include system fields and match responses from the PocketBase API
export type ModpacksResponse<Texpand = unknown> = ModpacksRecord & BaseSystemFields<Texpand>;
export type UsersResponse = UsersRecord & BaseModel & AuthSystemFields;
export type WorldsResponse<Texpand = unknown> = WorldsRecord &
	BaseModel &
	BaseSystemFields<Texpand>;
export type TemporaryFilesResponse = TemporaryFilesRecord & BaseModel & BaseSystemFields;

export type CollectionRecords = {
	modpacks: ModpacksRecord;
	users: UsersRecord;
	worlds: WorldsRecord;
	temporaryFiles: TemporaryFilesRecord;
};
