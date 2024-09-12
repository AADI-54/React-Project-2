import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title";
import ProductItem from "./ProductItem";

const Latestcollection = () => {
    const {products} = useContext(ShopContext);
    const [Latestproduct,setLatestProduct] = useState([]);

    useEffect(() => {
      setLatestProduct(products.slice(3, 13));
    }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          sint natus, sapiente et fugiat accusantium recusandae quasi optio quam
          sed! Cumque accusantium, reprehenderit consequatur similique eaque
          aliquid rem velit ex.
        </p>
      </div>
      {/** rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6 max-w-full md:max-w-2xl lg:max-w-7xl">
        {Latestproduct.map((item,index) => {
          return (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Latestcollection