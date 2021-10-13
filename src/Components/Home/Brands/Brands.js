import React, { useEffect, useState } from "react";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("/public/Brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div>
      <h2>This is fucking Brands page</h2>
      {brands.length}
    </div>
  );
};

export default Brands;
