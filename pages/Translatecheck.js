import React from 'react';
import { View,Animated,StyleSheet,TouchableWithoutFeedback } from "react-native";
class Translatecheck extends React.Component{
    state={
        animationY:new Animated.Value(0),
        animationX:new Animated.Value(0),
        animationScale:new Animated.Value(1),
        animationScaleX:new Animated.Value(1),
        animationScaleY:new Animated.Value(1),
        disabled:false
    }
    startAnimation=()=>{
        this.setState({disabled:true},()=>{
            setTimeout(()=>{this.setState({disabled:false})},1600)
        })

        //Animating Scale along X axis
        Animated.timing(this.state.animationScaleX,{
            toValue:-1,//A negative value flips the object along the x axis
            duration:400,
        }).start(()=>{
            Animated.timing(this.state.animationScaleX,{
                toValue:1,
                duration:400,
            }).start(()=>{
                Animated.timing(this.state.animationScaleX,{
                    toValue:-1,//A negative value flips the object along the x axis
                    duration:400,
                }).start(()=>{
                    Animated.timing(this.state.animationScaleX,{
                        toValue:1,
                        duration:400,
                    }).start()
                })
            })
        })

        //Animating Scale along Y axis
        Animated.timing(this.state.animationScaleY,{
            toValue:-1,//A negative value flips the object along the y axis
            duration:400,
        }).start(()=>{
            Animated.timing(this.state.animationScaleY,{
                toValue:1,
                duration:400,
            }).start(()=>{
                Animated.timing(this.state.animationScaleY,{
                    toValue:-1,//A negative value flips the object along the y axis
                    duration:400,
                }).start(()=>{
                    Animated.timing(this.state.animationScaleY,{
                        toValue:1,
                        duration:400,
                    }).start()
                })
            })
        })
        
        //Animating Scale
        Animated.timing(this.state.animationScale,{
            toValue:1.5,//we are increasing the size to twice
            duration:800
        }).start(()=>{
            Animated.timing(this.state.animationScale,{
                toValue:1,//decreasing the size back to normal
                duration:800
            }).start()
        })
        
        //Animating movement along Y axis
        Animated.timing(this.state.animationY,{
            toValue:250,  //we are setting the displacement of the box along the Y axis
            duration:800
        }).start(()=>{
            Animated.timing(this.state.animationY,{
                toValue:0,
                duration:800
            }).start()
        })

        //Animating movement along X axis
        Animated.timing(this.state.animationX,{
            toValue:50,  //we are setting the displacement of the box along the X axis
            duration:400
        }).start(()=>{
            Animated.timing(this.state.animationX,{
                toValue:0,
                duration:400
            }).start(()=>{
                Animated.timing(this.state.animationX,{
                    toValue:-50,
                    duration:400
                }).start(()=>{
                    Animated.timing(this.state.animationX,{
                        toValue:0,
                        duration:400
                    }).start()
                })
            })
        })


    }
    render(){
        //Since we are shiftio=ng the box along the y axis therefore we will use transform styling.Inside it we will use translateY and translateX.transform is an array of objects.scale changes the size of the object
        const animatedStyles={
            transform:[
                {
                    translateY:this.state.animationY
                },
                {
                    translateX:this.state.animationX
                },
                {
                    scale:this.state.animationScale
                },
                {
                    scaleX:this.state.animationScaleX
                },
                {
                    scaleY:this.state.animationScaleY
                }
            ]
        }
        return(
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.startAnimation} disabled={this.state.disabled} >
                    <Animated.View style={[styles.box,animatedStyles]}>
                        <View style={styles.redDot}></View>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
export default Translatecheck;

const styles=StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    box:{
        height:100,
        width:100,
        backgroundColor:'orange'
    },
    redDot:{
        height:10,
        width:10,
        borderRadius:5,
        backgroundColor:'red'
    }

})