import React from 'react';
import { View,Animated,StyleSheet,TouchableWithoutFeedback,Easing } from "react-native";
class Translatecheck extends React.Component{
    state={
        animationY:new Animated.Value(0),
        animationX:new Animated.Value(0),
        animationScale:new Animated.Value(1),
        animationScaleX:new Animated.Value(1),
        animationScaleY:new Animated.Value(1),
        disabled:false,
        animationRight:new Animated.Value(0),
        animationHeight:new Animated.Value(80),
        animationTop:new Animated.Value(0),
        animationLeft:new Animated.Value(0),
        animationColor:new Animated.Value(0),
        animationRotate:new Animated.Value(0),
        animationRotateHeight:new Animated.Value(0),
        animationRotateWidth:new Animated.Value(0),
        animationTomatoX:new Animated.Value(0)
    }
    startAnimation=()=>{
        this.setState({disabled:true},()=>{
            setTimeout(()=>{this.setState({disabled:false})},1600)
        })
        

        //Animating the yellow box
        Animated.timing(this.state.animationTomatoX,{
            toValue:100,
            duration:1600,
            //easing:Easing.back(4)
            //easing:Easing.elastic(1)
            easing:Easing.bounce
        }).start(()=>{
            this.state.animationTomatoX.setValue(0)
        })


        //Animating height of the black box
        Animated.timing(this.state.animationRotateHeight,{
            toValue:1,
            duration:800
        }).start(()=>{
            Animated.timing(this.state.animationRotateHeight,{
                toValue:0,
                duration:800
            }).start()
        })

        //Animating width of the black box
        Animated.timing(this.state.animationRotateWidth,{
            toValue:1,
            duration:800
        }).start(()=>{
            Animated.timing(this.state.animationRotateWidth,{
                toValue:0,
                duration:800
            }).start()
        })

        //Animating black box rotation
        Animated.timing(this.state.animationRotate,{
            toValue:1,
            duration:800
        }).start(()=>{
            Animated.timing(this.state.animationRotate,{
                toValue:0,
                duration:800
            }).start()
        })

        //changes the background color of the purple box
        Animated.timing(this.state.animationColor,{
            toValue:1,
            duration:800
        }).start(()=>{
            Animated.timing(this.state.animationColor,{
                toValue:0,
                duration:800
            }).start()
        })


        //Moving the purple box to the right
        Animated.timing(this.state.animationLeft,{
            toValue:60,
            duration:800
        }).start(()=>{
            Animated.timing(this.state.animationLeft,{
                toValue:0,
                duration:800
            }).start()
        })

        //Moving the purple box to the down
        Animated.timing(this.state.animationTop,{
            toValue:200,
            duration:800
        }).start(()=>{
            Animated.timing(this.state.animationTop,{
                toValue:0,
                duration:800
            }).start()
        })

        //Animating the height of the purple box
        Animated.timing(this.state.animationHeight,{
            toValue:160,
            duration:800
        }).start(()=>{
            Animated.timing(this.state.animationHeight,{
                toValue:80,
                duration:800
            }).start()
        })


        //Animating the right margin of the purple box
        Animated.timing(this.state.animationRight,{
            toValue:60,
            duration:800
        }).start(()=>{
            Animated.timing(this.state.animationRight,{
                toValue:0,
                duration:800
            }).start()
        })

        //Animating Scale along X axis
        Animated.timing(this.state.animationScaleX,{
            toValue:-1,//A negative value flips the object along the y axis
            duration:400,
        }).start(()=>{
            Animated.timing(this.state.animationScaleX,{
                toValue:1,
                duration:400,
            }).start(()=>{
                Animated.timing(this.state.animationScaleX,{
                    toValue:-1,//A negative value flips the object along the y axis
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
            toValue:-1,//A negative value flips the object along the x axis
            duration:400,
        }).start(()=>{
            Animated.timing(this.state.animationScaleY,{
                toValue:1,
                duration:400,
            }).start(()=>{
                Animated.timing(this.state.animationScaleY,{
                    toValue:-1,//A negative value flips the object along the x axis
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
        //Since we are shifting the box along the y axis therefore we will use transform styling.Inside it we will use translateY and translateX.transform is an array of objects.scale changes the size of the object
        const animatedStyles1={
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

        //What interpolation does is it takes a configuration object.In this object there is an input range and an output range.Depending on the current value it interpolates the specific output wrt the input value
        const animateBackgroundColor=this.state.animationColor.interpolate({
            inputRange:[0, 1],
            outputRange:["rgb(128,0,128)","rgb(255,165,0)" ]
        })


        const animatedStyles2={
            height:this.state.animationHeight,
            top:this.state.animationTop,
            left:this.state.animationLeft,
            right:this.state.animationRight,
            backgroundColor:animateBackgroundColor
        }

        const animateRotate=this.state.animationRotate.interpolate({
            inputRange:[0,1],
            outputRange:['0deg','410deg']
        })
        const animateHeight=this.state.animationRotateHeight.interpolate({
            inputRange:[0,1],
            outputRange:[40,100]
        })
        const animateWidth=this.state.animationRotateWidth.interpolate({
            inputRange:[0,1],
            outputRange:[40,100]
        })
        const animatedStyles3={
            height:animateHeight,
            width:animateWidth,
            transform:[
                {
                    rotate:animateRotate//You can also use rotateX and rotateY to rotate along x and y axis respectively
                }
            ]
        }
        const animatedStyles4={
            transform:[
                {
                    translateX:this.state.animationTomatoX
                }
            ]
        }
        return(
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.startAnimation} disabled={this.state.disabled} >
                    <Animated.View style={[styles.box2,animatedStyles2]}>
                        
                    </Animated.View>
                </TouchableWithoutFeedback>

                <View style={styles.midContainer}>
                    <TouchableWithoutFeedback onPress={this.startAnimation} disabled={this.state.disabled} >
                        <Animated.View style={[styles.box3,animatedStyles3]}>
                        </Animated.View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={this.startAnimation} disabled={this.state.disabled} >
                        <Animated.View style={[styles.box4,animatedStyles4]}>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
                
                <TouchableWithoutFeedback onPress={this.startAnimation} disabled={this.state.disabled} >
                    <Animated.View style={[styles.box1,animatedStyles1]}>
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
    box1:{
        height:100,
        width:100,
        backgroundColor:'orange'
    },
    redDot:{
        height:10,
        width:10,
        borderRadius:5,
        backgroundColor:'red'
    },
    box2:{
        position:'absolute',//it is absolutely positioned the box wont care about center alignment and justification
        top:0,
        left:0,
        right:0,
        height:80,
        marginBottom:60
    },
    box3:{
        marginBottom:40,
        backgroundColor:'black'
    },
    midContainer:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around',
        backgroundColor:'red'
    },
    box4:{
        marginBottom:40,
        backgroundColor:'yellow',
        height:40,
        width:40
    },
})