const pick = <T extends Record<string, unknown>>(obj: T, fields: string[]): Partial<T> => {
    const picked: Partial<T> = {};

    for (const key in obj) {
        if (fields.includes(key)) {
            picked[key] = obj[key];
        }
    }

    return picked;
};

const skip = <T extends Record<string, unknown>>(obj: T, fields: string[]): Partial<T> => {
    const skipped: Partial<T> = {};

    for (const key in obj) {
        if (!fields.includes(key)) {
            skipped[key] = obj[key];
        }
    }

    return skipped;
};

const isEmptyObject = (obj: unknown): { isObject: boolean; isEmpty?: boolean } => {
    if (typeof obj !== 'object' || Array.isArray(obj)) {
        return { isObject: false };
    }
    
    if (obj === null) {
        return { isObject: false, isEmpty: true };
    }
    
    // Actual object
    return { 
        isObject: true, 
        isEmpty: Object.keys(obj).length === 0 
    };
};

const isNotIndex = (file: string, ext: string): boolean => (file.slice(-3) === ext) && (file !== `index${ext}`);
type Comparable = 
    | string 
    | number 
    | boolean 
    | null 
    | undefined 
    | Comparable[] 
    | { [key: string]: Comparable };

const deepEqual = (x: Comparable, y: Comparable): boolean => {
    // Check for strict equality first (covers primitives, null, undefined, same reference)
    if (x === y) return true;
    
    // Handle NaN
    if (Number.isNaN(x) && Number.isNaN(y)) return true;
    
    // Check if both are objects
    if (typeof x === 'object' && x !== null && 
        typeof y === 'object' && y !== null) {
        
        // Handle arrays
        if (Array.isArray(x) && Array.isArray(y)) {
            if (x.length !== y.length) return false;
            return x.every((item, index) => deepEqual(item, y[index]));
        }
        
        // Handle Date objects
        if (x instanceof Date && y instanceof Date) {
            return x.getTime() === y.getTime();
        }
        
        // Handle regular objects
        const xKeys = Object.keys(x);
        const yKeys = Object.keys(y);
        
        if (xKeys.length !== yKeys.length) return false;
        
        return xKeys.every(key => {
            // Use type assertion since we know it's a Record
            const xRecord = x as Record<string, Comparable>;
            const yRecord = y as Record<string, Comparable>;
            
            if (!(key in yRecord)) return false;
            return deepEqual(xRecord[key], yRecord[key]);
        });
    }
    
    // If we get here, values are not equal
    return false;
};

const objects = {
    isEmptyObject,
    isNotIndex,
    pick,
    skip,
    deepEqual,
};

export { objects };
