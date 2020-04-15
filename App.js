import React from "react";
import { StyleSheet, Text, Image, View, SafeAreaView } from "react-native";

import Carousel from "react-native-snap-carousel";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "pic",
        },
        {
          title: "pic",
        },
        {
          title: "pic",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image style={styles.logo} source={require("./assets/images/pic1.jpeg")} />

        <Text style={{ color: "black" }}>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Carousel
            ref={(ref) => (this.Carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={550}
            itemWidth={550}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 400,
    width: 400,
  },
})