export interface productResponse {
  id:        number;
  name:      string;
  price:     number;
  image:     string;
  props:     string[];
  category:  string;
  quantity:  number;
  createdAt: Date;
}

export interface Product {
  name:     string;
  price:    number;
  image:    string;
  props:    any[];
  category: string;
  quantity: number;
}

export interface createResponse {
  message: string;
  data:    productResponse;
}
export interface updateResponse {
  message: string;
  data:    productResponse;
  id:      string;
}


