import React, { Component } from 'react';
import { View, Text, StyleSheet , FlatList, TouchableOpacity } from 'react-native';
import api from '../services/api';

export default class Main extends Component {
    static navigationOptions = {
        title: "JSHunt"
    }

    state = {
        productInfo: {},
        docs: [],
        page: 1,
    };

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        const { docs, ... productInfo } = response.data;

        this.setState({
            docs: [... this.state.docs, ... docs],
            productInfo,
            page
        })
    }

    loadMore = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    componentDidMount = () => {
        this.loadProducts();
    }

    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <TouchableOpacity
            style={styles.productButton}
            onPress={() => {
                this.props.navigation.navigate("Product", { product: item });
            }}>
                <Text style={styles.productButtonText}>
                    Acessar
                </Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                contentContainerStyle={styles.list}
                data={this.state.docs}
                keyExtractor={item => item._id}
                renderItem={this.renderItem}
                onEndReached={this.loadMore}
                onEndReachedThreshold={0.1}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA"
    },
    list: {
        padding: 20
    },
    productContainer: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        padding: 20,
        marginBottom: 20
    },
    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },
    productDescription: {
        fontSize: 16,
        color: "#999",
        marginTop: 24
    },
    productButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#DA552F",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    productButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#DA552F"
    }
})