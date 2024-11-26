import { EntityNames } from "src/common/enums/entity-name.enum";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity(EntityNames.Category)
export class CategoryEntity {
    @PrimaryGeneratedColumn('increment')
    id:number;
    @Column()
    title : string
    @Column({unique : true})
    slug : string
    @Column()
    image : string
    @Column()
    show : boolean
    @ManyToOne(() => CategoryEntity, category => category.children, { onDelete: 'CASCADE' })  // cascade delete when parent category is deleted)
    parent : CategoryEntity
    @OneToMany(() => CategoryEntity, category => category.parent)
    children : CategoryEntity[]
    @Column({nullable : true})
    parentId : number
    @Column({default: 0})
    score : number
    @Column({nullable: true})
    agentId : number
    @CreateDateColumn({type: "time with time zone"})
    created_at : Date
    @UpdateDateColumn({type: "time with time zone"})
    updated_at : Date


}
