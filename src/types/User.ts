export default class User {
    private _firstname: string = ''
    private _lastname: string = ''
    private _email: string = ''

    constructor (_firstname: string, _lastname: string, _email: string) {
        this._firstname = _firstname
        this._lastname = _lastname
        this._email = _email
    }

    /* Methods */
    public getFullName (): string { return `${this._firstname} ${this.lastname}` }

    /* Getters and Setters */
    public get firstname (): string { return this._firstname }

    public get lastname (): string { return this._lastname }

    public get email (): string { return this._email }

    public set firstname (_firstname: string) { this._firstname = _firstname }

    public set lastname (_lastname: string) { this._lastname = _lastname }

    public set email (_email: string) { this._email = _email }
}