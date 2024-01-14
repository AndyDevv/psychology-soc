import { connect } from 'mongoose';
import { DB_USERNAME, DB_PASSWORD, DB_DEV_HOST, DB_PROD_HOST, DB_PORT, DB_NAME } from '$env/static/private';

const isProduction = process.env.NODE_ENV === 'production';
const uri = `mongodb://${DB_USERNAME}:${encodeURIComponent(DB_PASSWORD)}@${isProduction ? DB_PROD_HOST : DB_DEV_HOST}:${DB_PORT}/${DB_NAME}`;

export function connectToDB() {
    return connect(uri);
};
