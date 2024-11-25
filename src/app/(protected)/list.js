import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";

export default function List() {
    const [ data, setData] = useState([])
    const { getPayments } = usePaymentsDatabase;



    async function fetchData() {
        const payments = await getPayments();
        return payments;
    }


    useEffect(() => {

        const tempData = fetchData();
        console.log(tempData);
        setData(tempData);
    }, [])




    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Listagem</Text>
            {
            data.length > 0  &&  data.map((item, index) => {
                    return (
                        <Text key={index}>{item}</Text>
                    )
                })
            }
        </View>
    );
}