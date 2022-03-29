import { Owner } from "./owner"

export interface RepoModel{
    name:string,
    full_name:string
    html_url:string
    description:string
    language:string
    created_at:Date
}