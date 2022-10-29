import './styles.css'
import {ContextMenu} from "@/menu";
import {ClicksModule} from "@/modules/clicks.module";
import {BackgroundModule} from "@/modules/background.module";

const contextMenu = new ContextMenu();
const background = new BackgroundModule();
const clicks = new ClicksModule(5);
contextMenu.add(background)
contextMenu.add(clicks);