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

}

const autheService = new AuthService()

export default AuthService
