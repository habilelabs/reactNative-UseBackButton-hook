import { BackHandler } from "react-native";
import {useEffect} from "react";

/**
 * Handle back button
 * @param handler
 */
export function useBackButton(handler) {
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handler);
        return () => {
            BackHandler.removeEventListener(
                "hardwareBackPress",
                handler
            );
        };
    }, [handler]);
}