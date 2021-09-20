export interface ProductData {
  data: [Product];
}

export interface Product {
  imageUrl: string;
  id: number;
  name: string;
  price: number;
  camera: number;
  memory: number;
  ram: number;
}
