import { ERROR_TYPE, MONGO_ERRORS } from '$lib/utils/constants';
import User from '$db/models/user.model';
import { z } from 'zod';
import { generateToken } from './token';
// import { objectArraysStringify } from '$lib/utils/basic';

export const registerSchema = z
    .object({
        username: z
            .string({ required_error: 'Username is required' })
            .min(1, { message: 'Username is required' })
            .max(64, { message: 'Username must be less than 64 characters' })
            .trim(),
        email: z
            .string({ required_error: 'Email is required' })
            .min(1, { message: 'Email is required' })
            .max(64, { message: 'Email must be less than 64 characters' })
            .email({ message: 'Email must be a valid email address' }),
        password: z
            .string({ required_error: 'Password is required' })
            .min(8, { message: 'Password must be at least 6 characters' })
            .max(32, { message: 'Password must be less than 32 characters' })
            .trim(),
        passwordConfirm: z
            .string({ required_error: 'Password is required' })
            .min(8, { message: 'Password must be at least 6 characters' })
            .max(32, { message: 'Password must be less than 32 characters' })
            .trim(),
    })
    .superRefine(({ passwordConfirm, password }, ctx) => {
        if (passwordConfirm !== password) {
            ctx.addIssue({
                code: 'custom',
                message: 'Password and Confirm Password must match',
                path: ['password']
            });
            ctx.addIssue({
                code: 'custom',
                message: 'Password and Confirm Password must match',
                path: ['passwordConfirm']
            });
        }
    });

export async function register(username: string, email: string, password: string, passwordConfirm: string) {
    const user = new User({ username, email, password });

    try {
        registerSchema.parse({ username, email, password, passwordConfirm });
    } catch (err) {
        const { fieldErrors: errors } = (<any>err).flatten();
        // console.log(`VALIDATION_ERRORS:`, (<any>err).flatten());

        return { error: errors, token: null }
    }

    try {
        await user.save();
    } catch (err) {
        const error = <any>err;

        // console.log(`DB_ERRORS: `, error, error.code, error.keyValue);

        const key = <'email' | 'username'>Object.keys(error.keyValue)[0];

        if (error.code === MONGO_ERRORS.DUPLICATE_KEY) {
            return { error: { [key]: `${key} does already exist` } }
        }
        return { error, token: null };
    }

    return { error: null, token: generateToken(user.id) };
}