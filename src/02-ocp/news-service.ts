
/**
 * REFCTOR OCP: el servicio depende de una abstracción HTTP y no de un cliente concreto.
 * Si mañana queremos migrar de fetch a axios, solo cambiaría el adaptador.
 */

import { HttpClient } from './http-client';

export interface NewsItem {
    id: number;
    title: string;
    body: string;
}

export interface PhotoItem {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export class NewsService {

    constructor(private readonly httpClient: HttpClient) {}

    async getLatestNews() {
        console.log('Obteniendo noticias de la reserva biológica...');
        return this.httpClient.get<NewsItem[]>('https://jsonplaceholder.typicode.com/posts');
    }

}

export class PhotosService {

    constructor(private readonly httpClient: HttpClient) {}

    async getGallery() {
        return this.httpClient.get<PhotoItem[]>('https://jsonplaceholder.typicode.com/photos');
    }

}
