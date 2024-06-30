-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "university" TEXT NOT NULL,
    "program" TEXT NOT NULL,
    "education_level" TEXT NOT NULL,
    "region" TEXT NOT NULL DEFAULT 'N/A',

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Case" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "goal" DOUBLE PRECISION NOT NULL,
    "deadline" DATE NOT NULL,
    "description" TEXT NOT NULL,
    "funding_wallet" TEXT NOT NULL,
    "payment_token" TEXT DEFAULT 'USDC',
    "total_funding" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "Case_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Donation" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "caseId" INTEGER NOT NULL,
    "wallet" TEXT NOT NULL,
    "created_at" DATE NOT NULL,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Case_studentId_key" ON "Case"("studentId");

-- AddForeignKey
ALTER TABLE "Case" ADD CONSTRAINT "Case_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Case"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
