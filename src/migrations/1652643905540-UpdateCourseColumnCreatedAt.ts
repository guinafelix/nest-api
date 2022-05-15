import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateCourseColumnCreatedAt1652643905540
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "courses" RENAME COLUMN "create_at" TO "created_at"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "courses" RENAME COLUMN "created_at" TO "create_at"`,
    );
  }
}
