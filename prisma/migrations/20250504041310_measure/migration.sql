-- CreateTable
CREATE TABLE "measure" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "short_forn" TEXT NOT NULL,

    CONSTRAINT "measure_pkey" PRIMARY KEY ("id")
);
