import { router } from "expo-router";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { useMaintenanceDatabase } from "../database/useMaintenanceDatabase";
import { addDatabase } from "expo-sqlite";

export default function Maintenance() {
    const { resetDatabase } = useMaintenanceDatabase ();


    const handleReset = async () => {

        try {
            await addDatabase.withTransactionAsync(async () => {
                try {
                    addDatabase.execAsync(`DROP INDEX IF EXISTS idx_payments_data_pagamento;`);
                addDatabase.execAsync(`DROP INDEX IF EXISTS idx_users_nome;`);
                addDatabase.execAsync(`DROP TABLE IF EXISTS payments;`);
                addDatabase.execAsync(`DROP TABLE IF EXISTS users;`);

                addDatabase.execAsync(`
                    CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome  TEXT,
        curso TEXT,
        email TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL DEFAULT 'A123456a!',
        role TEXT NOT NULL DEFAULT 'USER',
        created_at DATE DEFAULT CURRENT_TIMESTAMP,
        updated_at DATE
        );
        `);

                addDatabase.execAsync(`
               CREATE TABLE payments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                user_cadastro INTEGER NOT NULL,
                valor_pago REAL NOT NULL,
                data_pagamento DATE NOT NULL,
                numero_recibo TEXT NOT NULL,
                observacao TEXT,
                created_at DATE DEFAULT CURRENT_TIMESTAMP,
               updated_at DATE,
               FOREIGN KEY (user_id) REFERENCES users(id),
               FOREIGN KEY (user_cadastro) REFERENCES users(id)
               );
               `);

                addDatabase.execAsync(`CREATE INDEX IF NOT EXISTS idx_users_nome ON users (nome);`);
                addDatabase.execAsync(`CREATE INDEX IF NOT EXISTS idx_payments_data_pagamento ON payments (data_pagamento); `);
                addDatabase.execAsync(`INSERT OR REPLACE INTO users (nome, email, senha, role) VALUES ('Super','super@email.com','A123456a!','SUPER');`);
                addDatabase.execAsync(`INSERT OR REPLACE INTO users (nome, email, senha, role) VALUES ('Admin','admin@email.com','A123456a!','ADMIN');`);
                addDatabase.execAsync(`INSERT OR REPLACE INTO users (nome, email, senha, role) VALUES ('User','user@email.com','A123456a!','USER');`);
                } catch (error) {
                    console.log("useMaintenanceDatabase resetDatabase error: ", error);
                }
                

                
    
                
            })
            Alert.alert("payments", "Banco de dados resetdo com sucesso!",);
        } catch (error) {
            Alert.alert("Payments", "Erro ao resetar o banco de dados:" + error.mensage);
        }
    }

    return  <View style={styles.container}>
            <Text style={styles.windowtitle}>Manutenção do banco</Text>
            <View style={styles.ContentButtons}>
                <Button title="zerar" onPress={handleReset} />
                <Button title="importar usuários" />
                <Button title="importar pagamentos" />
                <Button title="voltar" onPress={()=> router.back()}  />
            </View>
        </View>
   
};

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    windowtitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    ContentButtons: {
        gap: 10,
        marginVertical: 20,
    }
})