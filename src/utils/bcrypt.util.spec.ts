import { Test, TestingModule } from '@nestjs/testing';
import { BcryptUtil } from './bcrypt.util';

describe('BcryptUtil', () => {

  describe('encode plain password and valid password', () => {
    it('should be pass', async () => {
        const hashedPassword = await BcryptUtil.encodePassword('huhailong', 10);
        const isValid = await BcryptUtil.comparePassword('huhailong', hashedPassword);
        expect(isValid).toBe(true);
    });
  })
});