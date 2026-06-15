import { FetchHttpClient } from './fetch-http-client';
import { NewsService, PhotosService } from './news-service';

const httpClient = new FetchHttpClient();
const newsService = new NewsService(httpClient);
const photosService = new PhotosService(httpClient);

void newsService.getLatestNews()
    .then((news) => {
        console.log('Primeras noticias cargadas por el adaptador HTTP:', news.slice(0, 2));
    })
    .catch((error) => {
        console.error('No fue posible cargar las noticias:', error);
    });

void photosService.getGallery()
    .then((photos) => {
        console.log('Primeras fotos cargadas por el adaptador HTTP:', photos.slice(0, 2));
    })
    .catch((error) => {
        console.error('No fue posible cargar la galería:', error);
    });