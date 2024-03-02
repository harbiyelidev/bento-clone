'use client';
import axios from 'axios';
import useSWR from 'swr';
import { discordId } from './variables';

export default function SWR(url) {
  if (url === 'discord') url = 'https://api.lanyard.rest/v1/users/' + discordId;

  return useSWR(url, href => (
    axios.get(href).then((res) => res.data)
  )
  );
};