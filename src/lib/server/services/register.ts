import { ERROR_CODES } from '$lib/server/constants';
import User from '$db/models/user.model';
import bcrypt from 'bcrypt';

export async function register(username: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });

    try {
        await user.save();
        return { error: { message: null } }
    } catch (err) {
        const error = <any>err;

        console.log(error);

        const key = <'email' | 'username'>Object.keys(error.keyValue)[0];

        if (error.code === ERROR_CODES.DUPLICATE_KEY) {
            return { error: { message: `${key} is already taken`, [key]: error.keyValue[key], code: error.code } }
        }
        return { error: { message: 'Something went wrong', code: error.code } };
    }
}