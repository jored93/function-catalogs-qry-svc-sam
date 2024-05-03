export class CatalogService {
    constructor(){}

    async listCatalog(){
        const catalog = [
            {
                id: 1,
                name: 'Services',
                description: 'description real to services'
            },
            {
                id: 2,
                name: 'Operations',
                description: 'description real to operations'
            }
        ]

        const otherCatalog = [
            {
                id: 3,
                name: 'Contacts',
                description: 'description real to services'
            },
            {
                id: 4,
                name: 'Projects',
                description: 'description real to operations'
            }
        ]

        return otherCatalog
    }

}