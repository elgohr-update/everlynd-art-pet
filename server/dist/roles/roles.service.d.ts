import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';
export declare class RolesService {
    private rolesRepository;
    constructor(rolesRepository: typeof Role);
    createRole(dto: CreateRoleDto): Promise<Role>;
    getRoleByValue(value: string): Promise<Role>;
}
