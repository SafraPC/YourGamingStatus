export const random_rgba = () => {
	const randomBetween = (min, max) =>
		min + Math.floor(Math.random() * (max - min + 1));
	const r = randomBetween(0, 255);
	const g = randomBetween(0, 255);
	const b = randomBetween(0, 255);
	return `rgb(${r},${g},${b})`; // Collect all to a css color string
};
