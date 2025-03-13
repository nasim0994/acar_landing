/* eslint-disable no-console */
import mongoose from 'mongoose';
import config from './config';
import app from './app';
import seedSuperAdmin from './DB';

async function main() {
  try {
    await mongoose.connect(config.DB_URL as string);
    console.log('database connect success 🚀');
    seedSuperAdmin();

    app.listen(config.PORT, () => {
      console.log(`server is running on port ${config.PORT} 🏃‍♂️‍➡️`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
