import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoFormComponent from "../../components/TodoForm";

configure({ adapter: new Adapter() });
const addTodo = jest.fn();
const prevent = jest.fn();

describe("TodoForm component", () => {
  it("llamar a addTodo cuando el formulario tiene un valor", () => {
    const wrapper = shallow(<TodoFormComponent {...{ addTodo }} />);
    wrapper
      .find("input")
      .simulate("change", { target: { value: "mi nuevo todo!" } });

    wrapper.find("form").simulate("submit", { preventDefault: prevent });
    expect(addTodo.mock.calls).toEqual([["mi nuevo todo!"]]);
    expect(prevent.mock.calls).toEqual([[]]);
    //console.log(addTodo.mock.calls);
  });

  it("llamar a addTodo desde el boton", () => {
    const wrapper = shallow(<TodoFormComponent {...{ addTodo }} />);
    wrapper
      .find("input")
      .simulate("change", { target: { value: "mi nuevo todo!" } });

    wrapper.find("button").simulate("click", { preventDefault: prevent });
    expect(addTodo.mock.calls).toEqual([["mi nuevo todo!"]]);
    expect(prevent.mock.calls).toEqual([[]]);
    // console.log(addTodo.mock.calls);
  });
});
