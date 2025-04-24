import conf from "../conf/conf.js";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client()
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
    }

}

const service = new Service()

export default service
