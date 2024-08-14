import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableState1723670586792 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`ALTER TABLE public.state ADD COLUMN country_id AFTER uf integer;`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`ALTER TABLE public.state DROP COLUMN country_id;`);
    }

}
