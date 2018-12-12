import { StyleSheet, Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');

const HEIGHT_DEFAULT_HEADER = 50
const HEIGHT_DEFAULT_FOOTER = 50
const WIDTH_DEFAULT = 50
const HEIGHT_DEFAULT = 50
const HEIGHT_BUTTON_DEFAULT = 40
const WIDTH_BUTTON_DEFAULT = 40
const TEXT_SIZE_DEFAULT = 15
const MARGIN_DEFAULT = 5  
const MARGIN_CONTENT = 10
const BORDER_WIDTH_DEFAULT = 1

export const containerStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
   
});

export const headerStyle = StyleSheet.create({
    containerHeader: {
      height: HEIGHT_DEFAULT_HEADER,
      width: width,
      backgroundColor: 'powderblue',
      flexDirection: 'row',
    },
     menuField: {
        width:HEIGHT_DEFAULT, height:WIDTH_DEFAULT
     },
     menuButton: {
        height:HEIGHT_BUTTON_DEFAULT, width:WIDTH_BUTTON_DEFAULT, margin:MARGIN_DEFAULT
    }, 

     searchField : {
        width:HEIGHT_DEFAULT, height:WIDTH_DEFAULT
     },
    searchButton : {
        height:HEIGHT_BUTTON_DEFAULT, width:WIDTH_BUTTON_DEFAULT, margin:MARGIN_DEFAULT
     }, 

     contentField:{
         flex:1, borderColor:'white', borderLeftWidth: BORDER_WIDTH_DEFAULT, borderRightWidth: BORDER_WIDTH_DEFAULT
     }, 
     contentInput: {
         borderColor:'white', borderWidth: BORDER_WIDTH_DEFAULT, margin:MARGIN_CONTENT, flex:1,
     } 
});

export const bodyStyle = StyleSheet.create({
    body: {
      flex:1,
      backgroundColor: 'white', 
      justifyContent:'center',
      alignItems:'center'
    },
    content:{
        fontSize:TEXT_SIZE_DEFAULT 
    }
})

export const footerStyle = StyleSheet.create({
      footer: {
        height: HEIGHT_DEFAULT_FOOTER,
        width: width,
        backgroundColor: 'steelblue',
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        color:'white',
        fontSize:TEXT_SIZE_DEFAULT
    }
});

