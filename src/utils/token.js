export const storeToken = async (token) => {
  try {
    await sessionStorage.setItem('userToken', token);
  } catch (error) {
    console.log('Error storing token:', error);
  }
};

export const getItemFromSessionStorage = async (key) => {
    try {
      const value = await sessionStorage.getItem(key);
      if (value !== null) {
        return value;
      }
    } catch (error) {
      console.log(error);
    }
  };
