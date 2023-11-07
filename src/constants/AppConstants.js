const prod = {
    url: {
        API_URL: 'tortiback.azurewebsites.net'
    }
};

const dev = {
  url: {
    API_URL: 'tortiback.azurewebsites.net'
  }   
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;