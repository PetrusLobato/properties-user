import { PrimaryGeneratedColumn, Entity, CreateDateColumn, ManyToOne } from "typeorm";
import { Propertie } from "./properties.entities";
import { Users } from "./user.entities";


@Entity("schedules_users_properties")
export class Schedules{

    @PrimaryGeneratedColumn('uuid')
    id:string
    // type: 'date' -> 2020-01-01
    // type: 'time' -> 12:00:00
    // type: 'timestamp' -> 2020-01-01 12:00:00
    @CreateDateColumn({type:'date'})
    date: string

    @CreateDateColumn({type:"time"})
    hour: string

    @ManyToOne(() => Users, users => users.schedules)
    user:Users

    @ManyToOne(() => Propertie, propertie => propertie.schedules )
    property: Propertie


}

