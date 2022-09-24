import React, { Component } from 'react'
import axios from 'axios';

const CallBanner = (props) => {
    return new Promise((resolve, reject) => {
      // axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem('Token');
      // axios.defaults.headers.common["X-Request-Id"] = "Line-OA";
      axios.get('https://pbtcenters-api.azurewebsites.net/Api/Product/BannerList', {
          
        })
        .then(function (resp) {
          resolve(resp.data);           
        })
        .catch(function (error) {
          reject(error.response.data);
        });
    })
  }
 

export default CallBanner;