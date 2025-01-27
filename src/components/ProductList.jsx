import ProductCard from "./ProductCard";
import Adidas from "../assets/Adidas.png";
import NewBalance from "../assets/NewBalance.png";
import NikeAir from "../assets/NikeAir.png";
import Puma from "../assets/Puma.png";

function ProductList() {
    const products = [
        { 
            id: 1,
            image: NikeAir,
            name: "Nike Air Max", 
            price: 120, 
            available: true
        },
        { 
            id: 2, 
            image: Adidas,
            name: "Adidas UltraBoost", 
            price: 180, 
            available: false 
        },
        { 
            id: 3, 
            image: Puma,
            name: "Puma RS-X", 
            price: 110, 
            available: true 
        },
        {
            id: 4, 
            image: NewBalance,
            name: "New Balance 574", 
            price: 100, 
            available: true 
        },
      ];
      return (
        <div className="grid grid-cols-4 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
      );  
};

export default ProductList;