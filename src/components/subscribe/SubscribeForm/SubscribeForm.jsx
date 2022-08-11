import React, { useState } from "react";
import { Field } from "@components/subscribe";
import { RadioOption } from "@components/subscribe";
import styled from "styled-components";
import Button from "@components/Button";

const Summary = styled.div`
  background-color: #2c343e;
  padding: 32px 24px;
  border-radius: 8px;
  color: white;
  font-size: 1.5rem;
  line-height: 1.66;
  font-weight: bold;
  margin-top: 48px;
`;

const Placeholder = styled.div`
  color: ${({ theme }) => theme.colors.darkCyan};
  display: inline;
`;

const FormButton = styled.div`
  text-align: right;
  margin-top: 48px;
`;

const SubscribeForm = () => {
  const [howDrink, setHowDrink] = useState(null);
  const [coffeeType, setCoffeeType] = useState(null);
  const [howMuch, setHowMuch] = useState(null);
  const [grindThem, setGrindThem] = useState(null);
  const [delivery, setDelivery] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} style={{ width: "100%" }}>
      <Field title="How do you drink your coffee?" defaultOpen>
        <RadioOption
          title="Capsule"
          description="Compatible with Nespresso systems and similar brewers"
          name="drink"
          value="Capsule"
          onChange={(e) => setHowDrink(e)}
          state={howDrink}
        />
        <RadioOption
          title="Filter"
          description="Compatible with Nespresso systems and similar brewers"
          name="drink"
          value="Filter"
          onChange={(e) => setHowDrink(e)}
          state={howDrink}
        />
        <RadioOption
          title="Espresso"
          description="Compatible with Nespresso systems and similar brewers"
          name="drink"
          value="Espresso"
          onChange={(e) => setHowDrink(e)}
          state={howDrink}
        />
      </Field>
      <Field title="What type of coffee?" style={{ marginTop: "48px" }}>
        <RadioOption
          title="Single Origin"
          description="Compatible with Nespresso systems and similar brewers"
          name="coffeeType"
          value="Single Origin"
          onChange={(e) => setCoffeeType(e)}
          state={coffeeType}
        />
        <RadioOption
          title="Decaf"
          description="Compatible with Nespresso systems and similar brewers"
          name="coffeeType"
          value="Decaf"
          onChange={(e) => setCoffeeType(e)}
          state={coffeeType}
        />
        <RadioOption
          title="Blended"
          description="Compatible with Nespresso systems and similar brewers"
          name="coffeeType"
          value="Blended"
          onChange={(e) => setCoffeeType(e)}
          state={coffeeType}
        />
      </Field>
      <Field title="How much would you like?" style={{ marginTop: "48px" }}>
        <RadioOption
          title="250g"
          description="Compatible with Nespresso systems and similar brewers"
          name="howMuch"
          value="250g"
          onChange={(e) => setHowMuch(e)}
          state={howMuch}
        />
        <RadioOption
          title="500g"
          description="Compatible with Nespresso systems and similar brewers"
          name="howMuch"
          value="500g"
          onChange={(e) => setHowMuch(e)}
          state={howMuch}
        />
        <RadioOption
          title="1000g"
          description="Compatible with Nespresso systems and similar brewers"
          name="howMuch"
          value="1000g"
          onChange={(e) => setHowMuch(e)}
          state={howMuch}
        />
      </Field>
      <Field
        title="Want us to grind them?"
        style={
          howDrink === "Capsule"
            ? { opacity: 0.5, marginTop: "48px" }
            : { marginTop: "48px" }
        }
      >
        <RadioOption
          title="Wholebean"
          description="Compatible with Nespresso systems and similar brewers"
          name="grindThem"
          value="Wholebean"
          onChange={(e) => setGrindThem(e)}
          state={grindThem}
        />
        <RadioOption
          title="Filter"
          description="Compatible with Nespresso systems and similar brewers"
          name="grindThem"
          value="Filter"
          onChange={(e) => setGrindThem(e)}
          state={grindThem}
        />
        <RadioOption
          title="Cafetiére"
          description="Compatible with Nespresso systems and similar brewers"
          name="grindThem"
          value="Cafetiére"
          onChange={(e) => setGrindThem(e)}
          state={grindThem}
        />
      </Field>
      <Field title="How often should we deliver?" style={{ marginTop: "48px" }}>
        <RadioOption
          title="Every week"
          description="Compatible with Nespresso systems and similar brewers"
          name="delivery"
          value="Every week"
          onChange={(e) => setDelivery(e)}
          state={delivery}
        />
        <RadioOption
          title="Every 2 weeks"
          description="Compatible with Nespresso systems and similar brewers"
          name="delivery"
          value="Every 2 weeks"
          onChange={(e) => setDelivery(e)}
          state={delivery}
        />
        <RadioOption
          title="Every month"
          description="Compatible with Nespresso systems and similar brewers"
          name="delivery"
          value="Every month"
          onChange={(e) => setDelivery(e)}
          state={delivery}
        />
      </Field>
      <Summary>
        “I drink my coffee{" "}
        {howDrink ? (
          howDrink !== "Capsule" ? (
            <>
              as <Placeholder>{howDrink}</Placeholder>
            </>
          ) : (
            <>
              using <Placeholder>{howDrink}</Placeholder>
            </>
          )
        ) : (
          <Placeholder>_____</Placeholder>
        )}
        , with a{" "}
        {coffeeType ? (
          <Placeholder>{coffeeType}</Placeholder>
        ) : (
          <Placeholder>_____</Placeholder>
        )}{" "}
        type of bean.{" "}
        {howMuch ? (
          <Placeholder>{howMuch}</Placeholder>
        ) : (
          <Placeholder>_____</Placeholder>
        )}
        , sent to me{" "}
        {delivery ? (
          <Placeholder>{delivery}</Placeholder>
        ) : (
          <Placeholder>_____</Placeholder>
        )}
        .“
      </Summary>
      <FormButton>
        <Button type="submit">Place order</Button>
      </FormButton>
    </form>
  );
};

export default SubscribeForm;
