import jwt from 'jsonwebtoken';
import type { IUser } from '$db/models/user.model';
import { ACCESS_JWT_SECRET, REFRESH_JWT_SECRET } from '$env/static/private';

export function createAccessToken(id: string, username: string, email: string) {
    return jwt.sign({ id, username, email }, ACCESS_JWT_SECRET, {
        expiresIn: '15m',
    });
}

export function createRefreshToken(id: string, username: string, email: string) {
    return jwt.sign({ id, username, email }, REFRESH_JWT_SECRET, {
        expiresIn: '7d',
    });
}