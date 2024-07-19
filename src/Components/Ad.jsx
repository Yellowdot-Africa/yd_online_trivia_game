import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAds } from "../features/Ad/adSlice";
import { Circles } from 'react-loader-spinner'; 

import "../Styles/Ad.css";

const Ad = () => {
  const dispatch = useDispatch();
  const ads = useSelector((state) => state.ads.ads);
  const adStatus = useSelector((state) => state.ads.status);
  const error = useSelector((state) => state.ads.error);
  const token = useSelector((state) => state.auth.jwt);

  useEffect(() => {
    if (adStatus === "idle") {
      dispatch(fetchAds());
    }
  }, [adStatus, dispatch, token]);

  let content;

  if (adStatus === "loading") {
    content = <div className="spinner-container">
    <Circles color="#D9D9D9" height={30} width={30} />
  </div>
  } else if (adStatus === "succeeded") {
    content = ads.map((ad, index) => {
      const imageUrl = `data:image/jpeg;base64,${ad.image}`;
      return (
        <a
          key={index}
          href={ad.redirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="advert"
        >
          <img src={imageUrl} alt={`Ad ${index}`} />
        </a>
      );
    });
  } else if (adStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <>
      <div className="advert-container">{content}</div>
    </>
  );
};

export default Ad;






