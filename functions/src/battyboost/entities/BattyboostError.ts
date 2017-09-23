export class BattyboostError {
    code: number;
    domain: string;
    userInfo: Map<string, any> = new Map();

    static from(error: any) {
        const battyboostError = new BattyboostError();
        battyboostError.code = 500;
        if (error instanceof Error) {
            const defaultError: Error = error;
            battyboostError.userInfo.set("name", defaultError.name); // NOTE Just a preview, keys not final
            battyboostError.userInfo.set("message", defaultError.message);
        }
        return battyboostError;
    }
}
