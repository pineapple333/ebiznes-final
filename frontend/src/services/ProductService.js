import axios from 'axios';

class ProductService {

  async getProducts() {
    return axios.get('http://localhost:12345/Products')
        .then(response => {
          return response.data;
        })
  }
}

export default new ProductService();
