import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secundary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
    height: 60,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentSong: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: colors.white,
  },
  author: {
    fontSize: 12,
    color: colors.dark,
    marginTop: 3,
  },
  controlIcon: {
    color: colors.white,
  },
  play: {
    marginHorizontal: metrics.baseMargin / 2,
  },
});

export default styles;
