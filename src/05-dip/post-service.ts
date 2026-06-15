
/**
 * VIOLACIÓN AL PRINCIPIO DE INVERSIÓN DE DEPENDENCIAS (DIP)
 * 
 * El servicio de publicaciones depende de una implementación concreta
 * en lugar de una abstracción.
 */

export interface DatabaseProvider {
    getPosts(): Promise<Post[]>;
}

export interface Post {
    id: number;
    title: string;
    body: string;
}

export class PostService {

    constructor(private readonly databaseProvider: DatabaseProvider) {}

    async getPosts() {
        return this.databaseProvider.getPosts();
    }

}
