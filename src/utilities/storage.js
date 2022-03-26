import { appStorageName } from '../globals/globals';

export function getFavs(){
    let favsFromStorage = localStorage.getItem(appStorageName);
    if(favsFromStorage === null){
        favsFromStorage = [];
    }else{
        favsFromStorage = JSON.parse(favsFromStorage);
    }
    return favsFromStorage;
  }

export function isFav(mid) {
  let favsFromStorage = getFavs();
  if (favsFromStorage.length == 0){
    return false;
  }else{
        const item = favsFromStorage.find(movie => movie.id === mid)
    if(item === undefined){
        return false;
    }else {
        return true;
    }
  }
}

export function anyFav() {
  let favsFromStorage = getFavs();
  if (favsFromStorage.length ==0){
    return false;
  }else{
    return true;
  }
}

export function addToFav(movie){
    let favsFromStorage = getFavs();
    favsFromStorage = [...favsFromStorage, movie];
    const favsForStorage = JSON.stringify(favsFromStorage);
    localStorage.setItem(appStorageName, favsForStorage);
    return favsFromStorage;
}

export function deleteFav(movie){
    let favsFromStorage = getFavs();

    const indexToRemove = favsFromStorage.findIndex(item => item.id === movie.id);

    favsFromStorage.splice(indexToRemove, 1);

    let favsForStorage = JSON.stringify(favsFromStorage);

    localStorage.setItem(appStorageName, favsForStorage);

    return favsFromStorage;
} 