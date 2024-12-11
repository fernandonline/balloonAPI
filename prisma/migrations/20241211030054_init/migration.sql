-- CreateTable
CREATE TABLE "balloon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,

    CONSTRAINT "balloon_pkey" PRIMARY KEY ("id")
);
