export class LoginModel {
  id!: number
  email!: string
  password!: string
  role!: LoginRole
}

export class LoginRole {
  id!: number
  role!: string
}
