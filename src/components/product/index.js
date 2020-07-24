import React from 'react';
import BuyProductSlid from './buyProductSlide';
import BuyProductSided from './buyProductSided';
// import BuyProductSecSlid from './buyProductSecSlide';
import ProductPreview from './product-preview';


function App() {
  return (
    <div className="App">
      <BuyProductSlid />
      <BuyProductSided />
      {/* <BuyProductSecSlid /> */}
      <ProductPreview />

    </div>
  );
}

export default App;