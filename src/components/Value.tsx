import { StyleSheet, Text, View } from 'react-native';

type ValueProps={
  label: string;
  value:string;
}
const Value=({label,value}: ValueProps)=>(
  <View>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);


const styles = StyleSheet.create({

    label:{
        fontSize: 20,
        color:'white',
    },
    value:{
        fontSize: 35,
        color:'#AFB3BE',
        fontWeight:'500'
    },
})


export default Value;