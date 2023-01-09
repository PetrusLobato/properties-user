import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";



@Entity("addresses")
export class Addresse{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({nullable:false})
    district:string

    @Column({nullable:false, length: 8})
    zipCode:string

    @Column({nullable:true})
    number?:string        // ? informa campo não obigatorio

    @Column({nullable:false})
    city:string

    @Column({nullable:false, length:2})
    state:string

}