import JS_IMG_PUMPKIN from "./assets/pumpkin.jpg";
import JS_IMG_GHOST from "./assets/prisrak.jpg";
import JS_IMG3_WITCH from "./assets/witch.jpg";

export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function getRandomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += random(0, 15).toString(16);
  }
  return color;
}

function renderFigure(min, max) {
  const bodySize = document.body.getBoundingClientRect();
  const sizeX = random(min, max);
  const sizeY = random(min, max);
  const figure = document.createElement("div");
  figure.classList.add("geometricFigures");
  figure.style.background = getRandomColor();
  figure.style.position = "absolute";
  figure.style.top = `${random(
    Math.max(sizeX, sizeY),
    bodySize.height - Math.max(sizeX, sizeY)
  )}px`;
  figure.style.left = `${random(
    Math.max(sizeX, sizeY),
    bodySize.width - Math.max(sizeX, sizeY)
  )}px`;
  return { sizeX, sizeY, figure };
}

export function deleteRandomFigures() {
  const deleteAllFigures = document.querySelectorAll(".geometricFigures");
  deleteAllFigures.forEach((el) => {
    el.remove();
  });
}

export function getRandomFigure() {
  const { sizeX, sizeY, figure } = renderFigure(20, 150);
  const id = random(1, 5);
  if (id === 1) {
    figure.style.width = `${sizeX}px`;
    figure.style.height = `${sizeX}px`;
    figure.style.borderRadius = "50%";
  }
  if (id === 2) {
    figure.style.width = `${sizeX}px`;
    figure.style.height = `${sizeX}px`;
  }
  if (id === 3) {
    figure.style.width = `${sizeX}px`;
    figure.style.height = `${sizeY}px`;
  }
  if (id === 4) {
    figure.style.width = `${sizeX}px`;
    figure.style.height = `${sizeY}px`;
    figure.style.borderRadius = `${random(50, 100)}%`;
  }
  if (id === 5) {
    figure.style.width = `${sizeX}px`;
    figure.style.height = `${sizeY}px`;
    figure.style.borderRadius = `${random(0, 50)}%`;
  }
  return figure;
}

function initialModal() {
  const modal = document.createElement("div");
  modal.classList.add("modalFigure");

  const header = document.createElement("h1");
  header.textContent = "Выберите картинку";
  modal.append(header);

  const buttonForPumpkin = document.createElement("button");
  buttonForPumpkin.className = "modalButton buttonToPrint";
  buttonForPumpkin.textContent = "Тыква";

  const buttonForCast = document.createElement("button");
  buttonForCast.className = "modalButton buttonToPrint";
  buttonForCast.textContent = "Приведение";

  const buttonForWitch = document.createElement("button");
  buttonForWitch.className = "modalButton buttonToPrint";
  buttonForWitch.textContent = "Ведьма";

  const buttonForDelete = document.createElement("button");
  buttonForDelete.className = "modalButton buttonToPrint";
  buttonForDelete.textContent = "Удалить картинки";

  modal.append(
    buttonForPumpkin,
    buttonForCast,
    buttonForWitch,
    buttonForDelete
  );

  return {
    buttonForPumpkin,
    buttonForCast,
    buttonForWitch,
    buttonForDelete,
    modal,
  };
}

export function createModal() {
  const {
    buttonForPumpkin,
    buttonForCast,
    buttonForWitch,
    buttonForDelete,
    modal,
  } = initialModal();
  buttonForPumpkin.addEventListener("click", () => {
    modal.remove();
    document.body.append(getFigure(JS_IMG_PUMPKIN));
  });
  buttonForCast.addEventListener("click", () => {
    modal.remove();
    document.body.append(getFigure(JS_IMG_GHOST));
  });
  buttonForWitch.addEventListener("click", () => {
    modal.remove();
    document.body.append(getFigure(JS_IMG3_WITCH));
  });
  buttonForDelete.addEventListener("click", () => {
    modal.remove();
    const deleteAll = document.querySelectorAll(".addedElements");
    deleteAll.forEach((elem) => {
      elem.remove();
    });
  });
  return modal;
}

export function getFigure(lincToPicture) {
  const { sizeX, figure } = renderFigure(100, 150);
  figure.className = "addedElements";
  figure.style.borderRadius = "15px";
  figure.style.width = `${sizeX}px`;
  figure.style.height = `${sizeX}px`;

  const imgines = document.createElement("img");
  imgines.style.width = `${sizeX}px`;
  imgines.style.height = `${sizeX}px`;
  imgines.style.borderRadius = "15px";
  imgines.src = lincToPicture;
  figure.append(imgines);

  return figure;
}
