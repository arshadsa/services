import React, { useEffect, useState } from 'react';
import Services from '../../Pages/Shared/Services/Services';

const ServicesComponent = () => {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((data) => data.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    fetch("categories.json")
      .then((data) => data.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="container">
        {categories.map((category) => (
          <Services
            key={category.id}
            category={category?.title}
            services={services}
          ></Services>
        ))}
      </div>
  );
};

export default ServicesComponent;