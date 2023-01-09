import { MigrationInterface, QueryRunner } from "typeorm";

export class attupdatedAt1672107045468 implements MigrationInterface {
    name = 'attupdatedAt1672107045468'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updatedA" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updatedAt" TO "updatedA"`);
    }

}
