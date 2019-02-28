import React, { Component } from 'react';
import {
  View, StatusBar, TouchableOpacity, FlatList, ActivityIndicator, Text,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Creators as AlbumsActions } from '../../store/ducks/albums';

import { colors } from '../../styles';
import AlbumItem from '../../components/AlbumItem';
import styles from './styles';

class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Sua Biblioteca',
    headerRight: (
      <TouchableOpacity style={styles.headerRight} onPress={() => navigation.navigate('Search')}>
        <Icon name="search" size={24} color={colors.white} />
      </TouchableOpacity>
    ),
  });

  componentDidMount() {
    this.props.getAlbumsRequest();
  }

  render() {
    const { navigation, albums } = this.props;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.secundary} />
        {!!albums.error && <Text style={{ color: '#fff', fontSize: 20 }}>{albums.error}</Text>}
        {albums.loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <FlatList
            data={albums.data}
            keyExtractor={album => String(album.id)}
            renderItem={({ item }) => (
              <AlbumItem
                onPress={() => navigation.navigate('Album', { album: item })}
                album={item}
              />
            )}
          />
        )}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  albums: state.albums,
});
const mapDispatchToProps = dispatch => bindActionCreators(AlbumsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
