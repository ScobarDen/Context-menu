import './styles.css'
import {ContextMenu} from "@/menu";
import {ClicksModule} from "@/modules/clicks.module";
import {BackgroundModule} from "@/modules/background.module";
import {SoundModule} from "@/modules/sound.module";
import { Paint } from "@/modules/paint";



const contextMenu = new ContextMenu();
const background = new BackgroundModule();
const clicks = new ClicksModule(5);
const sounds = new SoundModule();
const paint = new Paint();

contextMenu.add(background)
contextMenu.add(clicks);
contextMenu.add(sounds);
contextMenu.add(paint);
