import React from "react";
import {View,Animated,TouchableWithoutFeedback,StyleSheet,ScrollView,PanResponder} from 'react-native';
class AnimatedFunctions extends React.Component{
    state={
        animation:new Animated.Value(1), //Default opacity of the block starts with 1
        disabled:false,
        animationRotate:new Animated.Value(0),
        scrollY:new Animated.Value(0),
        animationMove:new Animated.ValueXY(0),
        animationMove2:new Animated.ValueXY(0)
    }

    constructor(props){
        super(props)
        //will mount is used to set pan responders
        this.panResponders=PanResponder.create({
            onStartShouldSetPanResponder:()=>true ,  //this means when we touch that object its pan responders will be set to true
            onMoveShouldSetPanResponder:()=>true ,//while moving the pan responders will be true
            onPanResponderMove:Animated.event([
                null,//the native event is set to null as we dont require it
                {
                    dx:this.state.animationMove.x,
                    dy:this.state.animationMove.y
                }
            ]),
            onPanResponderGrant:()=>{
                this.state.animationMove.extractOffset()  //what it does is extracts the offset values of the x and y position of the box then adds them to the original value of x and y to set the new value of x and y
            },
            onPanResponderRelease:(e,{vx,vy})=>{

                //this.state.animationMove.setValue({x:0,y:0})

                Animated.spring(this.state.animationMove,{
                    toValue:{x:0,y:0},
                    tension:160,
                    friction:2
                }).start()

                /*Animated.decay(this.state.animationMove,{
                    velocity:{x:vx,y:vy},
                    deceleration:0.996
                }).start()*/
            }
        })
        
        this.panResponders2=PanResponder.create({
            onStartShouldSetPanResponder:()=>true ,  //this means when we touch that object its pan responders will be set to true
            onMoveShouldSetPanResponder:()=>true ,//while moving the pan responders will be true
            onPanResponderMove:Animated.event([
                null,//the native event is set to null as we dont require it
                {
                    dx:this.state.animationMove2.x,
                    dy:this.state.animationMove2.y
                }
            ]),
            onPanResponderGrant:()=>{
                this.state.animationMove2.extractOffset()  //what it does is extracts the offset values of the x and y position of the box then adds them to the original value of x and y to set the new value of x and y
            },
            onPanResponderRelease:(e,{vx,vy})=>{

                //this.state.animationMove.setValue({x:0,y:0})

                /*Animated.spring(this.state.animationMove,{
                    toValue:{x:0,y:0},
                    tension:160,
                    friction:2
                }).start()*/

                Animated.decay(this.state.animationMove2,{
                    velocity:{x:vx,y:vy},
                    deceleration:0.996
                }).start()
            }
        })
    }

    startAnimation=()=>{

        this.setState({disabled:true})

        Animated.spring(this.state.animation,{
            toValue:2,
            friction:2, //decreasing the friction
            tension:170,//increasing the spring tension
        }).start(()=>{
            
            Animated.timing(this.state.animation,{
                toValue:1,
                duration:100
            }).start(()=>{
                this.setState({disabled:false})
            })
        })
        Animated.loop(Animated.timing(this.state.animationRotate,{
            toValue:1,
            duration:1000
        })).start()

        /*Animated.parallel(
          [Animated.timing ...,
          Animated.timing ...,
          ...  ]
        ).start()  */
        //Starts all the animations parallelly and then executes the callback for the start

        /*Animated.sequence(
          [Animated.timing ...,
          Animated.timing ...,
          ...  ]
        ).start()  */
        //Starts all the animations sequentially one after another and then executes the callback for the start this helps us to avoid multiple callbacks

        /*Animated.stagger(200,
          [Animated.timing ...,
          Animated.timing ...,
          ...  ]
        ).start()  */
        //Starts all the animations parallelly but it will have a time gap of 200ms between the animations so animation 1 will start there will be a 200 ms delay and then animation 2 will start

        /*
        Animated.delay() is used for a delay between the animations it can only be used with sequence, stagger or parallel */
    }
    render(){

        //The [] bracket on Animated.View is for updating the style dynamically
        const animatedStyles={
            transform:[
                {
                    scale:this.state.animation
                }
            ]
        }
        const animateRotation=this.state.animationRotate.interpolate({
            inputRange:[0,1],
            outputRange:['0deg','360deg']
        })
        const animatedStyles2={
            transform:[
                {
                    rotate:animateRotation
                }
            ]
        }
        const animateScroll=this.state.scrollY.interpolate({
            inputRange:[0,1000],
            outputRange:['rgb(144,238,144)','rgb(135,206,235)']
        })
        const backgroundColorAnimate={
            backgroundColor:animateScroll
        }
        const animatedStyles3={
            transform:this.state.animationMove.getTranslateTransform()
        }
        const animatedStyles4={
            transform:this.state.animationMove2.getTranslateTransform()
        }
        return(
            <ScrollView
                showsVerticalScrollIndicator={false}
                onScroll={
                    Animated.event([
                        {
                            nativeEvent:{
                                contentOffset:{
                                    y:this.state.scrollY //What animated event is doing is that it is setting the value of scrollY on every scroll hence the colour is changing accordingly
                                    //can also write it as (e)=>{this.state.scrollY.setValue(e.nativeEvent.contentOffset.y)}
                                }
                            }
                        }
                    ])
                }
            >
                <Animated.View style={[styles.container,backgroundColorAnimate]}>
                    <TouchableWithoutFeedback onPress={this.startAnimation} disabled={this.state.disabled} >
                        <Animated.View style={[styles.box,animatedStyles]}></Animated.View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.startAnimation} disabled={this.state.disabled} >
                        <Animated.View style={[styles.box2,animatedStyles2]}>
                            <Animated.View style={[styles.circle]}>
                            </Animated.View>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                    <Animated.View style={[styles.box3,animatedStyles3]} {...this.panResponders.panHandlers}/*to set or pan movements*/>
                    </Animated.View>
                    <Animated.View style={[styles.box4,animatedStyles4]} {...this.panResponders2.panHandlers}/*to set or pan movements*/>
                    </Animated.View>
                </Animated.View>
            </ScrollView>
        )
    }
}
export default AnimatedFunctions;


const styles=StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        alignItems:'center',
        height:2000
    },
    box:{
        height:40,
        width:40,
        backgroundColor:'orange',
        margin:40
    },
    box2:{
        height:40,
        width:40,
        display:'flex',
        alignItems:'center',
        margin:40
    },
    circle:{
        backgroundColor:'black',
        width:5,
        height:5,
        borderRadius:5
    },
    box3:{
        height:40,
        width:40,
        margin:40,
        backgroundColor:'tomato'
    },
    box4:{
        height:40,
        width:40,
        margin:40,
        backgroundColor:'red'
    },
})