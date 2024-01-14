import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

schema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        return next();
    } catch (error) {
        return next(<Error>error);
    }
});


schema.method('comparePassword', async function (password: string) {
    return bcrypt.compare(password, this.password);
});

export default model('user', schema);