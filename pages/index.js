import React from "react";
import { Layout, Hero, Heading, Button } from "@components";
import { ChooseUs, Collection, HowWorks } from "@components/home";
import Link from "next/link";

import { PRODUCTS } from "@src/data/products";
import { WHY_US } from "@src/data/whyUs";

const Home = () => {
  return (
    <Layout>
      {/* Hero section */}
      <Hero image="/assets/images/coffie.png">
        <Heading.h1 color="light">
          Great coffee <br /> made simple.
        </Heading.h1>
        <p style={{ color: "white", padding: "24px 0" }}>
          Start your mornings with the world’s best coffees. Try our <br />{" "}
          expertly curated artisan coffees from our best roasters <br />{" "}
          delivered directly to your door, at your schedule.
        </p>
        <Link href="/subscribe">
          <Button>Create your plan</Button>
        </Link>
      </Hero>
      {/* Collection */}
      <Collection products={PRODUCTS} />
      <ChooseUs options={WHY_US} />
      <HowWorks />
    </Layout>
  );
};

export default Home;
