import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { Drawer } from "expo-router/drawer";
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function CustomDrawerContent(props: any) {
    const router = useRouter();

    const LogOutUser = async () => {
        try {
            await AsyncStorage.removeItem('userId');
            router.replace('/auth/login');
        } catch (error) {
            console.log("Log Out Berhasil")
        }
    }

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.logoContainer}>
                <Image
                    source={{uri: 'https://images-platform.99static.com/v84irzbNBd5aawXGKXfH4SEjcn0=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/117/117132/attachment_117132760'}}
                    style={styles.logo}
                />
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Keluar"
                onPress={LogOutUser}
            />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 40,
    }
});


export default function Layout() {
    return (
        <Drawer
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerActiveTintColor: "#f48507ff",
            }}
        >
            <Drawer.Screen
                name="homepage/page"
                options={{
                    drawerLabel: 'Beranda',
                    title: 'Beranda',
                    headerShown: false, 
                }}
            />
            <Drawer.Screen
                name="profil/page"
                options={{ drawerLabel: 'Profil', title: 'Profil Saya', headerShown: false }}
            />
            <Drawer.Screen
                name="cart/page"
                options={{ drawerLabel: 'Cart', title: 'Keranjang Saya' }}
            />
        </Drawer>
    );
}
