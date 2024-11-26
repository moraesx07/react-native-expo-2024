import { useSQLiteContext } from "expo-sqlite";

export function useMaintenanceDatabase() {
    const database = useSQLiteContext();

    async function resetDatabase() {
        try {
            console.log("useMaintenanceDatabase resetDatabase success",);
        } catch (error) {
            console.log("useMaintenanceDatabase resetDatabase error: ", error);
        }
    }

    return { resetDatabase };
}