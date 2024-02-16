-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_cityId_fkey";

-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_continentId_fkey";

-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_countryId_fkey";

-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "countryIcon" TEXT;

-- AlterTable
ALTER TABLE "Location" ALTER COLUMN "cityId" DROP NOT NULL,
ALTER COLUMN "countryId" DROP NOT NULL,
ALTER COLUMN "continentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_continentId_fkey" FOREIGN KEY ("continentId") REFERENCES "Continent"("id") ON DELETE SET NULL ON UPDATE CASCADE;
