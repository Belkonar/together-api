import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as process from 'process';

@Injectable()
export class AuthService {
  accessToken?: string;

  async getToken() {
    // These tokens last a whole day, so we can cache them pretty heavily
    if (this.accessToken) {
      return this.accessToken;
    }

    const response = await axios.post('https://fga.us.auth0.com/oauth/token', {
      client_id: process.env.FGA_CLIENT_ID,
      client_secret: process.env.FGA_CLIENT_SECRET,
      audience: 'https://api.us1.fga.dev/',
      grant_type: 'client_credentials',
    });

    if (response.status !== 200) {
      throw new Error('Error getting token');
    }

    this.accessToken = response.data.access_token;

    return this.accessToken;
  }

  async writeTuple() {}
}
