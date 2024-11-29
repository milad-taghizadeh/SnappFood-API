import { EntityNames } from "src/common/enums/entity-name.enum";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity(EntityNames.UserAddress)
export class UserAddressEntity {
    @PrimaryGeneratedColumn('increment')
    id:number;
    @Column()
    title : string
    @Column()
    province : string
    @Column()
    city : string
    @Column()
    address : string
    @Column({unique: true})
    postal_code : string
    @Column()
    userId : number
    @CreateDateColumn()
    created_at : Date

    @ManyToOne(() => UserEntity, (user) => user.addressList, {onDelete: "CASCADE"} )
    user: UserEntity;
}