export interface IBusiness {
  companyName: string;
  phone: string;
  email?: string;
  facebook?: string;
  whatsapp: string;
  address: string;
  shipping: {
    insideDhaka: number;
    outsideDhaka: number;
  };
}
