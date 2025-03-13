import { Player } from "./creatures/Player";
import { saveGame } from "./save";

let recoverInterval = -1;
let saveInterval = -1;

// player指向的对象发生改变（新建，加载或者remake）时，需要调用此函数
export function setIntervals(player: Player) {
  if (recoverInterval !== -1) {
    clearInterval(recoverInterval);
  }
  if (saveInterval !== -1) {
    clearInterval(saveInterval);
  }

  recoverInterval = setInterval(() => {
    if (player.isAtHome) {
      player.autoRecoverHpDot();
      player.updateHealthDisplay();
    }
  }, 1000);

  saveInterval = setInterval(() => {
    if (player.isAtHome) {
      saveGame(player);
    }
  }, 10000);
}
