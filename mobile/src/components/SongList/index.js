import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SongItem from '../SongItem';
import { Creators as PlayerActions } from '../../store/ducks/player';

const SongList = ({ data, setSongRequest, ...props }) => (
  <FlatList
    {...props}
    data={data}
    keyExtractor={song => String(song.id)}
    renderItem={({ item }) => <SongItem song={item} onPress={() => setSongRequest(item, data)} />}
  />
);
const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);
export default connect(
  null,
  mapDispatchToProps,
)(SongList);
