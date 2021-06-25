import GenericService from "./GenericService";
class ProductsService extends GenericService {
  constructor() {
    super();
  }
  addProduct = (data) => this.post("matches", data);
  deleteProduct = (_id) => this.delete("matches/" + _id);
  updateProduct = (_id, data) => this.put("matches/" + _id, data);
  getProducts = (page = 1, perPage = 10) =>
    this.get("matches?page=" + page + "&perPage=" + perPage);
  getSingleProduct = (id) => this.get("matches/" + id);
}

let productService = new ProductsService();
export default productService;
