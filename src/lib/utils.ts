export const getImageUrl = (collectionID: string, recordID: string, filename: string, size = '0x0') => {
    return `http://localhost:8090/api/files/${collectionID}/${recordID}/${filename}?thumb=${size}`;
}