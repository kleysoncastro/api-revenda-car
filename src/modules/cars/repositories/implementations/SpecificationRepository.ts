import { Specification } from "../../model/Specification";
import {
    ISpecificationRepository,
    ISpecificationRepositoryTDO,
} from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ISpecificationRepositoryTDO): void {
        const specification = new Specification();
        Object.assign(specification, {
            name,
            description,
            create_at: new Date(),
        });
        this.specifications.push(specification);
    }

    findByName(name: string): Specification | undefined {
        const specification = this.specifications.find(
            (specification) => specification.name === name
        );
        return specification;
    }
}

export { SpecificationRepository };
