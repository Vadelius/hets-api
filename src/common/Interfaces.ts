export interface AddPointsParams {
	id: string;
	points: number;
}

export interface Auth0User {
	sub: string;
	nickname: string;
	name: string; // email.
	picture: string; // url.
	email: string; // email.
	email_verified: boolean;
}
