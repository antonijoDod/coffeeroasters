import React from "react";
import { Hero, Layout } from "@components";
import { OurCommitment, Quality } from "@components/aboutUs";

const AboutUs = () => {
  return (
    <Layout>
      <Hero
        title="About Us"
        description="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
        color="light"
        image="/assets/images/about-us.png"
      />
      <OurCommitment />
      <Quality />
    </Layout>
  );
};

export default AboutUs;
