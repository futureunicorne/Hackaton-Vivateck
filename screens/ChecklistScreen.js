import React from 'react';
import { ScrollView, StyleSheet, Image, View } from 'react-native';

export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Checklists',
      tintColor: '#ffffff',
      backgroundColor: '#00008f',
    },
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>
		<View style={styles.welcomeContainer}>
		  <Image
			source={require('../assets/images/listcheck.png')}
			style={styles.welcomeImage1}
		  />
		</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  welcomeContainer1: {
	alignItems: 'center',
	marginTop: 10,
	marginBottom: 20,
  },
  welcomeImage1: {
	width: 270,
	height: 500,
	marginTop: 3,
	marginLeft: 45,
  },
});
