import React, { useState } from "react";
import HomeNavBar from "../../Components/HomeNavBar";
import "../../Pages/Rules/Rules.css";

import RulesCard from "../../Components/RulesCard";
import FaqCard from "../../Components/FaqCard";
import HomeFootIcon from "../../Components/HomeFootIcon";
import RulesMobile from "../../Components/RulesMobile";

const Rules = () => {
  const [showRules, setShowRules] = useState(true);

  const toggleContent = () => {
    setShowRules(!showRules);
  };
  return (
    <>
      <HomeNavBar />
      <RulesMobile />

      <RulesCard isVisible={true} />
      <FaqCard isVisible={true} />
      <HomeFootIcon />
    </>
  );
};

export default Rules;
