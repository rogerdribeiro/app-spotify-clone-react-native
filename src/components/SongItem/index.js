import React from 'react';

import { connect } from 'react-redux';
import {
  View, Text, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const SongItem = ({ song, player, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.info}>
      <Text style={[styles.title, player.currentSong.id === song.id ? styles.active : {}]}>
        {song.title}
      </Text>
      <Text style={styles.author}>{song.author}</Text>
    </View>
    {player.loadingId === song.id ? (
      <ActivityIndicator size="small" style={styles.loading} color="#999" />
    ) : (
      <Icon name="play-circle-outline" size={24} style={styles.play} />
    )}
  </TouchableOpacity>
);

const mapStateToProps = state => ({
  player: state.player,
});

export default connect(mapStateToProps)(SongItem);
