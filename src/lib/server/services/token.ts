import { sign } from 'jsonwebtoken';
import type { IUser } from '$db/models/user.model';
import { ACCESS_JWT_SECRET, REFRESH_JWT_SECRET } from '$env/static/private';

export function createAccesToken(user: IUser) {
    return sign({ userId: user.id }, ACCESS_JWT_SECRET, {
        expiresIn: '15m',
    });
}

export function createRefreshToken(user: IUser) {
    return sign({ userId: user.id }, REFRESH_JWT_SECRET, {
        expiresIn: '7d',
    });
}