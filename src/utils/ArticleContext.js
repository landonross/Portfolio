import React from "react";

const ArticleContext = React.createContext([
  {
    name: "Barkle",
    info: "Page for your dogs",
    image: "../assets/barkle.png",
    link: "barkle"
  },
  {
    name: "Bingeterest",
    info: "Page for movies",
    image: "../assets/bingeterest.png",
    link: "bingeterest"
  },
  {
    name: "",
    info: "",
    image: "",
    link: ""
  },
  {
    name: "",
    info: "",
    image: "",
    link: ""
  },
  {
    name: "",
    info: "",
    image: "",
    link: ""
  }
]);

export default ArticleContext;
