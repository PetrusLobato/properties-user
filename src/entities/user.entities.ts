import { hashSync } from "bcryptjs";
import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, BeforeInsert, OneToMany } from "typeorm";
import { Schedules } from "./schedules.user.properties.entities";


@Entity()
export class Users {

    @PrimaryGeneratedColumn("uuid") // PRIMARY KEY(BIGSERISL)
    id:string

    @Column({length:50, nullable:false}) // Não pode ser nulo
    name: string

    @Column({length:50, unique:true, nullable:false })
    email:string

    @Column({length:120, nullable:false})
    password:string

    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10)
    }

    @Column()
    isAdm:boolean

    @Column({default:true})
    isActive:boolean

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(()=> Schedules, schedules_users_properties => schedules_users_properties.user)
    schedules: Schedules[]


}
