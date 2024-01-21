import { connectToDB } from "$db/mongo";
import { ACCESS_JWT_SECRET, REFRESH_JWT_SECRET } from '$env/static/private'
import { createRefreshToken, createAccessToken } from '$lib/server/services/token'
import type { JWT, User } from '$lib/utils/types'
import jwt from 'jsonwebtoken';

connectToDB().then(() => console.log("Connected to DB")).catch(err => console.log(err));

export async function handle({ event, resolve }) {
    // create auth middleware using accessToken. Note: accessToken is in locals i.e. event.locals.accessToken and refresh token is in cookies i.e. event.cookies.refreshToken
    const accessToken = event.cookies.get('accessToken');
    const refreshToken = event.cookies.get('refreshToken');

    console.log(`accessToken: ${accessToken}, refreshToken: ${refreshToken}`);

    type payload = JWT.Payload & User;

    if (!accessToken && refreshToken) {
        try {
            const decodedRefresh = <payload>jwt.verify(refreshToken, REFRESH_JWT_SECRET);

            event.locals.accessToken = createAccessToken(decodedRefresh.id, decodedRefresh.username, decodedRefresh.email);

            event.cookies.set('accessToken', event.locals.accessToken, {
                path: '/',
                httpOnly: true,
                sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 15, // 15 minutes
            });


            event.locals.user = { id: decodedRefresh.id, username: decodedRefresh.username, email: decodedRefresh.email };
            // Optionally set the new access token in a HttpOnly cookie or header
        } catch (err) {
            // Refresh token is invalid, handle accordingly
            // For example, redirect to login or clear the refresh token
        }
    }

    if (accessToken) {
        try {
            // Verify the (new or existing) access token
            const decoded = <payload>jwt.verify(accessToken, ACCESS_JWT_SECRET);
            console.log(`Decoded access: `, decoded);

            event.locals.user = { id: decoded.id, username: decoded.username, email: decoded.email };
        } catch (err) {
            // Access token is invalid, handle accordingly
            // Redirect to login or similar action
        }
    }

    return await resolve(event);
}