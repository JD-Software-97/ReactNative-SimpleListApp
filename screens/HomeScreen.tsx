import { FlatList, Image, RefreshControl, StyleSheet, Text, View } from 'react-native'
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

    const characterListView = (item: { imageUrl: string, fullName: string, family: string }) => {
        return (
            <View style={{ margin: 4 }}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Image source={{ uri: item.imageUrl }} style={{ height: 60, width: 60 }} resizeMode="cover" />
                    <Text>{item.fullName}</Text>
                    <Text>{item.family}</Text>
                </View>
            </View>
        )
    }

    const emptyListView = () => {
        return (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text>No characters</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={{ marginTop: 40 }}
                data={data}
                extraData={data}
                renderItem={({ item }) => characterListView(item)}
                ListEmptyComponent={({ }) => emptyListView()}
                keyExtractor={item => item.id}
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