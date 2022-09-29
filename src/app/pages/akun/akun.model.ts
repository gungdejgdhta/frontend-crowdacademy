
export class AkunModel {
  id!: number;
  username!: string;
  nama_lengkap!: string;
  alamat!: string;
  umur!: number;
  universitas!: string;
  app_users!: User;
}

export class User {
  id!: number
  email!: string
  password!: string
}
