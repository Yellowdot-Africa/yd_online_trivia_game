import React from "react";
import { ShareSocial, ShareButton } from "react-share-social";

const ShareSocialButtons = () => {
  const shareOptions = {
    title: "Ydot-Trivia",
    url: "https://www.ydot-trivia.com",
  };

  return (
    <ShareSocial
      shareOptions={shareOptions}
      buttonsStyle={{ display: "flex", justifyContent: "center" }}
    >
      <ShareButton network="facebook" />
      <ShareButton network="twitter" />
      <ShareButton network="linkedin" />
      <ShareButton network="instagram" />
    </ShareSocial>
  );
};

export default ShareSocialButtons;
