import axios from 'axios';

export const loginApi = async (inputData) => {
  try {
    const options = {
        method: 'POST',
        url: 'https://docshare.rohankm.online/api/login',
        headers: {
          'content-type': 'application/json',
        },
        withCredentials: true,
        data:inputData
    };


    let response = await axios(options);
    return response


  } catch (error) {
    console.error(error.response.data); 
  }
};