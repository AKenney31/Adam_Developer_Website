import dotenv from 'dotenv'

dotenv.config();
const environment = {
    PORT: process.env.PORT,
    CONNECTION_URL: process.env.CONNECTION_URL,
    secretOrKey: process.env.secretOrKey
};

export default environment;