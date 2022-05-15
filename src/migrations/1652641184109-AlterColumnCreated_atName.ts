import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterColumnCreatedAtName1652641184109
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tags" RENAME COLUMN "create_at" TO "created_at"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tags" RENAME COLUMN "created_at" TO "create_at"`,
    );
  }
}
