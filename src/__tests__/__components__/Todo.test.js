import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TodoComponent from "../../components/Todo";

configure({ adapter: new Adapter() });

const todo = { isCompleted: true, text: "lala" };
const i = 5;
const completeTodo = jest.fn();
const removeTodo = jest.fn();

describe("test Todo component", () => {
  it("execute completeTodo Click", () => {
    const wrapper = shallow(
      <TodoComponent
        {...{
          todo,
          i,
          completeTodo,
          removeTodo,
        }}
      />
    );
    wrapper.find("button").at(0).simulate("click");

    expect(completeTodo.mock.calls).toEqual([[5]]);
    expect(removeTodo.mock.calls).toEqual([]);
    //console.log(removeTodo.mock.calls);
  });
  it("execute removeTodo Click", () => {
    const wrapper = shallow(
      <TodoComponent
        {...{
          todo,
          i,
          completeTodo,
          removeTodo,
        }}
      />
    );
    wrapper.find("button").at(1).simulate("click");

    expect(removeTodo.mock.calls).toEqual([[5]]);
    expect(completeTodo.mock.calls).toEqual([]);
    // console.log(removeTodo.mock.calls);
  });
});
