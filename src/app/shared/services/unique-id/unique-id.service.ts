import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService{

    private numberOfGeneratedIds = 0;

    private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

    public generateUniqueIdWithPrefix(prefix: string): string {
        if(!prefix) {
            throw Error('Prefix can not be empty');
        } else if(!this.validId.test(prefix)) {
            throw Error('Prefix must respect the ID format');
        }

        const uniqueId = this.generateUniqueId();
        this.numberOfGeneratedIds += 1;
        return `${prefix}-${uniqueId}`;
    }

    public getNumberOfGeneratedIds(): number {
        return this.numberOfGeneratedIds;
    }

    private generateUniqueId(): string {
        return uuidv4();
    }
}