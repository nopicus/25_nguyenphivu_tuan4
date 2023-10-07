import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, button ,CheckBox, Alert} from 'react-native';
import React, {useState} from 'react';

export default function App(){

    return(
        <View style={styles.container}>
             <View style={styles.view1}>
                <View style={{flexDirection: 'row',width: 362, height:805,backgroundColor: 'rgba(35, 35, 91, 1)',color: '#2235B',borderRadius: 10}}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color:'white',fontFamily:'Roboto',top:59,left:100,alignItems:'centen'}}>PASSWORD GENERATOR</Text>
                        <View style={{flexDirection: 'row',width: 340, height: 55,backgroundColor: 'rgba(21, 21, 55, 1)',fontSize: 18,top:156, left:-181}}>
                            <TextInput style={{ width: 300, height: 50, fontSize: 18, color: 'black', margintop:400,left: 250 ,borderRadius: 10}} placeholder='   ' /> 
                                 <Text style={{ width: 300, height: 50,fontSize: 20, color:'white',fontFamily:'Roboto' ,top:109,left:-200, whiteSpace: 'nowrap'}}>Password length</Text>  
                                     <View style={{width: 155, height: 55,backgroundColor: 'white',fontSize: 18,top:90, left:-150}}></View>
                                        <Text style={{ width: 300, height: 50,fontSize: 30, color:'white',fontFamily:'Roboto' ,top:160,left:-495, whiteSpace: 'nowrap'}}>Include lower case letters</Text>  
                                        <Text style={{ width: 300, height: 50,fontSize: 30, color:'white',fontFamily:'Roboto' ,top:189,left:-795, whiteSpace: 'nowrap'}}>Include upcase letters</Text>  
                                        <Text style={{ width: 300, height: 50,fontSize: 30, color:'white',fontFamily:'Roboto' ,top:220,marginLeft:-1055, whiteSpace: 'nowrap'}}>Include number</Text>  
                                        <Text style={{ width: 300, height: 50,fontSize: 30, color:'white',fontFamily:'Roboto' ,top:250,left:-190, whiteSpace: 'nowrap'}}>Include special symbol</Text>  
                                            <TouchableOpacity style={{ marginTop: 560,marginLeft:-465, width: 350, height: 45, backgroundColor: 'rgba(59, 59, 135, 1)', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }} onPress={() => alert('xác nhận ')}><Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>GENERATE PASSWORD</Text></TouchableOpacity>
                                      
                                        
        </View>   
        </View>   
        </View>
         <View>
        </View>
        </View>
            
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient( to bottom,#3B3B98, #C4C4C4)',
        alignItems:'center',justifyContent:'center',
        marginHorizontal: 16
    },
    ImageBackground: 
        {
            flex: 1,
            justifyContent: 'center',
        },
    view2:{
        alignItems: 'center',
        marginTop: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    style2:{
        marginEnd:10,
        marginTop:50
      },
    checkbox: {
       alignSelf:'flex-end'},
    label: {
            margin: 10,
          },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
         top: 150,
         left:-500,
         fontSize:20,
            
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
      },
    
})
