function typed<T>(value: T): T {
	return value;
}

function updateArray<T>(array: T[], index: number, value: T) {
	return array.map((item, i) => i === index ? value : item);
}

const database = {
	x: typed<number[]>([]),
	y: typed<number[]>([]),
};

const operations = {
	createX: (value: number) => database.x = [...database.x, value],
	updateX: (index: number, value: number) => database.x = updateArray(database.x, index, value),
	deleteX: (index: number) => database.x = database.x.filter((_, i) => i !== index),

	createY: (value: number) => database.y = [...database.y, value],
	updateY: (index: number, value: number) => database.y = updateArray(database.y, index, value),
	deleteY: (index: number) => database.y = database.y.filter((_, i) => i !== index),
}

interface Permissions {
	admin: boolean;
	createX: boolean;
	updateX: boolean;
	deleteX: boolean;
	createY: boolean;
	updateY: boolean;
	deleteY: boolean;
}

const defaultPermissions: Permissions = {
	admin: false,
	createX: false,
	updateX: false,
	deleteX: false,
	createY: false,
	updateY: false,
	deleteY: false,
};

interface User {
	username: string;
	permissions: Permissions;
}

function user(username: string, permissions: Partial<Permissions> = {}): User {
	return {
		username,
		permissions: {
			...defaultPermissions,
			...permissions,
		},
	};
}
