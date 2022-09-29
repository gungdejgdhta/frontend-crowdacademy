export class RegisterModel {
  id!: number
  email!: string
  password!: string
  role! : RoleRegister
}

export class RoleRegister {
  id!: number
  role!: string
}
