import React from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  Easing,
  Dimensions,
  StyleSheet
} from 'react-native';


export default class App extends React.Component {
  constructor() {
    super()
    this.animateValue = new Animated.Value(0);
  }
  press = () => {
    this.animate();
  }

  animate = () => {
    Animated.timing(this.animateValue, {
      toValue: 50,
      duration: 4000,
      easing: Easing.easeOutQuad
    }).start()
  }

  render() {
    const imgStyle = {
      width: 150,
      height: 250,
      backgroundColor:'pink'

    }
    return (
      <Animated.View
      style={styles.container}
      >
      <Animated.View style={{transform:[{translateY:this.animateValue}]}}>
        <TouchableOpacity
          onPress={this.press}
          style={[imgStyle,{backgroundColor:'pink'},{right:50}]}        
          >
          <Animated.Image
            style={[imgStyle,{resizeMode:'contain'}]}
            source={{ uri: 'https://i.pinimg.com/736x/bd/7c/95/bd7c9566f984f16a696a750711fcb8c0--rocket-ships-space-ship.jpg' }} />
        </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    height:Dimensions.get('window').height,
    width:Dimensions.get('window').width,
    justifyContent:'flex-end',
    backgroundColor:'blue',
  }
})