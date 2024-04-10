import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const results = await Promise.all([uploadPhoto(), createUser()]);
    return {
      photo: results[0],
      user: results[1],
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
