import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';
import {containerStyle} from './constants/styles'
import Header from './components/header/header'
import Body from './components/body/body'
import Footer from './components/footer/footer'
var {height, width} = Dimensions.get('screen');

export default class Screen2 extends React.Component {
  
//   static navigationOption = {
//       tabBarLabel: 'Benifit!',
//       drawerIcon: ({tintColor}) =>{
//             return (
//                 <Image 
//                     style = {{width:26, height:26, margin:5}}
//                     source = {require('./assets/list.png')}
//                 />
//             )
//       }
//   }

  

  render() {
    return (
     
          <View style={containerStyle.container}>
             <StatusBar hidden={true} />
             <Header/>
             <View style={{flex:1, marginLeft:3}}>
                <Text style={{alignSelf:"center"}}>Chào mừng các bạn đã đến với OneNoTwo Shop!</Text>
                <Text>Khi đến đây các bạn sẽ được nhiều ưu đại và sự trải nghiệm mới mẻ từ các sản phẩm đa dạng của shop</Text>
                <Text>Một số ưu đãi không có thời hạn!</Text>
                <Text>- Mua 1 tặng 2 tính tiền 2 cái</Text>
                <Text>- Mua 2 tặng 4 tính tiền 3 cái</Text>
                <Text>- Mua 3 tặng 6 tính tiền 6 cái</Text>
                <Text>- Freeship cho bạn bè của Nhân</Text>
                <Text>Không mua không tính tiền!</Text>
                <Text>Chúc các bạn mua hàng vui vẻ!</Text>
             </View>
             <TouchableOpacity style={{height:50, width:width, backgroundColor:'red', alignItems:'center', justifyContent:'center'}}
                                onPress={()=>Alert.alert(
                                    'Tin nhắn',
                                    'Anh nhân đi ngủ rồi không có online đâu mà gọi :))',
                                    [
                                      {text: 'Gọi lại sau!', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                      {text: 'Không thèm gọi nữa!', onPress: () => console.log('OK Pressed')},
                                    ],
                                    { cancelable: false }
                                  )}
             >
                <Text style={{color:'white'}}>Call me maybe: 113!</Text>
             </TouchableOpacity>
          </View>
    );
  }
}