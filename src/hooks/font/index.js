import { useFonts } from "expo-font";
import { createContext } from "react";
import { ActivityIndicator, Text, View } from "react-native";

const FontContext = createContext({})

export function FontProvider({children}) {

    const [loaded, error] = useFonts({
        regular: require("../../assets/fonts/Montserrat-Regular.ttf"),
        bold: require("../../assets/fonts/Montserrat-Bold.ttf"),
        semiBold: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
        ligth: require("../../assets/fonts/Montserrat-Light.ttf"),
        medium: require("../../assets/fonts/Montserrat-Medium.ttf"),
        thin: require("../../assets/fonts/Montserrat-Thin.ttf"),
        extralight: require("../../assets/fonts/Montserrat-ExtraLight.ttf"),
        extraBold: require("../../assets/fonts/Montserrat-ExtraBold.ttf"),
        italic: require("../../assets/fonts/Montserrat-Italic.ttf"),
        boldItalic: require("../../assets/fonts/Montserrat-BoldItalic.ttf"),
        semiBoldItalic: require("../../assets/fonts/Montserrat-SemiBoldItalic.ttf"),
        blackitalic: require("../../assets/fonts/Montserrat-BlackItalic.ttf"), 

    });

    if (!loaded && !error) {
     return ( 
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text style={{fontSize: 28, marginTop: 15}}>Carregando as Fontes</Text>
     <ActivityIndicator size="large" color="#0000ff" />
     </View>
     );
    }
    return <FontContext.Provider value={{loaded}}>{children}</FontContext.Provider>;
}

export function uesFont() {
    const context = useContext(FontContext)
    if (!context) {
        throw new Error("useFont must be used within a FontProvider");
    }
    return context;
}