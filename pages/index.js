import React from "react";
import { Layout, Hero, Button } from "@components";
import { ChooseUs, Collection, HowWorks } from "@components/home";
import Link from "next/link";

import { PRODUCTS } from "@src/data/products";
import { WHY_US } from "@src/data/whyUs";

const Home = () => {
  return (
    <Layout>
      {/* Hero section */}
      <Hero
        image="/assets/images/coffie.png"
        title="Great coffee
        made simple."
        description="
        Start your mornings with the world’s best coffees. Try our
        expertly curated artisan coffees from our best roasters delivered
        directly to your door, at your schedule.
      "
        color="light"
      >
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
