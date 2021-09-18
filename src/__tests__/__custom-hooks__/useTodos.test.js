import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import useTodos from "../../custom-hooks/useTodos";

configure({ adapter: new Adapter() });

const MockComponentHook = (props) => {
  const hook = props.hook();
  return <div {...hook}></div>;
};
const wrapper = shallow(<MockComponentHook hook={useTodos} />);
const getProps = () => wrapper.find("div").props();

describe("custom hook: useTodos", () => {
  it("addTodo", () => {
    //console.log(props);
    getProps().addTodo("Todo 4");
    //console.log(getProps().todos[0]);
    expect(getProps().todos[0]).toEqual({ text: "Todo 4", isCompleted: false });
  });

  it("completeTodo", () => {
    //      //console.log(props);
    getProps().completeTodo(0);
    //console.log(getProps().todos[2]);
    expect(getProps().todos[2]).toEqual({ text: "Todo 3", isCompleted: false });
  });

  it("removeTodo", () => {
    //      //console.log(props);
    getProps().removeTodo(0);
    //      // console.log(props.todos[1]);
    expect(getProps().todos[1]).toEqual({ text: "Todo 3", isCompleted: false });
  });
});
