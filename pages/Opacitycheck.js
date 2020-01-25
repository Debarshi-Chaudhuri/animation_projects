import React from "react";
import {View,Animated,TouchableWithoutFeedback,StyleSheet} from 'react-native';
class Opacitycheck extends React.Component{
    state={
        animation:new Animated.Value(1) //Default opacity of the block starts with 1
    }
    startAnimation=()=>{
        //Animated timing is used to set timing to an animation
        //it takes 2 params the first is an animated value
        //the second is an object where we can set the duration for which it occurs
        //and other to set the new animated value
        Animated.timing(this.state.animation,{
            toValue:0,
            duration:500
        }).start(()=>{
            //the callback of the start waits for the animation to complete and then executes the callback function
            Animated.timing(this.state.animation,{
                toValue:1,
                duration:500
            }).start()
        })
    }
    render(){

        //The [] bracket on Animated.View is for updating the style dynamically
        const animatedStyles={
            opacity:this.state.animation
        }
        return(
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.startAnimation} >
                    <Animated.View style={[styles.box,animatedStyles]}></Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
export default Opacitycheck;


const styles=StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    box:{
        height:100,
        width:100,
        backgroundColor:'orange'
    }
})