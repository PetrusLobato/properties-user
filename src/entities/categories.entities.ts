import { PrimaryGeneratedColumn, Column, Entity, OneToMany} from "typeorm";
import { Propertie } from "./properties.entities";



@Entity("categories")
export class Categore{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({length:100, unique:true, nullable:false})
    name:string

    @OneToMany(() => Propertie, propertie => propertie.category)
    properties: Propertie[]

}