/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Modpacks = "modpacks",
	Servers = "servers",
	Users = "users",
	Worlds = "worlds",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string

// System fields
export type BaseSystemFields = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: { [key: string]: any }
}

export type AuthSystemFields = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields

// Record types for each collection

export enum ModpacksModLoaderOptions {
	"Forge" = "Forge",
	"Fabric" = "Fabric",
}
export type ModpacksRecord = {
	title: string
	slug: string
	thumbnail: string
	minecraftVersion: string
	modLoader?: ModpacksModLoaderOptions
	modpackVersion?: string
	description?: string
	tags?: string
	author?: string
	longDescription?: string
	images?: string[]
	otherDownloads?: string[]
	downloads?: string[]
	relatedServers?: RecordIdString[]
	relatedWorlds?: RecordIdString[]
}

export type ServersRecord = {
	title: string
	slug: string
	thumbnail: string
	minecraftVersion: string
	modLoader?: string
	serverAddress?: string
	serverCurrentlyHosted?: boolean
	description?: string
	tags?: string
	images?: string[]
	otherDownloads?: string[]
	relatedModpacks?: RecordIdString[]
	relatedWorlds?: RecordIdString[]
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

export type WorldsRecord = {
	title: string
	slug: string
	thumbnail: string
	minecraftVersion: string
	modLoader?: string
	description?: string
	tags?: string
	images?: string[]
	otherDownloads?: string
	downloads?: string[]
	relatedServers?: RecordIdString[]
	relatedWorlds?: RecordIdString[]
}

// Response types include system fields and match responses from the PocketBase API
export type ModpacksResponse = ModpacksRecord & BaseSystemFields
export type ServersResponse = ServersRecord & BaseSystemFields
export type UsersResponse = UsersRecord & AuthSystemFields
export type WorldsResponse = WorldsRecord & BaseSystemFields

export type CollectionRecords = {
	modpacks: ModpacksRecord
	servers: ServersRecord
	users: UsersRecord
	worlds: WorldsRecord
}