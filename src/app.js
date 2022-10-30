import './styles.css'
import {ContextMenu} from "@/menu";
import {ClicksModule} from "@/modules/clicks.module";
import {BackgroundModule} from "@/modules/background.module";
<<<<<<< HEAD
import {SoundModule} from "@/modules/sound.module";
=======
import { Paint } from "@/modules/paint";
>>>>>>> 87145d5bae0545f3084a0c6f1318c31840f6d5ab

const contextMenu = new ContextMenu();
const background = new BackgroundModule();
const clicks = new ClicksModule(5);
<<<<<<< HEAD
const sounds = new SoundModule();
contextMenu.add(background);
contextMenu.add(clicks);
contextMenu.add(sounds)
=======
const paint = new Paint();
contextMenu.add(background)
contextMenu.add(clicks);
contextMenu.add(paint);
>>>>>>> 87145d5bae0545f3084a0c6f1318c31840f6d5ab
