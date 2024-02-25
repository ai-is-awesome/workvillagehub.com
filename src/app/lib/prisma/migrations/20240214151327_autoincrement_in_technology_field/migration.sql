-- AlterTable
CREATE SEQUENCE technology_id_seq;
ALTER TABLE "Technology" ALTER COLUMN "id" SET DEFAULT nextval('technology_id_seq');
ALTER SEQUENCE technology_id_seq OWNED BY "Technology"."id";
