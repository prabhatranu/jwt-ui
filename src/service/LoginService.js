
import UserStore from '../store/UserStore';
import axios from 'axios';
import API from '../api/API';
import TokenStore from '../store/TokenStore';

 export default class LoginService {

     login(request, callback) {
         axios.post(API.login + "?userId=" + request.userId + "&password=" + request.password)
             .then(function (response) {
               
                 let data = response.data;
                 if (data.status !== 200) {
                     callback(false, data);
                 } else {
                     data = data.data;
                     callback(true, data);
                 }
             }).catch(function (error) {
                 callback(false, { message: 'Network problem' });
             });
     }

     getCompanyList(callback) {

         alert("Token eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJHNTAwMSIsInBhc3N3b3JkIjoiODU2OGFkMyIsInJvbGUiOiJVc2VyIn0.xLjIzEfPuAy7xcYfiMorDbZldSfa5yIM3PkAuOhWcxk")
         axios.get(API.getLog, { headers: { Authorization: "Token eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJHNTAwMSIsInBhc3N3b3JkIjoiODU2OGFkMyIsInJvbGUiOiJVc2VyIn0.xLjIzEfPuAy7xcYfiMorDbZldSfa5yIM3PkAuOhWcxk" } })
             .then(function (response) {
                 alert('19191919')
                 if (response.data.status === 200) {
                     callback(true, response.data.data);
                 } else {
                     callback(false, null);
                 }
             })
             .catch(function (error) {
                 callback(false, null);
             });
     }

 }