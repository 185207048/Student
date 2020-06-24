import { BASEURL, fetch, post, patch, put, postConfig } from './http.js'
export const getcountry = () => fetch('user/getcountry');