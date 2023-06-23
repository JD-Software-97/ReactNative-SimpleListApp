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

    const characterListView = (item: { imageUrl: string, fullName: string, family: string, title: string }) => {
        return (
            <View style={styles.listContainer}>
                <View style={styles.listContainerItems}>
                    <Image source={{ uri: item.imageUrl }} style={{ height: 100, width: 100 }} resizeMode="cover" />

                    <View style={styles.detailsText}>
                        <Text style={{ fontWeight: 'bold' }}>{item.fullName}</Text>
                        <Text>{item.family}</Text>
                    </View>

                    <Text style={styles.detailsText} >{item.title}</Text>
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
                style={{ marginVertical: 4 }}
                data={data}
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
    },
    detailsText: {
        width: 100,
        alignItems: 'center',
        alignSelf: "center"
    },
    listContainer: {
        margin: 4,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 12
    },
    listContainerItems: {
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 10
    }
})