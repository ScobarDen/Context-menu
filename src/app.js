import './styles.css'
import {ContextMenu} from "@/menu";
import {BackgroundModule} from "@/modules/background.module";

const contextMenu = new ContextMenu();
const background = new BackgroundModule();
contextMenu.add(background)