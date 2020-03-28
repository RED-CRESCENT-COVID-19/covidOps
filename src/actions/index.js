import axios from 'axios'
import configKeys from '../config'
import {AsyncStorage} from 'react-native'
import UUIDGenerator from 'react-native-uuid-generator';
export function createHome(home){
    console.log(home)
    let newUIID = UUIDGenerator.getRandomUUID((uuid)=>{
        return uuid
    });
    (async (houseUID) => await AsyncStorage.setItem('houseUID',houseUID))(newUIID)
    return (dispatch)=>{
        retrun (axios.post('http://54.224.84.138:3000/v1/house',home)
            .then((response) => {
                console.log(response)
            })
            
        )
    }
}
export function createHome(memeber){
    console.log(memeber)
    let newUIID = UUIDGenerator.getRandomUUID((uuid)=>{
        return uuid
    });
    return (dispatch)=>{
        retrun (axios.post('http://54.224.84.138:3000/v1/person',memeber)
            .then((response) => {
                console.log(response)
            })
            
        )
    }
}