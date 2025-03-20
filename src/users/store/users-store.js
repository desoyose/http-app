import { loadUsersByPage } from "../uses-cases/load-users-by-page";


const state = {
    currenPage: 0,
    users: [],
}

const loadNextPage = async ()=> {

    const users = await loadUsersByPage( state.currenPage +1);
    if ( users.length === 0) return;

    state.currenPage += 1;
    state.users = users;

}

const loadPrevPage = async () => {
    if( state.currenPage ===1) return;
    const users = await loadUsersByPage( state.currenPage -1);
    // if ( users.length === 0) return;

    state.currenPage -= 1;
    state.users = users;
}
// TODO: implementar
const onUserChanged = () => {
    throw new Error ('No implement');

}

const reloadPage = async () => {
    throw new Error ('No implement');
}

export default {
    loadNextPage,
    loadPrevPage,
    onUserChanged,
    reloadPage,

    getUsers: () => [...state.users],
    getCurrentPage: () => state.currenPage,
}