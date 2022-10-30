import "./styles.css";
import { ContextMenu } from "@/menu";
import { ClicksModule } from "@/modules/clicks.module";
import { BackgroundModule } from "@/modules/background.module";
import { Paint } from "@/modules/paint";
import { RandomFigure } from "./modules/randomFigure/randomfigure.js";
import { ChooseFigure } from "./modules/randomFigure/chooseepicture";
import { DeleteRandomFigure } from "./modules/randomFigure/deleterandomfigure.js";
import {SoundModule} from "@/modules/sound.module";
import {TimerModule} from "@/modules/timer.module";

const contextMenu = new ContextMenu();
const background = new BackgroundModule();
const clicks = new ClicksModule(5);
const sounds = new SoundModule();
const paint = new Paint();
const paintFigure = new RandomFigure();
const choosenPicture = new ChooseFigure();
const DeleteRandomFigureButton = new DeleteRandomFigure();
const timer = new TimerModule();
contextMenu.add(paintFigure);
contextMenu.add(choosenPicture);
contextMenu.add(DeleteRandomFigureButton);
contextMenu.add(background);
contextMenu.add(clicks);
contextMenu.add(sounds);
contextMenu.add(paint);
contextMenu.add(timer);

