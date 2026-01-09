// Endpoints

import Product from "@/models/Product";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res:NextApiResponse){
    const products: Product[] = [
        {
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
   
  },
  {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
      "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
   
  },
  {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
   
  },
  {
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
     "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
    
  }
    ]

    // write to code to connect to database
    if(req.method === 'GET') {
        // read from database table
        res.status(200).json(products);
    } else if (req.method === 'POST') {
        // write to database table
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}