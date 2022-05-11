import { UniqueIdService } from "./unique-id.service";

// const service = new UniqueIdService();

describe(UniqueIdService.name, () => {
    //let service: UniqueIdService = null;
    let service: UniqueIdService = new UniqueIdService();
    beforeEach(() => {
        service = new UniqueIdService();
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should generate id when called with prefix`, () => {
        const id = service.generateUniqueIdWithPrefix('app');

        expect(id.startsWith('app-')).toBeTrue();
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should not generate duplicate IDs when called multiple times`, () => {
        const ids = new Set();

        for(let i = 0; i < 50; i++) {
            ids.add(service.generateUniqueIdWithPrefix('app'));
        }

        expect(ids.size).toBe(50);
    });

    it(`#${UniqueIdService.prototype.getNumberOfGeneratedIds.name}
    should return the number of generated IDs when called`, () => {
        for(let i = 0; i < 50; i++) {
            service.generateUniqueIdWithPrefix('app');
        }

        expect(service.getNumberOfGeneratedIds()).toBe(50);
    })
});