import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, Animated, Image } from 'react-native';

import NumberPadContext from './NumberPadContext';
import { DELETE_ICON } from './images';

import styles from './styles';

const inputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0'];

export default class Input extends Component {
  static contextType = NumberPadContext;

  static propTypes = {
    height: PropTypes.number,
    position: PropTypes.oneOf(['relative', 'absolute']).isRequired,
    style: PropTypes.object,
    backspaceIcon: PropTypes.element,
    hideIcon: PropTypes.element,
    onWillHide: PropTypes.func,
    onDidHide: PropTypes.func,
    onWillShow: PropTypes.func,
    onDidShow: PropTypes.func,
    textStyle: PropTypes.object,
  };

  static defaultProps = {
    height: 300,
    position: 'absolute',
    textStyle: styles.buttonText,
  };

  static iconStyle = {
    color: styles.buttonText.color || '#888',
    size: styles.buttonText.fontSize || 36,
  };

  constructor(props) {
    super(props);

    this.animation = new Animated.Value(0);

    this.state = {
      buttonPressed: false,
    };

  }

  show = () => {
    if (this.props.onWillShow) this.props.onWillShow();
    Animated.timing(this.animation, {
      duration: 200,
      toValue: this.props.height,
      useNativeDriver: true,
    }).start(this.props.onDidShow);
  };

  hide = () => {
    if (this.props.onWillHide) this.props.onWillHide();
    Animated.timing(this.animation, {
      duration: 200,
      toValue: 0,
      useNativeDriver: true,
    }).start(this.props.onDidHide);
  };

  componentDidMount() {
    this.context.registerInput(this);
    this.context.setHeight(this.props.height);
  }

  getStyle = () => {
    const interpolation = this.animation.interpolate({
      inputRange: [0, this.props.height],
      outputRange: [this.props.height, 0],
    });
    return this.props.position === 'absolute'
      ? {
          position: 'absolute',
          bottom: 0,
          height: this.props.height,
          transform: [
            {
              translateY: interpolation,
            },
          ],
        }
      : {
          height: interpolation,
        };
  };

  render() {
    const textStyle = [
      this.props.textStyle,
    ];
    return (
        <View style={styles.input}>
          <View style={styles.pad}>
            {inputs.map((value, index) => {
              return (
                  <TouchableOpacity
                    key={index}
                    // style={index == this.state.buttonPressed? styles.buttonPressed: styles.button}
                    style={styles.button}
                    onPress={() => {this.context.onInputEvent(value); this.setState({buttonPressed: index})}}
                  >
                  {/* <View style={index == this.state.buttonPressed? styles.buttonPressed: styles.button}>
                    <View style={index == this.state.buttonPressed? styles.buttonInnerPressed: null}> */}
                      <Text style={textStyle}>{value}</Text>
                    {/* </View>
                  </View> */}

                  </TouchableOpacity>
              );
            })}
            <TouchableOpacity
              key="backspace"
              style={styles.button}
              onPress={() => this.context.onInputEvent('backspace')}
            >
              {this.props.backspaceIcon ? (
                this.props.backspaceIcon
              ) : (
                <Image source={DELETE_ICON}/> 

              )}
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}
