import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { FlashList } from "@shopify/flash-list";

export default function List() {
    const [ data, setData] = useState([])
    const {getPayments} = usePaymentsDatabase()



    async function fetchData() {
        const payments = await getPayments();
        setData(payments)
        
    }

    useEffect(() => {
    
      fetchData()
    }, [])

    renderItem = ({item}) => (
        <View>
            <View></View>
            <View></View>
        <Text>{item.created_at}</Text>



        </View>
      );


    return (
        <View style={{ flex: 1 }}>
            <text>Pagamentos</text>
        <View style={{ flex: 1 }}>
            <FlashList
              data={data}
              renderItem={renderItem}
              estimatedItemSize={200}
            />
        </View>
        </View>
    );
}