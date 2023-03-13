import { cleanup, fireEvent, render } from "@testing-library/react";
import { useState } from "react";
import { Rifm } from "rifm";
import { afterEach, expect, test } from "vitest";
import { getRifmProps } from "../rifm";

const typeInInput = (input: HTMLElement, value: string) =>
  fireEvent.input(input, { target: { value } });

const clearInput = (input: HTMLElement) => fireEvent.input(input, { target: { value: "" } });

afterEach(() => {
  cleanup();
});

test('it respects accept: "alpha" param', async () => {
  const props = getRifmProps({
    accept: "alpha",
    charMap: { 2: " ", 4: "/" },
    maxLength: 6,
  });

  const Test = () => {
    const [value, setValue] = useState("");

    return (
      <Rifm {...props} value={value} onChange={setValue}>
        {({ value, onChange }) => <input type="text" value={value} onChange={onChange} />}
      </Rifm>
    );
  };

  const utils = render(<Test />);

  const input = await utils.findByRole("textbox");

  typeInInput(input, "test");
  expect(input).toHaveValue("te st/");
  clearInput(input);

  typeInInput(input, "1234");
  expect(input).toHaveValue("");
  clearInput(input);

  typeInInput(input, "te34");
  expect(input).toHaveValue("te ");
  clearInput(input);
});

test('it respects accept: "numeric" param', async () => {
  const props = getRifmProps({
    accept: "numeric",
    charMap: { 2: " ", 4: "/" },
    maxLength: 6,
  });

  const Test = () => {
    const [value, setValue] = useState("");

    return (
      <Rifm {...props} value={value} onChange={setValue}>
        {({ value, onChange }) => <input type="text" value={value} onChange={onChange} />}
      </Rifm>
    );
  };

  const utils = render(<Test />);

  const input = await utils.findByRole("textbox");

  typeInInput(input, "test");
  expect(input).toHaveValue("");
  clearInput(input);

  typeInInput(input, "1234");
  expect(input).toHaveValue("12 34/");
  clearInput(input);

  typeInInput(input, "te34");
  expect(input).toHaveValue("34 ");
  clearInput(input);
});

test('it respects accept: "alphanumeric" param', async () => {
  const props = getRifmProps({
    accept: "alphanumeric",
    charMap: { 2: " ", 4: "/" },
    maxLength: 6,
  });

  const Test = () => {
    const [value, setValue] = useState("");

    return (
      <Rifm {...props} value={value} onChange={setValue}>
        {({ value, onChange }) => <input type="text" value={value} onChange={onChange} />}
      </Rifm>
    );
  };

  const utils = render(<Test />);

  const input = await utils.findByRole("textbox");

  typeInInput(input, "test");
  expect(input).toHaveValue("te st/");
  clearInput(input);

  typeInInput(input, "1234");
  expect(input).toHaveValue("12 34/");
  clearInput(input);

  typeInInput(input, "te34");
  expect(input).toHaveValue("te 34/");
  clearInput(input);

  typeInInput(input, "t__4");
  expect(input).toHaveValue("t4 ");
  clearInput(input);
});

test("it appends characters at given indexes", async () => {
  const props = getRifmProps({
    accept: "numeric",
    charMap: { 2: " ", 4: "/" },
    maxLength: 6,
  });

  const Test = () => {
    const [value, setValue] = useState("");

    return (
      <Rifm {...props} value={value} onChange={setValue}>
        {({ value, onChange }) => <input type="text" value={value} onChange={onChange} />}
      </Rifm>
    );
  };

  const utils = render(<Test />);

  const input = await utils.findByRole("textbox");

  typeInInput(input, "12");
  expect(input).toHaveValue("12 ");
  clearInput(input);

  typeInInput(input, "1234");
  expect(input).toHaveValue("12 34/");
  clearInput(input);

  typeInInput(input, "123456");
  expect(input).toHaveValue("12 34/56");
  clearInput(input);
});

test("it truncates the formatted text to the maximum length", async () => {
  const props = getRifmProps({
    accept: "numeric",
    charMap: { 2: " ", 4: "/" },
    maxLength: 6,
  });

  const Test = () => {
    const [value, setValue] = useState("");

    return (
      <Rifm {...props} value={value} onChange={setValue}>
        {({ value, onChange }) => <input type="text" value={value} onChange={onChange} />}
      </Rifm>
    );
  };

  const utils = render(<Test />);

  const input = await utils.findByRole("textbox");

  typeInInput(input, "1234");
  expect(input).toHaveValue("12 34/");
  clearInput(input);

  typeInInput(input, "123456");
  expect(input).toHaveValue("12 34/56");
  clearInput(input);

  typeInInput(input, "12345678");
  expect(input).toHaveValue("12 34/56");
  clearInput(input);
});
