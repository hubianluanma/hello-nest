import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_admin_user')
export class AdminUserEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: "varchar", length: 100, unique: true, nullable: false })
    username: string;
    @Column({ type: "varchar", length: 100, nullable: false })
    password: string;
    @Column({ type: "datetime", nullable: false, name: "create_time", default: () => "CURRENT_TIMESTAMP" })
    createTime: Date;
    @Column({ type: "datetime", nullable: true, name: "last_login_time", default: () => "CURRENT_TIMESTAMP" })
    lastLoginTime: Date;
}