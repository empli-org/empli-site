-- CreateTable
CREATE TABLE "Talent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "yearsOfExp" INTEGER NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "userEmail" TEXT
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "talentId" TEXT,
    CONSTRAINT "Role_talentId_fkey" FOREIGN KEY ("talentId") REFERENCES "Talent" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SocialInfo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "twitter" TEXT,
    "facebook" TEXT,
    "linkedin" TEXT,
    "website" TEXT,
    "talentId" TEXT,
    "companyId" TEXT,
    CONSTRAINT "SocialInfo_talentId_fkey" FOREIGN KEY ("talentId") REFERENCES "Talent" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "SocialInfo_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ContactInfo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "phone" TEXT,
    "address" TEXT,
    "city" TEXT,
    "zip" TEXT,
    "country" TEXT,
    "talentId" TEXT,
    "companyId" TEXT,
    CONSTRAINT "ContactInfo_talentId_fkey" FOREIGN KEY ("talentId") REFERENCES "Talent" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ContactInfo_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "talentId" TEXT,
    CONSTRAINT "Skill_talentId_fkey" FOREIGN KEY ("talentId") REFERENCES "Talent" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "plan" TEXT,
    "userEmail" TEXT,
    "categoryId" TEXT NOT NULL,
    CONSTRAINT "Company_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "requiredExp" INTEGER NOT NULL,
    "minRate" REAL,
    "maxRate" REAL,
    "companyId" TEXT NOT NULL,
    CONSTRAINT "Job_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Talent_userEmail_key" ON "Talent"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "SocialInfo_talentId_key" ON "SocialInfo"("talentId");

-- CreateIndex
CREATE UNIQUE INDEX "SocialInfo_companyId_key" ON "SocialInfo"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "ContactInfo_talentId_key" ON "ContactInfo"("talentId");

-- CreateIndex
CREATE UNIQUE INDEX "ContactInfo_companyId_key" ON "ContactInfo"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "Company_userEmail_key" ON "Company"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Job_code_key" ON "Job"("code");
