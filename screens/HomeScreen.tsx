import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux'
import React, { useEffect, } from 'react'
import apiCall from '../store/apiActionCreator';

const HomeScreen = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const data = useSelector((state: any) => state.apiReducer.data);
    const loading = useSelector((state: any) => state.apiReducer.loading);

    useEffect(() => {
        dispatch(apiCall())
    }, [])

    return (
        <View style={styles.container}>
            <Text>Test</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})