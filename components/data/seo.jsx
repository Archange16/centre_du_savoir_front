"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle + " - Centre Professionnel Du Savoir";
  }, []);
};

export default SEO;