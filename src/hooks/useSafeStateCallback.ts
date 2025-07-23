import { deepClone, deepEqual } from "@/utils/objectUtils";
import { useState, useCallback } from "react";

export const useSafeStateCallback = <T>(
    initialValue: T,
    options?: { clone?: boolean }
): [T, (newValue: T, callback?: () => void) => void] => {
    const [state, setState] = useState<T>(initialValue);

    const updateState = useCallback(
        (newValue: T, callback?: () => void) => {
            let shouldCall = false;

            setState((prev) => {
                const isEqual = deepEqual(prev, newValue);
                shouldCall = !isEqual;
                return isEqual ? prev : (options?.clone === false ? newValue : deepClone(newValue));
            });

            if (shouldCall && callback) {
                queueMicrotask(callback);
            }
        },
        [options?.clone]
    );

    return [state, updateState];
};
