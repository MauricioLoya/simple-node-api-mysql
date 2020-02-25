import env from'dotenv';
env.config();

import Server from './Server';

const main = async () => {
    const app = new Server();
    await app.listen();
};

main();