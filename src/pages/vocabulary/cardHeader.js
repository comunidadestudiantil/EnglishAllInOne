import { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { AntDesign, Fontisto, MaterialCommunityIcons } from '../../utils/icons';
import { hp, wp } from '../../utils/responsive';

export function CardHeader({ visible, index, showIcon, setShowIcon }) {
  if (!visible) return <></>;

  function open({index}) {
    //setShowIcon(null);
    setShowIcon([index]);
  }

  return (
    <View style={[styles.cardHeader, index === 0 && { top: wp('-15%') }]}>

      {showIcon.includes(index) ? (
        <>
          <TouchableOpacity style={styles.cardHeaderBtn}>
            <MaterialCommunityIcons name="snail" size={wp('7%')} color={'#414e6e'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardHeaderBtn}>
            <AntDesign name="caretleft" size={wp('7%')} color={'#414e6e'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardHeaderBtn}>
            <AntDesign name="play" size={wp('7%')} color={'#414e6e'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardHeaderBtn}>
            <AntDesign name="caretright" size={wp('7%')} color={'#414e6e'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardHeaderBtn} onPress={() => setShowIcon([])}>
            <AntDesign name="closecircle" size={wp('7%')} color={'#414e6e'} />
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          style={styles.topicContainerbtn}
          onPress={() => open({index})}>
          <Fontisto name="volume-down" size={wp('6%')} color={'#293042'} />
        </TouchableOpacity>
      )}

      <Text style={[styles.cardIndexText]}>{index / 10}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
    position: 'absolute',
    top: wp('-13%'),
    width: wp('100%'),
    height: wp('13%'),
    backgroundColor: '#b9cfe8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: wp('3%')
  },
  cardHeaderBtn: {
    marginHorizontal: wp('2%'),
  },
  cardText: {
    flex: 1,
    color: '#000',
    fontSize: wp('4.5%'),
    fontWeight: '500',
    textAlign: 'center',
    paddingVertical: wp('1%'),
    borderBottomColor: '#9cb6dd',
    borderBottomWidth: wp('0.5%'),
    borderStyle: 'dotted',
  },
  cardIndexText: {
    position: 'absolute',
    left: wp('3%'),
    textAlign: 'left',
    color: '#000',
    fontSize: wp('4%'),
  },
});
