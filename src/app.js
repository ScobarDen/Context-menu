import './styles.css'
import {ContextMenu} from "@/menu";
import {TimerModule} from "@/modules/timer.module";

const contextMenu = new ContextMenu()
const timer = new TimerModule();

contextMenu.add(timer);
