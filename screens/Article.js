import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import * as theme from '../theme';
import Octicons from 'react-native-vector-icons/Octicons';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    // backgroundColor: 'transparent',
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  back: {
    width: theme.sizes.base * 3,
    height: theme.sizes.base * 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  content: {
    // backgroundColor: theme.colors.active,
    // borderTopLeftRadius: theme.sizes.border,
    // borderTopRightRadius: theme.sizes.border,
  },
  contentHeader: {
    backgroundColor: 'transparent',
    padding: theme.sizes.padding,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: theme.sizes.radius * 2,
    borderTopRightRadius: theme.sizes.radius * 2,
    marginTop: -theme.sizes.padding / 2,
  },
  avatar: {
    position: 'absolute',
    top: -theme.sizes.margin,
    right: theme.sizes.margin,
    width: theme.sizes.padding * 2,
    height: theme.sizes.padding * 2,
    borderRadius: theme.sizes.padding,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  dotsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 36,
    right: 0,
    left: 0
  },
  dots: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
    backgroundColor: theme.colors.gray,
  },
  title: {
    fontSize: theme.sizes.font * 2,
    fontWeight: 'bold',
    marginTop: 0,
  },
  location: {
    marginTop: 0,
    color:theme.colors.active,
    fontSize: theme.sizes.font * 1,
    marginLeft: 5,
    marginBottom: 15,
    paddingRight: 40,
    fontWeight: 'bold',
  },
  difficulty: {
    marginTop: -15,
    marginLeft: 5,
    color:theme.colors.active,
  },
  description: {
    fontSize: theme.sizes.font * 1,
    lineHeight: theme.sizes.font * 2,
    color: theme.colors.black
  },
  viewBorder: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    paddingBottom: 20,
    paddingTop: 5,
  },
  stat:
  {
    fontSize: theme.sizes.font * 2,
    fontWeight: 'bold',
    marginLeft: -5,
    marginTop: 20,
  },
  stat2:
  {
    fontSize: theme.sizes.font * 0.7,
    fontWeight: 'bold',
    color: '#139BEC',
    textAlign: 'center',
  },
  price:{
    fontSize: theme.sizes.font * 3,
    fontWeight: 'bold',
  }
});

class Article extends Component {
  scrollX = new Animated.Value(0);

  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <View style={[styles.flex, styles.row, styles.header]}>
          
        </View>
      ),
      headerTransparent: true,
    }
  }

  renderDots = () => {
    const { navigation } = this.props;
    const article = navigation.getParam('article');
    const dotPosition = Animated.divide(this.scrollX, width);

    return (
      <View style={[ styles.flex, styles.row, styles.dotsContainer ]}>
        {article.images.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp'
          });
          return (
            <Animated.View
              key={`step-${item}-${index}`}
              style={[styles.dots, { opacity }]}
            />
          )
        })}
      </View>
    )
  }

  renderRatings = (rating) => {
    const stars = new Array(5).fill(0);
    return (
      stars.map((_, index) => {
        const activeStar = Math.floor(rating) >= (index + 1);
        return (
          <FontAwesome
            name="star"
            key={`star-${index}`}
            size={theme.sizes.font}
            color={theme.colors[activeStar ? 'active' : 'gray']}
            style={{ marginRight: 4 }}
          />
        )
      })
    )
  }

  render() {
    const { navigation } = this.props;
    const article = navigation.getParam('article');

    return (
      <ScrollView>
      <View style={styles.flex}>
        <View style={[styles.flex]}>
          <ScrollView
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            scrollEventThrottle={16}
            snapToAlignment="center"
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX } } }])}
          >
            {
              article.images.map((img, index) => 
                <Image
                  key={`${index}-${img}`}
                  source={{ uri: img }}
                  resizeMode='cover'
                  style={{ width, height: width }}
                />
              )
            }
            
          </ScrollView>
          {this.renderDots()}
        </View>
        <View style={[styles.flex, styles.content]}>
          <View style={[styles.flex, styles.contentHeader]}>
          <View style={[
              styles.row,
            ]}>
              <Octicons
                  name="calendar"
                  size={theme.sizes.font * 1.2}
                  color={theme.colors.black}
              />
              <Text style={styles.location}>
                  {article.traveldays}
              </Text>
              <Octicons
                  name="location"
                  size={theme.sizes.font * 1.2}
                  color={theme.colors.black}
              />
              <Text style={styles.location}>
                  {article.location}
              </Text>
          </View>
            <Text style={styles.title}>{article.title}</Text>
            <View style={[
              styles.row,
              { alignItems: 'center', marginVertical: -3,}
            ]}>
              <Text style={styles.difficulty}>
                 {article.reviews}
              </Text>
              
            </View>

            <View style = {styles.viewBorder}>
              <Text style={styles.description}>
                {article.description}
              </Text>
            </View>
            <Text style={styles.title}>Instructions</Text>
            <Text>Starting from Manila, Philippines</Text>
            <View style = {styles.row}>
              <View style ={{marginLeft: 0}}>
                <Text style={styles.stat}> {article.route} </Text>
                <Text style={styles.stat2}> VEHICLE </Text>
              </View>
              <View style ={{marginLeft: 50}}>
                <Text style={styles.stat}> {article.traveldays} </Text>
                <Text style={styles.stat2}> TIME </Text>
              </View>
              <View style ={{marginLeft: 40}}>
                <Text style={styles.stat}> {article.expenses} </Text>
                <Text style={styles.stat2}> EXPENSES </Text>
              </View>
            </View>
            
            <View style = {styles.viewBorder}>

            </View>
          </View>
        </View>
      </View>
      </ScrollView>
    )
  }
}

export default Article;
