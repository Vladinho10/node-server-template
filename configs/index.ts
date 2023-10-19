import './logger-config';
import * as dotEnvConfig from 'dotenv-flow';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const rootPath = process.cwd();
dotEnvConfig.config({ path: `${rootPath}/envs` });

export const db = {
    uri: process.env.MONGO_URL,
};
export const port: string = process.env.PORT;
export const jwtSecret = `${process.env.JWT_SECRET}`;
export const files = `${rootPath}/files`;
export const uploads = `${rootPath}/uploads`;
export const mailOptions: SMTPTransport.Options = {
    host: process.env.SMTP_HOST,
    port: +process.env.SMTP_PORT,
    tls: {
        rejectUnauthorized: false,
    },
    auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.EMAIL_PASS}`,
    },
};

