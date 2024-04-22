import { MONGO_ERRORS, ERROR_TYPE } from '$lib/utils/constants';
import User from '$db/models/user.model';
import { createAccessToken, createRefreshToken } from './token';

export async function login(email: string, password: string) {
    const user = await User.findOne({ email });

    if (!user) {
        return { error: { email: 'Email not found' } };
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
        return { error: { password: 'Invalid password' } };
    }

    const accessToken = createAccessToken(user.id, user.username, user.email);
    const refreshToken = createRefreshToken(user.id, user.username, user.email);

    return { error: null, accessToken, refreshToken };
}