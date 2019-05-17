export const toRadians = angle => {
	return angle * (Math.PI / 180);
};

export const checkInfinity = number => {
	return number == Number.POSITIVE_INFINITY || number == Number.NEGATIVE_INFINITY ? true : false;
};
