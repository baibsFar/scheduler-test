import User from "./User"

type Nullable<T> = T | null

enum Priority { LOW, MEDIUM, HIGH }

export default class Task {
    private _name: string = ''
    private _description: string = ''
    private _participants: User[] | Nullable<User[]> = []
    private _startDate: Date | Nullable<Date> = null
    private _endDate: Date | Nullable<Date> = null
    private _priority: Priority = 1 //  Task is by default MEDIUM priority
    private _beforeStartingNotificationTime: number = 0 //  n minutes before notification

    /* Getters and Setters */
    public get name (): string { return this._name }

    public get description (): string { return this._description }

    public get participants (): User[] | Nullable<User[]> { return this._participants }

    public get startDate (): Date | Nullable<Date> { return this._startDate }

    public get endDate (): Date | Nullable<Date> { return this._endDate }

    public get priority (): Priority { return this._priority }

    public get beforeStartingNotificationTime ():number { return this._beforeStartingNotificationTime }

    public set name (_name: string) { this._name = _name }

    public set description (_description: string) { this._description = _description }

    public set participants (_participants: User[] | Nullable<User[]>) { this._participants = _participants }

    public set startDate (_startDate: Date | Nullable<Date>) { this._startDate = _startDate }

    public set endDate (_endDate: Date | Nullable<Date>) { this._endDate = _endDate }

    public set priority (_priority: Priority) { this._priority = _priority }

    public set beforeStartingNotificationTime (_beforeStartingNotificationTime: number) { this._beforeStartingNotificationTime = _beforeStartingNotificationTime }
}