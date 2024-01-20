import { sign } from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

export function generateToken(id: string) {
    return sign(id, JWT_SECRET, {
        expiresIn: '30d',
    });
}