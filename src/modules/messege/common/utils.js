
export function changeWord() {
	const words = ['Тыквы', 'Костей', 'Гроба', 'Могилы', 'Демона', 'Чернокнижника', 'Дьявола', 'Черта']
	let index = getRandomInt(0, words.length)
	return (words[index])

}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min
}

