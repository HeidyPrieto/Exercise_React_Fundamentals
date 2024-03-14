import { useState } from 'react';
import ProductTable from "./ProductTable.jsx";
import SearchBar from "./SearchBar.jsx";

function FilterableProductTable({ products }) {
    const [showStockedOnly, setShowStockedOnly] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleStockChange = (showStocked) => {
        setShowStockedOnly(showStocked);
        if (showStocked) {
            const filtered = products.filter(product => product.stocked);
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    };

    return (
        <>
            <SearchBar onStockChange={handleStockChange} />
            <ProductTable products={filteredProducts} />
        </>
    );
}

export default FilterableProductTable;