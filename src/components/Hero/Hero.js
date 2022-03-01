import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hai!
        <br />
        I'm Shamir
      </SectionTitle>
      <SectionText>I manage and develope softwares</SectionText>
      <Button onClick={() => (window.location = "#projects")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
