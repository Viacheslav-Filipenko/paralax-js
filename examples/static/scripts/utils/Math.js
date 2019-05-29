export const toRadians = (angle = 0) => {
	return angle * (Math.PI / 180);
};

export const checkInfinity = number => {
	return number == Number.POSITIVE_INFINITY || number == Number.NEGATIVE_INFINITY ? true : false;
};

export const toDegrees = (angle = 0) => {
	return (angle * 180) / Math.PI;
};
