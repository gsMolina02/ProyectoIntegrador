
/**
 * DATA PROVIDER ACUPLADO
 */

import { DatabaseProvider, Post } from '../05-dip/post-service';

export class LocalDatabaseService {
    async getPosts(): Promise<Post[]> {
        return [
            { id: 1, title: 'Avistamiento de Jaguar', body: 'Se reportó un jaguar cerca del río.' },
            { id: 2, title: 'Nuevas Orquídeas', body: 'Han florecido las especies raras en el jardín botánico.' }
        ];
    }
}

export class JsonDatabaseService implements DatabaseProvider {
    async getPosts(): Promise<Post[]> {
        return [
            { id: 1, title: 'JSON Post 1', body: 'Contenido desde JSON' }
        ];
    }
}

export class MockDatabaseService implements DatabaseProvider {
    async getPosts(): Promise<Post[]> {
        return [
            { id: 99, title: 'Mock Post', body: 'Contenido de prueba para unit tests' }
        ];
    }
}
