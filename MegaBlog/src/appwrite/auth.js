
import conf from '../conf/conf.js'
import {Client, Account, ID} from "appwrite"

export class AuthService{
    client = new Client()
    account

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}) {
        try{
          const userAccount =  await this.account.create(ID.unique(),email,password,name)
          if(userAccount){
            //call another method
            // return userAccount
          }else{
            return userAccount
          }
        }catch(error){
            throw error.message
        }

    }

    async login ({email, password}){
        try{
            return await this.account.createEmailSession(email, password)
        }catch(error){
            throw error.message
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get()
        }catch(error){
            console.log("Appwrite service:: getCurrentUser")
        }
        return null
    }

    async logout(){
        try{
            await this.account.deleteSessions()
        }catch(error){
            console.log("Appwrite serve:: logout::error ", error)
        }
    }


}

const authService = new AuthService()

export default authService
