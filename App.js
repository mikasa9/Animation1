import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Dimensions,
  Easing,
  TouchableOpacity
} from 'react-native'


export default class App extends React.Component {
  componentWillMount() {
    this.translateY = new Animated.Value(250);
  }

  animate = () => {
    this.translateY.setValue(250);
    Animated.timing(this.translateY, {
      toValue: 0,
      duration: 4000,
      easing:Easing.cubic
    }).start()
  }

  render() {
    return (
      <View>
        <Animated.View
          style={[{ transform: [{ translateY: this.translateY }] },{top:this.translateY},styles.viewStyle]}

        >
          <TouchableOpacity
           onPress={() => this.animate()}
           style={styles.viewStyle}
          >
            <Animated.Image
              style={[styles.viewStyle,{resizeMode:'contain'}]}
              source={{ uri: 'https://cdn.pixabay.com/photo/2016/05/25/13/33/ship-1414820_960_720.png' }}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>
    )
  }

}
const styles=StyleSheet.create({
  viewStyle:{
    width: 130,
    height: 200
  }
})