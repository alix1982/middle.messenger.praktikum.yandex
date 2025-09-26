import { block } from "../../../../modules/block/block";
// import { IDataChat } from "../../../../utils/constant";
// import {chatPoint} from "../chatPoint/chatPoint";

chatsList.prototype.block = block as ()=>void;

export default function chatsList() {
    // let renderContent = '';

    return `
        <ul class='chatsListMessege' id='chatsListMessege'>

        </ul>
    `
}
  // ${renderContent}
