import React from "react";
import Layout from "../view/layouts/mainLayout";
import SEO from "../view/components/seo";

const ex = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlC7q8pRgNfdJde8imb69cVZ3Atx3AvoMMmA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuDq93da95O2JKT21ZELUQMREGpkK3c-avyA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROsZ9E7f9cFS5Dkw0A3Lyxo-dKhEgTeGPCYw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeMAY3Z-205kWN7XF5u2F8GdNrSs6-RvcMOw&usqp=CAU",
  "https://lyon.citycrunch.fr/wp-content/uploads/sites/3/2020/01/Food_Traboule_Lyon_3.jpg",
  "https://lh3.googleusercontent.com/proxy/jf_-3BDud4UWG14P-XjxGmEpw6XF8J-Zpg6esuSm-RP8Bh7fAdSSgkgSZCQRuEgGwqoRcPVjFtxAhBzRWuMOehRt98nANaXKQezQO6uQ96y3vgMfF5Tt5-xBBGDQlUZ6cIC0YfvFjmyyYYvY3w",
  "https://www.lyonresto.com/contenu/photo_restaurant/0_photo_automatique_big/victoire_et_thomas/008_2018_-_Victoire_et_Thomas_00001.jpg",
];

const getIcons = () => {
  const elm = [];
  for (let i = 0; i < 30; i++) {
    const randmonNbr = Math.floor(Math.random() * 7);
    const randomLink = ex[randmonNbr];
    elm.push(<img className="w-64 mx-4 my-4" key={i} src={randomLink}></img>);
  }

  return elm;
};

const IndexPage = (props) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div
        className="mx-6 flex flex-row flex-wrap items-center"
        style={{ height: "max-content" }}
      >
        {getIcons()}
      </div>
    </Layout>
  );
};

export default IndexPage;
