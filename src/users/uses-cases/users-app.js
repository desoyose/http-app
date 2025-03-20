import { renderButtons } from "../presentacion/render-bottons/render-bottons";
import { renderTable } from "../presentacion/render-table/render-table";
import usersStore from "../store/users-store";
import { renderAddButton } from "../presentacion/rendeer-add-button/render-add-button";
import { renderModal } from "../presentacion/render-modal/render-modal";
import { saveUser } from "./save-user";
export const UsersApp = async( element ) =>{

    element.innerHTML  = 'Loading...';
    await usersStore.loadNextPage();
    element.innerHTML = '';
    renderTable(element);
    renderButtons(element);
    renderAddButton(element);
    renderModal(element, async(userlike) => {
        const user = await saveUser( userlike );
        usersStore.onUserChanged ( user );
        renderTable();
    });
}