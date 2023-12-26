function typed<T>(value: T): T {
	return value;
}

const database = {
	x: typed<number[]>([]),
	y: typed<number[]>([]),
};

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
