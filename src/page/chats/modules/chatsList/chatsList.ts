import { block } from "../../../../modules/block/block";
import { IDataChat } from "../../../../utils/constant";
import {chatPoint} from "../chatPoint/chatPoint";

chatsList.prototype.block = block as ()=>void;

export default function chatsList( id:string, dataChats: IDataChat[]) {
    
    let renderContent = '';

    dataChats.map((item) =>
        renderContent += chatPoint(item)
    )

    return `
        <ul class='chatsList' id='chatList'>
            ${renderContent}
        </ul>
    `
}
