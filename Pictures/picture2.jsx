import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity , } from 'react-native';
export default function App() {
    return(
        <View style={styles.container}>
        <View style={styles.view1}>
            <Image style={{ width: 70, height: 70}} source={{ uri: 'https://media.4rgos.it/i/Argos/4532062_R_Z001A' }}></Image>
            <TextInput style={{width: 300,height: 50,fontSize: 18,color: 'black',position: 'absolute',top: -10,left: 100,zIndex: 10, }}placeholder=' USB Bluetooth Music Receiver HJX-'></TextInput>
            <TextInput style={{width: 300,height: 50,fontSize: 18,color: 'black',position: 'absolute',top: 10,left: 100,zIndex: 10, }}placeholder=' 001 Biến loa thường thành loa'></TextInput>
            <TextInput style={{width: 300,height: 50,fontSize: 18,color: 'black',position: 'absolute',top: 30,left: 100,zIndex: 10, }}placeholder=' bluetooth'></TextInput>
        </View>
        <view style={styles.view2 }>
            <TextInput style={{width: 700,height: 50,fontSize: 30,color: 'black',position: 'absolute',top: 160,left: 105,zIndex: 10, }}placeholder=' Cực kỳ hài lòng '></TextInput>
            <Image style={{ width: 40 ,height:40, top:140, left: 100 ,zIndex: 20}} source={{ uri: 'https://img.icons8.com/fluency/48/star--v2.png'}}></Image>
            <Image style={{ width: 40 ,height:40, top:100, left: 140 ,zIndex: 20}} source={{ uri: 'https://img.icons8.com/fluency/48/star--v2.png'}}></Image>
            <Image style={{ width: 40 ,height:40, top:60, left: 180 ,zIndex: 20}} source={{ uri: 'https://img.icons8.com/fluency/48/star--v2.png'}}></Image>
            <Image style={{ width: 40 ,height:40, top:20, left: 220 ,zIndex: 20}} source={{ uri: 'https://img.icons8.com/fluency/48/star--v2.png'}}></Image>
            <Image style={{ width: 40 ,height:40, top:-20, left: 260 ,zIndex: 20}} source={{ uri: 'https://img.icons8.com/fluency/48/star--v2.png'}}></Image>
        </view>
        <View style={{flexDirection: 'row',width: 350, height: 50,backgroundColor: 'rgba(196, 196, 196, 0.3)',fontSize: 18,marginTop: 10,borderBottom: '1px solid rgba(196, 196, 196, 1)',color: 'blue',top:0, left:40}}>
                <Image style={{ width: 40, height: 40, top:5,left:10,justifyContent: 'centen',  alignItems: 'center' }} source={{ uri: 'https://img.icons8.com/ios-filled/100/camera--v3.png' }} />
                    <TextInput style={{ width: 300, height: 50, fontSize: 18, color: 'black', margintop:400,left: 250 ,borderRadius: 10}} placeholder='   Thêm hình ảnh' />            
        </View>
        <View style={{flexDirection: 'row',width: 350, height: 350,backgroundColor: 'rgba(196, 196, 196, 0.3)',fontSize: 18,marginTop: 10,borderBottom: '1px solid rgba(196, 196, 196, 1)',color: 'blue',top:0, left:40}}>
                <TextInput style={{ width: 300, height: 50, fontSize: 18, color: 'black', margintop:400,left: 250,borderRadius: 10 }} placeholder='   hãy viết gì đó vào đây' />            
        </View> 
        <view style ={styles.view3}>
        <TouchableOpacity style={{   marginTop: 40, left:40,width: 350, height: 45, backgroundColor: 'blue', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }} onPress={() => alert('đã gửi')}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Gửi</Text>
                </TouchableOpacity>
        </view>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    view1: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    view2:{
        alignItems: 'center',
        marginTop: 20,
    },
    view3:{
        alignItems: 'center',
        Top: 20,
    },
    input: {
        width: "100%",
        height: 200,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
      },
  });