export type Order = {
  message: string;
  order: {
    createdAt: number;
    customerId: number;
    id: number;
    orderItems: {
      id: number;
      productId: number;
      quantity: number;
      orderId: number;
    };
  };
};

export type Product = {
  name: string;
  price: number;
  id: number;
  picture: string;
};

export type Quantity = {
  productName: string;
  quantity: number;
  id: number;
  price: number;
};

export type RootStackParamList = {
  Homescreen: undefined;
  Menu: undefined;
  Review: undefined;
  Ordered: undefined;
};

export type User = {
  name: string;
};
