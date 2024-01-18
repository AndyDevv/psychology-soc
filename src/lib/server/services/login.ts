import { ERROR_CODES } from '$lib/server/constants';
import User from '$db/models/user.model';
import bcrypt from 'bcrypt';

export async function login(email: string, password: string) {
    const user = await User.findOne({ email });

    if (!user) {
        return { error: { message: 'User not found' } };
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
        return { error: { message: 'Invalid password' } };
    }
    return { error: { message: null } };
}