import { Body, Controller, Get, Post, Query, UseGuards, UsePipes } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

	constructor(private usersService: UsersService) { }

	@Post('/create')
	createUser(@Body() userDto: CreateUserDto) {
		return this.usersService.createUser(userDto);
	}

	// @UseGuards(JwtAuthGuard)
	// @Roles("ADMIN")
	// @UseGuards(RolesGuard)
	@Get()
	getAllUsers(@Query() limits: {limit:number, page: number}) {
		return this.usersService.getAllUsers(limits);
	}

	@Roles("ADMIN")
	@UseGuards(RolesGuard)
	@Post('/role')
	addRole(@Body() dto: AddRoleDto) {
		return this.usersService.addRole(dto);
	}

	@Roles("ADMIN")
	@UseGuards(RolesGuard)
	@Post('/ban')
	ban(@Body() dto: BanUserDto) {
		return this.usersService.ban(dto);
	}
}
