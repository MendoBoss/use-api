export interface User {
    name: string,
    email: string,
    created_at: string,
    update_at: string,
    id: number
}
export interface UserAndToken{
    user: User,
    token: string
}
