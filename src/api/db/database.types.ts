export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      member: {
        Row: {
          // the data expected from .select()
          memId: string
          createdAt: string // or Date if using date objects
          updatedAt: string // or Date if using date objects
          loginType: string
          useYn: boolean
          auth: string
          username: string
          password: string
          nickname: string
          name: string
          email: string
        }
        Insert: {
          memId: string
          createdAt: string // or Date if using date objects
          updatedAt: string // or Date if using date objects
          loginType: string
          useYn: boolean
          auth: string
          username: string
          password: string
          nickname: string
          name: string
          email: string
        }
        Update: {
          memId: string
          createdAt: string // or Date if using date objects
          updatedAt: string // or Date if using date objects
          loginType: string
          useYn: boolean
          auth: string
          username: string
          password: string
          nickname: string
          name: string
          email: string
        }
      }
    }
  }
}
