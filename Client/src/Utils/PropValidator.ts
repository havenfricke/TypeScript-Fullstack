export function propValidator(target: Record<PropertyKey, any>, prop: PropertyKey): void {
    if (typeof[prop] === 'function') { 
        return; 
    }

    if (!target.hasOwnProperty(prop)) {
        throw new Error(`Invalid property: ${prop.toString()}.`);
    }
}