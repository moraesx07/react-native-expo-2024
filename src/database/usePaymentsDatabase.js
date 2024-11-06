import { useSQLiteContext } from "expo-sqlite";

export function usePaymentsDatabase() {
  const database = useSQLiteContext();

  async function createPayment({
    user_id,
    user_cadastro,
    valor_pago,
    data_pagamento,
    observacao,
  }) {
    const statment = await database.prepareAsync(`
          INSERT INTO payments (user_id, user_cadastro, valor_pago, data_pagamento, observacao)
           VALUES ($user_id, $user_cadastro, $valor_pago, $data_pagamento, $observacao);
          `);
    try {
      const result = await statment.executeAsync({
        $user_id: user_id,
        $user_cadastro: user_cadastro,
        $valor_pago: valor_pago,
        $data_pagamento: data_pagamento,
        $observacao: observacao,
      });
      // console.log("createPayment result: ", result);
      const insertedId = result.lastInsertRowId.toLocaleString();
      //const {lastInsertRowId} = result;
      //console.log("createPayment result: ", lastInsertRowId);
      // console.log("createPayment result: ", result.lastInsertRowId);
      // console.log("createPayment result variavel: ", insertedId);
      return { insertedId };
    } catch (error) {
      console.log(error);
    } finally {
      await statment.finalizeAsync();
    }
  }

  return { createPayment };
}
