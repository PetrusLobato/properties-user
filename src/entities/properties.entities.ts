import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import { Addresse } from "./addresses.entities";
import { Categore } from "./categories.entities";
import { Schedules } from "./schedules.user.properties.entities";



@Entity("properties")
export class Propertie{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({default:false})
    sold:boolean

    @Column({type:'decimal'})
    value:number

    @Column({type:"integer"})
    size:number

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne(() => Addresse) @JoinColumn()
    address:Addresse

    @ManyToOne(()=> Categore, categore => categore.properties)
    category:Categore

    @OneToMany(() => Schedules, schedules_users_properties => schedules_users_properties.property )
    schedules: Schedules[]


}