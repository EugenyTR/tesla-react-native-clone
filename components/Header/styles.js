import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
       width: '96%',
        paddingHorizontal: '2%',
       position: 'absolute',
       top: '5%',
       zIndex: 2,
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
   },
    logo: {
      width: 100,
        height: 20,
        resizeMode: 'contain',
    },
    menu: {
       width: 25,
        height: 25,
        resizeMode: 'contain',
    }
});

export default styles;
