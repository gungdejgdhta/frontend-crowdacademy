export class AuthModel {
  id!: number
  email!: string
  password!: string
  role!: UserRole
}

export class UserRole {
  id!: number
  role!: string
}
