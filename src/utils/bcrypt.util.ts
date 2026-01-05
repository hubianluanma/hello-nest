import * as bcrypt from 'bcryptjs';

export class BcryptUtil {

    /**
     * 加密明文密码
     * @param password 明文密码
     * @param saltRounds 盐值
     * @returns 加密后的密码
     */
    public static async encodePassword(password: string, saltRounds: number): Promise<string> {
        const salt = await bcrypt.genSalt(saltRounds);
        return bcrypt.hash(password, salt);
    }

    /**
     * 验证密码正确性
     * @param plainPassword 明文密码
     * @param hashedPassword 加密密码
     * @returns 比较结果
     */
    public static async comparePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }
}