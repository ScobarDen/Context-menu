import "./styles.css";
import { ContextMenu } from "@/menu";
import { Paint } from "@/modules/paint";

const contextMenu = new ContextMenu();
const paint = new Paint();
contextMenu.add(paint);
