import React, {
    Component
  } from 'react';
  
  import {
    StyleSheet,
    TouchableOpacity
  } from 'react-native';

import {
    ImageBackground,
    ListView,
    Tile,
    Title,
    Subtitle,
    Overlay,
    Screen
  } from '@shoutem/ui';



export default class ActionList extends Component {

    getRestaurants(actionType) {
      if (actionType == 'restaurants'){
        return require(`./../assets/restaurants.json`);
      }
    }  // defines the UI of each row in the list
    renderRow(restaurant) {
      return (
        <TouchableOpacity>
        <ImageBackground styleName="large-banner" source={{ uri: restaurant.image &&
          restaurant.image.url ? restaurant.image.url : undefined  }}>
          <Tile>
            <Title>{restaurant.name}</Title>
            <Subtitle>{restaurant.address}</Subtitle>
          </Tile>
        </ImageBackground>
        </TouchableOpacity>
      );
    }
    render() {
        return (
          <Screen>
            <ListView
              data={this.getRestaurants(this.props.actionType)}
              renderRow={restaurant => this.renderRow(restaurant)}
            />
          </Screen>
        );
      }
}