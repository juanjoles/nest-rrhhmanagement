import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMigration1633997404292 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query("INSERT INTO offices (name) VALUES ('Office1'),('Office2'),('Office3');");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
