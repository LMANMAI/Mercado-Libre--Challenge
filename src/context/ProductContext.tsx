import { createContext } from "react";
interface IProductContext {
  product: Product;
  productActive: Product;
  basket: Product[];
  questions: [string];
  setQuestions: Function;
  setProductActive: Function;
  setbasket: Function;
}
import { Product } from "../product/types";
import mock from "../product/mock";

export const ProductContext = createContext<IProductContext>({
  product: mock.product,
  productActive: mock.product,
  basket: [
    {
      id: "",
      site_id: "",
      title: "",
      subtitle: "",
      seller_id: "",
      category_id: "",
      official_store_id: "",
      price: 0,
      base_price: "",
      original_price: "",
      currency_id: "",
      initial_quantity: 0,
      available_quantity: 0,
      sold_quantity: 0,
      sale_terms: [],
      buying_mode: "",
      listing_type_id: "",
      start_time: "",
      stop_time: "",
      condition: "",
      permalink: "",
      thumbnail_id: "",
      thumbnail: "",
      secure_thumbnail: "",
      pictures: [],
      video_id: 0,
      SideShops: [],
      accepts_mercadopago: true,
      non_mercado_pago_payment_methods: [],
      shipping: {},
      international_delivery_mode: "none",
      seller_address: {},
      seller_contact: "",
      location: {},
      coverage_areas: [],
      attributes: [],
      warnings: [],
      listing_source: "",
      variations: [],
      status: "",
      sub_status: [],
      tags: [],
      warranty: "",
      catalog_product_id: "",
      domain_id: "",
      parent_item_id: "",
      differential_pricing: "",
      deal_ids: [],
      automatic_relist: "",
      date_created: "",
      last_updated: "",
      health: "",
      catalog_listing: "",
      channels: [],
    },
  ],
  questions: [""],
  setQuestions: () => {},
  setProductActive: () => {},
  setbasket: () => {},
});
export default ProductContext;
