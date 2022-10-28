import './styles.css'
import {ContextMenu} from "@/menu";
import {ClicksModule} from "@/modules/clicks.module";

const contextMenu = new ContextMenu();
const clicks = new ClicksModule(5);
contextMenu.add(clicks);