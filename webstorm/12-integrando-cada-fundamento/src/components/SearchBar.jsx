
import { useState } from 'react';

function SearchBar({ onStockChange }) {
    const [showStockedOnly, setShowStockedOnly] = useState(false);

    const handleCheckboxChange = (event) => {
        const checked = event.target.checked;
        setShowStockedOnly(checked);
        onStockChange(checked);
    };

    return (
        <form>
            <input type="text" placeholder="Search product.." />
            <label>
                <input
                    type="checkbox"
                    checked={showStockedOnly}
                    onChange={handleCheckboxChange}
                />
                {' '}
                only show products in stock
            </label>
        </form>
    );
}

export default SearchBar;