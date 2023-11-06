import React from "react";
import { Product, FooterBanner, HeroBanner} from "../components";
import {client} from '../LIB/client';

 const Home = ({products, bannerData}) => {
  return (
    <>
      <div>
      <HeroBanner HeroBanner={bannerData.length && bannerData[0]} />
      </div>
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product, index) => (
          <div key={index}>{product.name}</div>
        ))}
      </div>
      <div>
      <FooterBanner />
      </div>
    </>
  );
};

export default Home
export const getServerSideProps = async () => {
  const query = '* [_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '* [_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {products, bannerData}
  }

}
