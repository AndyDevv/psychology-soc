// See https://kit.svelte.dev/docs/types#app

import type { IUser } from "$db/models/user.model";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			accessToken: string;
			user: {
				username: string;
				email: string;
				id: string;
			};
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export { };
