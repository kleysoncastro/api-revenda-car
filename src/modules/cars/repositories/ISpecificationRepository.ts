import { Specification } from "../model/Specification";

interface ISpecificationRepositoryTDO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ name, description }: ISpecificationRepositoryTDO): void;
    findByName(name: string): Specification | undefined;
}

export { ISpecificationRepository, ISpecificationRepositoryTDO };
