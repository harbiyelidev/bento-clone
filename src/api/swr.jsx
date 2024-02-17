'use client';
import axios from 'axios';
import { discordId } from './variables';

export default function SWR() {

  const apiKey = 'test'; // API anahtarınızı buraya ekleyin
  const apiUrl = `http://89.150.148.119:10000/user/${discordId}`; // İstek atılacak API URL'sini belirtin
  
  try {
      const response = axios.get(apiUrl, {
          headers: {
              'x-api-key': apiKey,
          },
      });
      
      console.log("İstek Başarılı!", response.data);
  } catch (error) {
      console.error('Hata:', error);
  }

};