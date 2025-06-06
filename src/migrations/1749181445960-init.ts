import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1749181445960 implements MigrationInterface {
    name = 'Init1749181445960'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "task" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "created_at"`);
    }

}
