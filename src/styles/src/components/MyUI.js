import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/MyStyles'; // ข้อ 1: ดึง Style มาจากโฟลเดอร์ styles

const MyUI = () => (
  <View style={styles.container}>
    <Text style={styles.text}>จัดการโครงสร้างใหม่สำเร็จ!</Text>
  </View>
);
export default MyUI;
