import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "MONTHLY",
      price: 900,
      length: 1,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 2000,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF_YEAR",
      price: 5000,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 8000,
      length: 12,
    },
  ];
  return (
    <section className="pricing">
      <h1> FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3> BIRR {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                <p>
                  <Check /> Equipments
                </p>
                <p>
                  <Check /> All Day Free Training with trainer
                </p>
                <p>
                  <Check /> Free Restroom with shower
                </p>
                <p>
                  <Check /> 24/7 nutrion and health support
                </p>
                <p>
                  <Check /> 20 Days Freezing Option
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
