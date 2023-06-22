import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux'
import React, { useEffect, useState, } from 'react'
import apiCall from '../store/apiActionCreator';

const HomeScreen = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const data = useSelector((state: any) => state.apiReducer.data);
    const loading = useSelector((state: any) => state.apiReducer.loading);

    useEffect(() => {
        getListData()
        console.log(data)
    }, [])

    const getListData = () => {
        dispatch(apiCall())
    }

    const postsListView = (item: any) => {
        return (
            <View style={{}}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={{ marginRight: 10 }}>{item.fullName}</Text>
                    <Text>{item.family}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={{ margin: 40 }}
                data={data}
                extraData={data}
                renderItem={({ item }) => postsListView(item)}
                keyExtractor={item => item.postID}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        onRefresh={getListData}
                        refreshing={loading}
                        title={"Pull to refresh"}
                    />

                }
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})