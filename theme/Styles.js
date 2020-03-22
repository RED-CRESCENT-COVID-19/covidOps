import { StyleSheet} from 'react-native'
import Colors from './Colors'

const Styles = StyleSheet.create({
    container:{
        flex:1
    },
    containerHeader:{
        paddingTop:95,
        paddingLeft:20,
        paddingRight:20
      },
    textHeader:{  
      fontSize:34,
      color:Colors.primaryColor
    },
    lineHeader:{
        height: 2,
        backgroundColor: Colors.primaryColor,
        alignSelf: 'stretch'
    },
    topParagraph:{
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20,
        fontSize:16,
        color:Colors.paragraphTextColor
    },
    Spacer300:{
        paddingTop:300,
    },
    Spacer100:{
        paddingTop:100,
    },
    leftButtonContainer:{
        paddingRight:220,
        paddingLeft:20
    },
    rightButtonContainer:{
        paddingLeft:220,
        paddingRight:20
    },
    smallButton:{
        width: 140,
        height: 44,
        overflow: 'hidden',
        borderRadius:40,    
    },
    buttonsContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:20
    }
    
    
})

export default Styles