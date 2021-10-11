import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    
} from 'typeorm';

@Entity()

export class Offices {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({type: 'varchar'})
    name:string
}