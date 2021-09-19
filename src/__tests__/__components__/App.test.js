import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "../../App";

configure({ adapter: new Adapter() });

const wrapper = mount(<App />);
// evento que espia preventeDefault
const prevent = jest.fn();

describe("Render App", () => {
  it("render llenando formulario", () => {
    wrapper.find("input").simulate("change", { target: { value: "mi todo!" } });
    wrapper.find("form").simulate("submit", { preventDefault: prevent });
    wrapper.find(".todo");
    expect(wrapper.find(".todo").length).toEqual(4);
    expect(prevent.mock.calls).toEqual([[]]);
    //console.log(prevent.mock.calls);
  });
});
