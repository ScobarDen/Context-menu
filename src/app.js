import './styles.css'
import {ContextMenu} from "@/menu";
import {ClicksModule} from "@/modules/clicks.module";
import {BackgroundModule} from "@/modules/background.module";
import { Paint } from "@/modules/paint";

const contextMenu = new ContextMenu();
const background = new BackgroundModule();
const clicks = new ClicksModule(5);
const paint = new Paint();
contextMenu.add(background)
contextMenu.add(clicks);
contextMenu.add(paint);
