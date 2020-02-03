import React from 'react';
export declare const useAsync: <T>(fn: () => Promise<any>, deps?: readonly any[], initialValue?: any) => {
    loading: boolean;
    result: T;
    call: () => Promise<void>;
    error: any;
    setResult: React.Dispatch<React.SetStateAction<T>>;
};
