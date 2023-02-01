import PocketBase from 'pocketbase';
export const pb = new PocketBase('https://db.craftingcomrades.net');

export const getImageUrl = (collectionID: string, recordID: string, filename: string, size = '0x0') => {
    return `https://db.craftingcomrades.net/api/files/${collectionID}/${recordID}/${filename}?thumb=${size}`;
}