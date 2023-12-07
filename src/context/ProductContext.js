import { createContext } from "react";
import { useState } from "react";
const ProductContext = createContext();

function ProductProvider({ children }) {
  const [currentItemsFound, setCurrentItemFound] = useState({
    gender: "",
    category: "",
    tag: "",
  });
  const updateFindProductData = (newProduct) => {
    setCurrentItemFound({ ...currentItemsFound, ...newProduct });
  };
  const valueFindProduct = {
    currentItemsFound,
    updateFindProductData,
  };

  return (
    <ProductContext.Provider value={valueFindProduct}>
      {children}
    </ProductContext.Provider>
  );
}
export { ProductContext, ProductProvider };
