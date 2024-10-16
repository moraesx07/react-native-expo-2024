import { useSQLiteContext } from "expo-sqlite";

export function useUsersDatabase() {
  const database = useSQLiteContext();

  async function authUser({ email, password }) {
    // console.log("authUser: ", email, "- password:", password);
    try {
      const result = await database.getFirstAsync(`
                SELECT id, nome, email, role FROM users WHERE email = '${email}' and senha = '${password}'
                `);
      return result;
    } catch (error) {
      console.log("useUsersDatabase authUser error: ", error);
      throw error;
    }
  }

  async function createUser({
    user_id,
    user_cadastro,
    valor_pago,
    data_pagamento,
    obervaçao,
  }) {
    const statment = await database.prepareAsync(`
      INSERT INTO payments (user_id, user_cadastro, valor_pago, data_pagamento, obervaçao)
       VALUES ($user_id, $user_cadastro, $valor_pago, $data_pagamento, $observacao);
      `);
    try {
      const result = await statment.executeAsync({
        $user_id: user_id,
        $user_cadastro: user_cadastro,
        $valor_pago: valor_pago,
        $data_pagamento: data_pagamento,
        $observacao: obervaçao,
      });
      const insertID = result.lastInsertRowId.toString();
      return { insertID };
    } catch (error) {
      console.log(error)
    } finally {
      await statment.finalizeAsync();
    }
  }

  return {
    authUser, createUser
  };
}
