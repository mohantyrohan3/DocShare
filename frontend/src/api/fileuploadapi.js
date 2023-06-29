import axios from 'axios';

export const fileuploadApi = async (inputData) => {
  try {
    const options = {
        method: 'POST',
        url: 'https://docshare.rohankm.online/api/file/upload',
        headers: {
          'content-type':'multipart/form-data',
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