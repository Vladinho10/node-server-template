import './logger-config';
import * as dotEnvFlow from 'dotenv-flow';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const rootPath = process.cwd();
dotEnvFlow.config({ path: `${rootPath}/envs` });
export const port: number = +process.env.PORT;

if (Number.isNaN(port)) {
    throw new Error('The port is NaN');
}

export const db = {
    uri: process.env.MONGO_URL,
};

export const nodeEnv = process.env.NODE_ENV;
export const isProd = nodeEnv === 'prod';
export const isStage = nodeEnv === 'stage';
export const isLocal = nodeEnv === 'local';
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

