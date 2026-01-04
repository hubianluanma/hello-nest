import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tb_user')
export class UserEntity {
    @PrimaryColumn({ type: "bigint" })
    id: number;
    @Column({ type: "varchar", length: 20, unique: true, nullable: false })
    username: string;
    @Column({ type: "varchar", length: 20, nullable: false })
    nickname: string;
    @Column({ type: "varchar", length: 100, nullable: false, name: "mp_open_id" })
    mpOpenId: string;
    @Column({ type: "varchar", length: 100, nullable: true, name: "avatar_path" })
    avatarPath: string;
    @Column({ type: "int", nullable: false, default: 0 })
    score: number;
    @Column({ type: "datetime", nullable: false, name: "create_time" })
    createTime: Date;
    @Column({ type: "tinyint", default: false })
    subscribed: boolean;
    @Column({ type: "json", name: "addr_json" })
    addrJson: string;
}