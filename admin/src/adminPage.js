import * as React from "react";
import { /*fetchUtils,*/ Admin, Resource } from 'react-admin';
//import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import {MemberCreate, MemberEdit, MemberList} from './memberTable';
import dataProv from './dataProv';

// const httpClient = (url, options = {}) => {
//     if (!options.headers) {
//         options.headers = new Headers({ Accept: 'application/json' });
//     }
//     // add your own headers here
//     options.headers.set('Access-Control-Expose-Headers','X-Total-Count');
//     return fetchUtils.fetchJson(url, options);
// }
//const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
//const dataProvider = jsonServerProvider('http://localhost:8082');
const dataProvider = dataProv;
export const adminPage = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="member" list={MemberList} edit= {MemberEdit} create = {MemberCreate}/>
    </Admin>
)

export default adminPage
