import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Creators as PlayerActions } from '../../store/ducks/player';
import styles from './styles';

const Player = ({ player: { currentSong } }) => {
  if (currentSong.id === undefined) return null;

  return (
    <View style={styles.container}>
      <View style={styles.currentSong}>
        <Text style={styles.title}>{currentSong.title}</Text>
        <Text style={styles.author}>{currentSong.author}</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="skip-previous" size={24} style={styles.controlIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.play}>
          <Icon name="play-circle-filled" size={36} style={styles.controlIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="skip-next" size={24} style={styles.controlIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  player: state.player,
});
const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
