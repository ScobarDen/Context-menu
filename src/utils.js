export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getRandomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += random(0,15).toString(16);
  }
  return color;
}