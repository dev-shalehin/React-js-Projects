export default function genarteNextId (list){
    const noxtId = list.reduce((nextId, currItem) => Math.max(nextId, currItem.id),0)
    return noxtId +1;
}