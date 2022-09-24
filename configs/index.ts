import {strings} from "../helpers";

const rootPath = process.cwd();
import * as dotEnvConfig from 'dotenv-flow';

dotEnvConfig.config({path: `${rootPath}/envs`});
import './logger-config';

interface dbConfig {
    url: string;
}

interface mailOptionsConfig {
    host: string;
    port: number;
    secure: boolean;
    tls: {
        rejectUnauthorized: boolean,
    }
    auth: {
        user: string,
        pass: string,
    }
}

export const db: dbConfig = {
    url: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
};
export const port: string = process.env.PORT;
export const jwtSecret: string = `${process.env.JWT_SECRET}`;
export const files: string = `${rootPath}/files`;
export const uploads: string = `${rootPath}/uploads`;
export const mailOptions: mailOptionsConfig = {
    host: process.env.SMTP_HOST,
    // port: process.env.SMTP_PORT, // 587, 465
    port: +process.env.SMTP_PORT || 587,  // 587, 465
    secure: true,
    tls: {
        rejectUnauthorized: false,
    },
    auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.EMAIL_PASS}`,
    },
};

