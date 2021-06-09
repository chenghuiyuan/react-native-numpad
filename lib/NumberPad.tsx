import * as React from 'react';

import NumberPadContext from './NumberPadContext';
import type Display from './Display';
import type AvoidingView from './AvoidingView';
import type Input from './Input';

type NumberPadProps = {};

type NumberPadState = {
  display: null | string;
  input: null | Input;
  height: number;
};

export default class NumberPad extends React.Component<
  NumberPadProps,
  NumberPadState
> {
  displays: Record<string, Display>;
  avoidingViews: Record<string, AvoidingView>;

  constructor(props: NumberPadProps) {
    super(props);

    this.displays = {};
    this.avoidingViews = {};

    this.state = {
      display: null, // currently focused display
      input: null, // input component
      height: 0, // height of input component
    };
  }

  focus = (display: Display) => {
    // blur all displays except for this one and do not propagate
    Object.values(this.displays)
      .filter((d) => d !== display)
      .map((d) => d.blur(false));

    // set current display
    this.setState({
      display: (display as any)._reactInternals.key,
    });

    // show input
    if (this.state.input) {
      this.state.input.show();
    }

    // show avoiding views
    Object.values(this.avoidingViews).map((view) => view.show());
  };

  blur = () => {
    const display = this.display();

    // call current display's blur method
    if (display) {
      display.blur(false);
    }

    // set current display to null
    this.setState({
      display: null,
    });

    // hide input
    if (this.state.input) {
      this.state.input.hide();
    }

    // hide avoiding views
    Object.values(this.avoidingViews).map((view) => view.hide());
  };

  registerDisplay = (display: Display) => {
    this.displays[(display as any)._reactInternals.key] = display;
  };

  unregisterDisplay = (display: Display) => {
    delete this.displays[(display as any)._reactInternals.key];
  };

  registerAvoidingView = (view: AvoidingView) => {
    this.avoidingViews[(view as any)._reactInternals.key] = view;
  };

  unregisterAvoidingView = (view: AvoidingView) => {
    delete this.avoidingViews[(view as any)._reactInternals.key];
  };

  registerInput = (input: Input) => {
    this.setState({
      input,
    });
  };

  setHeight = (height: number) => {
    this.setState({
      height,
    });
  };

  onInputEvent = (event: string) => {
    const display = this.display();
    display && display.onInputEvent(event);
  };

  display = () => {
    return this.state.display && this.displays[this.state.display];
  };

  render() {
    return (
      <NumberPadContext.Provider
        value={{
          display: this.state.display,
          input: this.state.input,
          height: this.state.height,
          focus: this.focus,
          blur: this.blur,
          onInputEvent: this.onInputEvent,
          registerDisplay: this.registerDisplay,
          unregisterDisplay: this.unregisterDisplay,
          registerAvoidingView: this.registerAvoidingView,
          unregisterAvoidingView: this.unregisterAvoidingView,
          registerInput: this.registerInput,
          setHeight: this.setHeight,
        }}
      >
        {this.props.children}
      </NumberPadContext.Provider>
    );
  }
}
