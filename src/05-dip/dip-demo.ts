import { PostService } from './post-service';
import { LocalDatabaseService, MockDatabaseService } from '../data/local-database';

const localPostService = new PostService(new LocalDatabaseService());
const mockPostService = new PostService(new MockDatabaseService());

void localPostService.getPosts().then((posts) => {
    console.log('Posts cargados desde LocalDatabaseService:', posts);
});

void mockPostService.getPosts().then((posts) => {
    console.log('Posts cargados desde MockDatabaseService:', posts);
});