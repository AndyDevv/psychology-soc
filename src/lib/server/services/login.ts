import { MONGO_ERRORS, ERROR_TYPE } from '$lib/utils/constants';
import User from '$db/models/user.model';
import bcrypt from 'bcrypt';

export async function login(email: string, password: string) {
    const user = await User.findOne({ email });

    if (!user) {
        return { error: { email: 'Email not found' } };
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
        return { error: { password: 'Invalid password' } };
    }
    return { error: null };
}