class LocalStorage implements Storage {
    [name: string]: any;
    public readonly length!: number;
    public clear(): void { return; }
    public getItem(key: string): string | null { return null; }
    public key(index: number): string | null { return null; }
    public removeItem(key: string): void { return; }
    public setItem(key: string, value: string): void { return; }
}

export class LocalStorageService implements Storage {

    public length!: number;
    private storage: Storage;

    constructor() {
        this.storage = new LocalStorage();

        if (typeof localStorage !== 'undefined') {
            this.storage = localStorage;
        }
    }

    [name: string]: any;

    public clear(): void {
        this.storage.clear();
    }

    public getItem(key: string): string | null {
        return this.storage.getItem(key);
    }

    public key(index: number): string | null {
        return this.storage.key(index);
    }

    public removeItem(key: string): void {
        return this.storage.removeItem(key);
    }

    public setItem(key: string, value: string): void {
        return this.storage.setItem(key, value);
    }
}