import { Product } from "./product.interface"

export interface Order {
    OrderId: number
    OrderDate: string
    UserId: string
    Products: Partial<Product[]>
    PaymentType: string
  }
  
 